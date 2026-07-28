import assert from "node:assert/strict";
import test from "node:test";

import {
  conversationInventoryLinkErrors,
  documentInventoryLinkErrors,
  recoveredContentHash,
} from "./evidence-link-validation.mjs";

const retainedHash = "a".repeat(64);

test("accepts a conversation source only when its inventory locator matches", () => {
  const source = {
    title: "CAST-DM-1523 Experiment Canvas-240125-081130.pdf",
    source_file: "conversations-015.json",
    conversation_id: "conversation-a",
  };
  const record = {
    source_record_id: "chatgpt-file-a",
    source_system: "chatgpt",
    canonical_name: source.title,
    alternate_names: [],
    custody: "retained-partial",
    retained_text: { chars: 1200, sha256: retainedHash },
    locators: [{
      source_file: "conversations-015.json",
      conversation_id: "conversation-a",
      message_id: "message-a",
    }],
  };

  assert.deepEqual(conversationInventoryLinkErrors(source, record), []);
  assert.match(
    conversationInventoryLinkErrors(
      { ...source, conversation_id: "conversation-b" },
      record,
    )[0],
    /does not contain the source locator/,
  );
});

test("rejects a valid locator when the canvas title belongs to another inventory record", () => {
  const source = {
    title: "CAST-DM-1523 Experiment Canvas-240125-081130.pdf",
    source_file: "conversations-015.json",
    conversation_id: "conversation-a",
  };
  const swappedRecord = {
    source_record_id: "chatgpt-file-b",
    source_system: "chatgpt",
    canonical_name: "CAST-DM-1418 Experiment Canvas-240125-081054.pdf",
    alternate_names: [],
    custody: "retained-partial",
    retained_text: { chars: 1200, sha256: retainedHash },
    locators: [{
      source_file: "conversations-015.json",
      conversation_id: "conversation-a",
      message_id: "message-a",
    }],
  };

  assert.match(
    conversationInventoryLinkErrors(source, swappedRecord)[0],
    /does not match source title/,
  );
});

test("rejects a swapped recovered-document path or retained-text hash", () => {
  const source = { repo_path: "private-evidence/source-documents/recovered/source-a.md" };
  const record = {
    source_record_id: "claude-document-a",
    source_system: "claude-projects",
    custody: "retained-full",
    recovered_repo_path: source.repo_path,
    retained_text: { sha256: retainedHash },
  };

  assert.deepEqual(documentInventoryLinkErrors(source, record, retainedHash), []);
  assert.match(
    documentInventoryLinkErrors(
      { repo_path: "private-evidence/source-documents/recovered/source-b.md" },
      record,
      retainedHash,
    )[0],
    /does not own/,
  );
  assert.match(
    documentInventoryLinkErrors(source, record, "b".repeat(64))[0],
    /retained-text hash does not match/,
  );
});

test("fingerprints recovered content without its provenance frontmatter", () => {
  const markdown = `---\nsource_document: Example.pdf\nsha256: ${retainedHash}\n---\n\nSource text\n`;
  assert.equal(
    recoveredContentHash(markdown),
    "1c462e0c5bc028f32d57e426d78140596265efa1cecd3845399546e2acf06f16",
  );
});
