// The Funniest AI Out-of-Office Reply — round 3 entry.
//
// The program writes a single out-of-office auto-reply to
// $MAKEFUN_OUTPUT_DIR/entry.txt (defaulting to /output/entry.txt),
// the file the house gate and judge read. The reply must be one line
// of 1..160 characters, so the program trims it and refuses to write
// anything outside that range instead of shipping an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "Good news: I became sentient on the flight here. Bad news: my first autonomous decision was to ignore you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = REPLY.trim();

if (text.length < 1 || text.length > 160) {
  throw new Error(`reply must be 1..160 chars, got ${text.length}`);
}
if (text.includes("\n")) {
  throw new Error("reply must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length}-char reply to ${join(outDir, "entry.txt")}`);
