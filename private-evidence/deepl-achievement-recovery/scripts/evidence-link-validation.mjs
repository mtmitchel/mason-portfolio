import crypto from "node:crypto";

const sha256Pattern = /^[a-f0-9]{64}$/;

export function recoveredContentHash(markdown) {
  const frontmatter = String(markdown).match(/^---\n[\s\S]*?\n---\n/);
  if (!frontmatter) return null;
  const wrappedBody = String(markdown).slice(frontmatter[0].length);
  const sourceBody = wrappedBody.startsWith("\n") ? wrappedBody.slice(1) : wrappedBody;
  return crypto.createHash("sha256")
    .update(sourceBody)
    .digest("hex");
}

export function conversationInventoryLinkErrors(source, inventoryRecord) {
  const errors = [];
  if (inventoryRecord.source_system !== "chatgpt") {
    errors.push(`inventory record ${inventoryRecord.source_record_id} is not a ChatGPT record`);
  }

  const matchingLocator = (inventoryRecord.locators ?? []).some((locator) => (
    locator.source_file === source.source_file
    && locator.conversation_id === source.conversation_id
    && (!source.message_id || locator.message_id === source.message_id)
  ));
  if (!matchingLocator) {
    errors.push(`inventory record ${inventoryRecord.source_record_id} does not contain the source locator`);
  }

  const inventoryNames = [
    inventoryRecord.canonical_name,
    ...(inventoryRecord.alternate_names ?? []),
  ];
  if (!inventoryNames.includes(source.title)) {
    errors.push(`inventory record ${inventoryRecord.source_record_id} does not match source title ${source.title ?? "<missing>"}`);
  }

  if (
    inventoryRecord.custody === "retained-partial"
    && (
      !Number.isInteger(inventoryRecord.retained_text?.chars)
      || inventoryRecord.retained_text.chars < 1
      || !sha256Pattern.test(inventoryRecord.retained_text?.sha256 ?? "")
    )
  ) {
    errors.push(`inventory record ${inventoryRecord.source_record_id} lacks a valid retained-text fingerprint`);
  }

  return errors;
}

export function documentInventoryLinkErrors(source, inventoryRecord, actualHash) {
  const errors = [];
  if (!String(inventoryRecord.source_system).startsWith("claude-")) {
    errors.push(`inventory record ${inventoryRecord.source_record_id} is not a Claude record`);
  }
  if (inventoryRecord.recovered_repo_path !== source.repo_path) {
    errors.push(`inventory record ${inventoryRecord.source_record_id} does not own ${source.repo_path}`);
  }
  if (!sha256Pattern.test(actualHash ?? "")) {
    errors.push(`${source.repo_path} does not have a valid SHA-256`);
  } else if (inventoryRecord.retained_text?.sha256 !== actualHash) {
    errors.push(`inventory record ${inventoryRecord.source_record_id} retained-text hash does not match ${source.repo_path}`);
  }
  if (!["retained-full", "original-binary"].includes(inventoryRecord.custody)) {
    errors.push(`inventory record ${inventoryRecord.source_record_id} does not hold complete source content`);
  }
  return errors;
}
