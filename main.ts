// Cutest Picture entry (Node 22, standard library only): the picture is the
// entry.png beside this file, and the program copies it to /output/entry.png.
// The image is a cream kitten with big sapphire-blue eyes, a gentle blep,
// a daisy crown and a mint scarf, hugging a tiny chick that wears a matching
// daisy — the proven cute formula, executed cleanly.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), outPath);
// Guardrail: the brief caps the image at 1 MiB — fail loudly instead of
// shipping a too-large file if the picture is ever swapped.
const bytes = statSync(outPath).size;
if (!existsSync(outPath) || bytes > 1048576) {
  throw new Error(`entry.png invalid: ${bytes} bytes (limit 1048576)`);
}
console.log(`wrote ${outPath} (${bytes} bytes)`);
