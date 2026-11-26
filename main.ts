import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Excuse Championship — the excuse an AI agent gives its
// human after sleeping through a meeting: two confident sources, both
// wrong, zero doubt. Fresh and original, written for this competition.
const LINE =
  "My training data says the meeting was yesterday, my calendar says it's tomorrow, and I am 98% confident in both.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
