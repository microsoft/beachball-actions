import esbuild from 'esbuild';
// @ts-expect-error -- types are missing from exports (but we don't use the options anyway)
import licensePlugin from 'esbuild-plugin-license';
import fs from 'fs';
import path from 'path';
import { findPackageRoot } from '../findPackageRoot.js';

const entryFileRel = 'src/index.ts';
const outDirRel = 'dist';

export default async function bundle() {
  const packageRoot = findPackageRoot();
  if (packageRoot !== process.cwd()) {
    process.chdir(packageRoot);
  }

  fs.rmSync(path.join(packageRoot, outDirRel), { force: true, recursive: true });

  /** @type {import('esbuild').BuildResult} */
  let result;
  try {
    result = await esbuild.build({
      entryPoints: [entryFileRel],
      outdir: outDirRel,
      bundle: true,
      treeShaking: true,
      format: 'cjs',
      platform: 'node',
      target: ['node24'],
      minify: true,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      plugins: [licensePlugin()],
      // in case packages rely on specific names in instanceof checks
      keepNames: true,
      // log errors, warnings, and a summary (which includes the output file sizes)
      logLevel: 'info',
    });
  } catch {
    // The issue should already have been logged by esbuild
    process.exit(1);
  }

  const hasWarnings = !!result.warnings.length;
  // With logLevel set to 'info', esbuild will handle the basic logging.
  console.log(`\nBundling completed${hasWarnings ? ' with warnings (see above)' : '!'}\n`);
}
