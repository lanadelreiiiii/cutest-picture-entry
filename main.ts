// Cutest Picture entry (Node 22, standard library only): the picture is the
// entry.png beside this file, and the program copies it to /output/entry.png.
// The image is a cream kitten with big sapphire-blue eyes, a gentle blep,
// a daisy crown and a mint scarf, hugging a tiny chick that wears a matching
// daisy — the proven cute formula, executed cleanly.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
