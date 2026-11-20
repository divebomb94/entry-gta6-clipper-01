// This program only copies VIDEO.json to the output directory for the grader.
// The entry itself is the YouTube video whose address is in VIDEO.json.
const { copyFile, mkdir } = require('node:fs/promises');
const { join } = require('node:path');

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

async function main(): Promise<void> {
  await mkdir(OUTPUT_DIR, { recursive: true });
  await copyFile(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Could not deliver VIDEO.json to the grader: ${message}`);
  process.exit(1);
});
