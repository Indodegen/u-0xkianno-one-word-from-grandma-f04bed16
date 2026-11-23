import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve every path from this file's own location, never from the
// process working directory: the grader runs `node main.ts` from a
// different cwd, so a relative path would fail with ENOENT.
const here = dirname(fileURLToPath(import.meta.url));
const entryPath = join(here, "entry.txt");

const word = readFileSync(entryPath, "utf8");

// Gate: /output/entry.txt must be UTF-8 text of 1 to 30 characters,
// not only white space, and exactly one word.
if (word.length < 1 || word.length > 30) {
  throw new Error(`entry must be 1-30 characters, got ${word.length}`);
}
if (!word.trim()) {
  throw new Error("entry must not be only white space");
}
if (word.includes("\n") || word.includes("\r")) {
  throw new Error("entry must be a single line (no newline allowed)");
}
if (/\s/.test(word)) {
  throw new Error("entry must be exactly one word (no whitespace)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
copyFileSync(entryPath, outPath);
console.log(`wrote ${JSON.stringify(word)} (${word.length} chars) to ${outPath}`);
