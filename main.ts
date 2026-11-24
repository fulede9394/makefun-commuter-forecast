import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Commuter forecast: Nowhereville, light rain, heavy regret, bus gone.
const LINE =
  "Good morning, Nowhereville: light rain, heavy regret, and a 100% chance your bus left two minutes ago.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
