import assert from "node:assert/strict";
import test from "node:test";

import {
  assistantDerivativesForChatGpt,
  detectBlobSignature,
  documentFamilyId,
  hasDeepLSignal,
  isDocumentLike,
  normalizeDocumentTitle,
  resolveBlobCandidates,
  shouldIncludeChatGptRecord,
} from "./build_deepl_document_inventory.mjs";

test("normalizes title variants without claiming different source IDs are identical", () => {
  assert.equal(
    normalizeDocumentTitle("Copy of Pricing Page Keys .xlsx"),
    "copy of pricing page keys",
  );
  assert.equal(
    documentFamilyId("DeepL Content Style Guide.pdf"),
    documentFamilyId("DeepL Content Style Guide.pdf"),
  );
  assert.equal(
    documentFamilyId("DeepL Content Style Guide.pdf"),
    documentFamilyId("DeepL Content Style Guide.docx"),
  );
});

test("recognizes supported document extensions and MIME types", () => {
  assert.equal(isDocumentLike("source.PDF", ""), true);
  assert.equal(isDocumentLike("untitled", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"), true);
  assert.equal(isDocumentLike("screenshot.png", "image/png"), false);
});

test("recognizes direct DeepL and internal-work signals", () => {
  assert.equal(hasDeepLSignal("DeepL Write Pro launch"), true);
  assert.equal(hasDeepLSignal("CAST-DM-1523 Experiment Canvas"), true);
  assert.equal(hasDeepLSignal("unrelated personal invoice"), false);
});

test("resolves only the exact ChatGPT blob filename convention", () => {
  assert.deepEqual(
    resolveBlobCandidates("file-AbCd"),
    ["file-AbCd.dat"],
  );
  assert.deepEqual(
    resolveBlobCandidates("file_AbCd"),
    ["file_AbCd.dat"],
  );
});

test("detects the signatures that decide whether document bytes survived", () => {
  assert.equal(detectBlobSignature(Buffer.from("%PDF-1.7")), "pdf");
  assert.equal(
    detectBlobSignature(Buffer.from([0x50, 0x4b, 0x03, 0x04])),
    "zip-container",
  );
  assert.equal(
    detectBlobSignature(Buffer.from("RIFFxxxxWAVE", "ascii")),
    "wav",
  );
  assert.equal(
    detectBlobSignature(Buffer.from("RIFFxxxxWEBP", "ascii")),
    "webp",
  );
});

test("requires a direct filename or retained-text signal", () => {
  assert.equal(shouldIncludeChatGptRecord({
    nameRelevant: false,
    snippetRelevant: true,
    brandNameRelevant: false,
    brandSnippetRelevant: false,
    conversationRelevant: true,
    earliestSeen: "2025-09-27T08:33:40.730Z",
  }), false);
  assert.equal(shouldIncludeChatGptRecord({
    nameRelevant: true,
    snippetRelevant: false,
    brandNameRelevant: true,
    brandSnippetRelevant: false,
    conversationRelevant: false,
    earliestSeen: "2026-02-08T10:00:00.000Z",
  }), true);
  assert.equal(shouldIncludeChatGptRecord({
    nameRelevant: false,
    snippetRelevant: false,
    brandNameRelevant: false,
    brandSnippetRelevant: false,
    conversationRelevant: true,
    earliestSeen: "2025-01-24T08:13:41.847Z",
  }), false);
  assert.equal(shouldIncludeChatGptRecord({
    nameRelevant: false,
    snippetRelevant: true,
    brandNameRelevant: false,
    brandSnippetRelevant: false,
    conversationRelevant: false,
    earliestSeen: "2025-01-24T08:13:41.847Z",
  }), true);
});

test("links experiment summaries to the exact upload that produced them", () => {
  assert.deepEqual(
    assistantDerivativesForChatGpt([
      {
        kind: "attachment",
        message_id: "44d90bf7-856c-4c52-a0a3-89aadbf46ed7",
      },
      {
        kind: "content-reference",
        message_id: "895ebae1-bf9e-414f-b167-a9b07a1335f4",
      },
    ]).map((item) => item.message_id),
    ["043bd9e8-59d4-4ce0-8e17-0c9cbf27495e"],
  );
});
