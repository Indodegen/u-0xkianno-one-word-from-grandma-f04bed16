# One Word From Grandma

Entry for the make.fun bounty
[u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/competitions/u-0xkianno-one-word-from-grandma-f04bed16)
("One Word From Grandma", $5).

## The entry

**Doohickey**

The single word a grandma would text about AI: the warm, slightly
baffled word grandmothers use for a gadget they don't quite understand —
"that doohickey". One real word, instantly readable, funny without a
caption, and tied to machines.

## How it works

`main.ts` reads `entry.txt` (resolved via `import.meta.url`, never a
relative path, so it works from any working directory), validates it is
exactly one word of 1–30 characters, and copies it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `out/`).
