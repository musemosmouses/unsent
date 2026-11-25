// Unsent: The Micro-Confession Sprint — entry program (program/v1, node22).
// Writes exactly two lines to $MAKEFUN_OUTPUT_DIR/entry.txt:
// line 1 names who the unsent message was meant for; line 2 is the
// message itself, one line written exactly as it was typed, with no
// explanation after it. No network, no randomness, no dependencies — the
// same two lines on every run, well inside the 1-260 character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TO_LINE = "To: my ex";
const MESSAGE =
  "i still type your name into the search bar when i'm lonely, then delete " +
  "it letter by letter like that undoes wanting to talk to you";

// The entry text: 142 characters total (line 1: 9, line 2: 131, plus two
// newlines) — inside the 1-260 character gate, and the message line is
// inside its own 200-character cap. The To: line and the message need
// each other: typing a name into a search bar and deleting it letter by
// letter only means something for someone you once knew and lost — and
// the deleting is the reason it stayed unsent, felt in the words, never
// stated outright.
const ENTRY = TO_LINE + "\n" + MESSAGE + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
// Only ever write inside MAKEFUN_OUTPUT_DIR — never a relative path, never
// rmSync/rm the output dir (the grader runs on a read-only filesystem).
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
