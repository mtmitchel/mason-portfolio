import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.argv[2] ?? ".");
const outputDir = path.resolve(process.argv[3] ?? path.join(root, "outputs/deepl-achievement-recovery"));

const reviewSpineIds = new Set([
  "b87181a3-59dd-4baa-abbe-5a9159959cb4", // Annual Review: Successes & Challenges
  "f5b0554c-46e3-4229-b773-8b48a4078b17", // Performance Review Assistance
  "6793425e-2340-8006-a7d3-3ea84fac6d1e", // Performance Review Reflection Help
  "6793d3ff-e69c-8006-8e74-994e93bc419d", // People Leadership Feedback
  "67d2da73-0148-8006-83c3-1bbb62aab9cb", // Performance Review Talking Points
]);

const signals = {
  company: [
    /\bdeepl\b/i,
    /\bcontent experience\b/i,
    /\bCEX\b/,
    /\bapps?\s*(?:&|and)\s*integrations?\b/i,
    /\bmonetization\b/i,
    /\bidentity and access management\b/i,
    /\bIAM\b/,
    /\bATE\b/,
  ],
  review: [
    /performance review/i,
    /self[- ]?reflection/i,
    /annual review/i,
    /peer (?:review|feedback)/i,
    /leadership feedback/i,
    /key achievements?/i,
    /accomplishments?/i,
    /positive impact/i,
    /core values/i,
    /development goal/i,
    /promotion/i,
  ],
  work: [
    /landing pages?/i,
    /enterprise page/i,
    /go enterprise/i,
    /pro drivers?/i,
    /pricing (?:and|&) packaging/i,
    /pricing page/i,
    /checkout/i,
    /desktop apps?/i,
    /navigation bar/i,
    /sales contact form/i,
    /press page/i,
    /footer revamp/i,
    /content (?:creation )?workflow/i,
    /style guide/i,
    /design system/i,
    /copy review/i,
    /MFA|multi-factor authentication/i,
    /SSO|single sign-on/i,
    /audit logs?/i,
    /multi[- ]subscriptions?/i,
    /standard (?:processes|ways of working)/i,
    /localization process/i,
    /account (?:access|recovery|security)/i,
    /invitations?/i,
    /glossar(?:y|ies)/i,
    /figma/i,
    /jira/i,
  ],
  evidence: [
    /\b(?:I|we) (?:wrote|created|developed|contributed|collaborated|supported|helped|proposed|launched|shipped|released|revamped|improved|optimized|designed|established|implemented|delivered|worked|started supporting)\b/i,
    /\b(?:impact|outcome|result|metric|conversion|revenue|engagement|adoption|downloads?|traffic|inquir(?:y|ies)|pipeline)\b/i,
    /(?:\d+(?:\.\d+)?\s*%|[€$£]\s?\d|\d+(?:\.\d+)?\s*(?:million|thousand)|\b\d+\s+(?:new\s+)?landing pages?\b)/i,
  ],
  correction: [
    /\bI (?:didn['’]t|did not|don['’]t|do not|wasn['’]t|was not|haven['’]t|have not)\b/i,
    /\bI (?:merely|only|just)\b/i,
    /\bmade (?:that|this|all that) up\b/i,
    /\bnot (?:lead|led|own|owned|identify|propose)\b/i,
    /\boverstated?\b/i,
    /\bwhy (?:aren['’]t|are not) you including\b/i,
  ],
};

function countMatches(text, patterns) {
  return patterns.reduce((count, pattern) => count + Number(pattern.test(text)), 0);
}

function messageText(message) {
  const parts = message?.content?.parts ?? [];
  return parts
    .filter((part) => typeof part === "string")
    .join("\n")
    .trim();
}

function isoDate(epoch, fallback = null) {
  if (!Number.isFinite(epoch)) return fallback;
  return new Date(epoch * 1000).toISOString();
}

function compactExcerpt(text, maxLength = 650) {
  const normalized = text.replace(/\s+/g, " ").trim();
  return normalized.length <= maxLength ? normalized : `${normalized.slice(0, maxLength - 1)}…`;
}

function evidenceChunks(text) {
  return text
    .split(/\n{2,}|(?<=[.!?])\s+(?=[A-Z0-9])/)
    .map((chunk) => chunk.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .filter((chunk) => countMatches(chunk, signals.evidence) > 0)
    .slice(0, 30);
}

function metricChunks(text) {
  const metric = /(?:\d+(?:\.\d+)?\s*%|[€$£]\s?\d[\d,.]*|\d+(?:\.\d+)?\s*(?:million|thousand)|\b\d+\s+(?:new\s+)?landing pages?\b|\b\d+(?:\.\d+)?\s*million\s+downloads?\b)/i;
  return text
    .split(/\n+|(?<=[.!?])\s+(?=[A-Z0-9])/)
    .map((chunk) => chunk.replace(/\s+/g, " ").trim())
    .filter((chunk) => metric.test(chunk))
    .slice(0, 50);
}

function correctionChunks(text) {
  return text
    .split(/\n+|(?<=[.!?])\s+(?=[A-Z0-9])/)
    .map((chunk) => chunk.replace(/\s+/g, " ").trim())
    .filter((chunk) => countMatches(chunk, signals.correction) > 0)
    .slice(0, 50);
}

function extractFilePointers(value) {
  const text = JSON.stringify(value);
  return [...new Set(text.match(/file-[A-Za-z0-9]+(?:\.dat)?/g) ?? [])];
}

await fs.mkdir(outputDir, { recursive: true });

let assetNames = {};
try {
  assetNames = JSON.parse(await fs.readFile(path.join(root, "conversation_asset_file_names.json"), "utf8"));
} catch {
  // The conversation evidence remains usable without the optional asset-name map.
}

const files = (await fs.readdir(root))
  .filter((name) => /^conversations-\d+\.json$/.test(name))
  .sort();

const candidates = [];
const sourceMessages = [];
const metrics = [];
const corrections = [];
let totalConversations = 0;
let totalUserMessages = 0;

for (const fileName of files) {
  const conversations = JSON.parse(await fs.readFile(path.join(root, fileName), "utf8"));
  for (const conversation of conversations) {
    totalConversations += 1;
    const messages = Object.values(conversation.mapping ?? {})
      .map((node) => node?.message)
      .filter((message) => message?.author?.role === "user")
      .map((message) => ({
        id: message.id ?? null,
        created_at: isoDate(message.create_time, isoDate(conversation.create_time)),
        text: messageText(message),
        file_pointers: extractFilePointers(message),
      }))
      .filter((message) => message.text)
      .sort((a, b) => (a.created_at ?? "").localeCompare(b.created_at ?? ""));

    totalUserMessages += messages.length;
    const title = conversation.title ?? "Untitled conversation";
    const userText = messages.map((message) => message.text).join("\n");
    const titleText = `${title}\n${userText}`;
    const companyHits = countMatches(titleText, signals.company);
    const reviewHits = countMatches(titleText, signals.review);
    const workHits = countMatches(titleText, signals.work);
    const evidenceHits = countMatches(userText, signals.evidence);
    const isReviewSpine = reviewSpineIds.has(conversation.conversation_id);
    const score = (isReviewSpine ? 20 : 0) + companyHits * 5 + reviewHits * 4 + Math.min(workHits, 8) * 2 + Math.min(evidenceHits, 4) * 2;

    const relevant = isReviewSpine || (companyHits > 0 && (reviewHits > 0 || workHits > 0 || evidenceHits > 0));
    if (!relevant) continue;

    const allFilePointers = [...new Set(messages.flatMap((message) => message.file_pointers))];
    const attachments = allFilePointers.map((pointer) => {
      const datName = pointer.endsWith(".dat") ? pointer : `${pointer}.dat`;
      return {
        pointer,
        export_file: assetNames[datName] ? datName : null,
        original_name: assetNames[datName] ?? null,
      };
    });

    const candidate = {
      rank_score: score,
      review_spine: isReviewSpine,
      source_file: fileName,
      conversation_id: conversation.conversation_id,
      title,
      created_at: isoDate(conversation.create_time),
      updated_at: isoDate(conversation.update_time),
      user_message_count: messages.length,
      user_character_count: userText.length,
      signal_counts: {
        company: companyHits,
        review: reviewHits,
        work: workHits,
        evidence: evidenceHits,
      },
      attachments,
      opening_excerpt: compactExcerpt(messages[0]?.text ?? ""),
    };
    candidates.push(candidate);

    for (const message of messages) {
      const messageCompanyHits = countMatches(message.text, signals.company);
      const messageReviewHits = countMatches(message.text, signals.review);
      const messageWorkHits = countMatches(message.text, signals.work);
      const messageEvidenceHits = countMatches(message.text, signals.evidence);
      const messageRelevant = isReviewSpine || messageCompanyHits > 0 || (messageWorkHits > 0 && messageEvidenceHits > 0);
      if (!messageRelevant) continue;

      const locator = {
        source_file: fileName,
        conversation_id: conversation.conversation_id,
        conversation_title: title,
        conversation_created_at: isoDate(conversation.create_time),
        message_id: message.id,
        message_created_at: message.created_at,
      };
      sourceMessages.push({
        ...locator,
        review_spine: isReviewSpine,
        signal_counts: {
          company: messageCompanyHits,
          review: messageReviewHits,
          work: messageWorkHits,
          evidence: messageEvidenceHits,
        },
        file_pointers: message.file_pointers,
        evidence_chunks: evidenceChunks(message.text),
        text: message.text,
      });

      for (const chunk of metricChunks(message.text)) {
        metrics.push({ ...locator, text: chunk, provenance: "user-authored export message", verification_status: "needs source review" });
      }
      for (const chunk of correctionChunks(message.text)) {
        corrections.push({ ...locator, text: chunk });
      }
    }
  }
}

candidates.sort((a, b) => b.rank_score - a.rank_score || (a.created_at ?? "").localeCompare(b.created_at ?? ""));
sourceMessages.sort((a, b) => (a.message_created_at ?? "").localeCompare(b.message_created_at ?? ""));
metrics.sort((a, b) => (a.message_created_at ?? "").localeCompare(b.message_created_at ?? ""));
corrections.sort((a, b) => (a.message_created_at ?? "").localeCompare(b.message_created_at ?? ""));

const summary = {
  generated_at: new Date().toISOString(),
  export_root: root,
  conversation_files: files.length,
  total_conversations: totalConversations,
  total_user_messages: totalUserMessages,
  candidate_conversations: candidates.length,
  review_spine_conversations: candidates.filter((item) => item.review_spine).length,
  extracted_source_messages: sourceMessages.length,
  metric_candidates: metrics.length,
  correction_statements: corrections.length,
  methodology: "Only user-authored messages are retained as evidence. Assistant responses are excluded from the source index.",
};

await Promise.all([
  fs.writeFile(path.join(outputDir, "extraction-summary.json"), `${JSON.stringify(summary, null, 2)}\n`),
  fs.writeFile(path.join(outputDir, "candidate-conversations.json"), `${JSON.stringify(candidates, null, 2)}\n`),
  fs.writeFile(path.join(outputDir, "source-messages.json"), `${JSON.stringify(sourceMessages, null, 2)}\n`),
  fs.writeFile(path.join(outputDir, "metric-candidates.json"), `${JSON.stringify(metrics, null, 2)}\n`),
  fs.writeFile(path.join(outputDir, "role-corrections.json"), `${JSON.stringify(corrections, null, 2)}\n`),
]);

const topRows = candidates.slice(0, 40).map((item) =>
  `| ${item.rank_score} | ${item.created_at?.slice(0, 10) ?? ""} | ${item.title.replaceAll("|", "\\|")} | ${item.source_file} | ${item.conversation_id} |`,
);
const markdown = `# DeepL evidence extraction summary

Generated: ${summary.generated_at}

This extraction deliberately indexes only Mason's user-authored messages. ChatGPT responses are excluded from the evidence source set.

## Coverage

- Conversation JSON files: ${summary.conversation_files}
- Total conversations inspected: ${summary.total_conversations}
- Total user messages inspected: ${summary.total_user_messages}
- Candidate DeepL/work conversations: ${summary.candidate_conversations}
- Source messages retained: ${summary.extracted_source_messages}
- Metric-bearing text candidates: ${summary.metric_candidates}
- Role/attribution corrections: ${summary.correction_statements}

## Highest-ranked candidate conversations

| Score | Date | Title | Export file | Conversation ID |
|---:|---|---|---|---|
${topRows.join("\n")}
`;
await fs.writeFile(path.join(outputDir, "extraction-summary.md"), markdown);

console.log(JSON.stringify(summary, null, 2));
