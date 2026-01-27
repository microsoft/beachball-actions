/** @type {import('lage').ConfigOptions} */
module.exports = {
  pipeline: {
    build: ['^build'],
    lint: ['build'],
    bundle: ['build'],
    test: ['build'],
  },
  npmClient: 'yarn',
  cacheOptions: {
    // These are relative to the git root and affect the hash of the cache.
    // Any changes to these files will invalidate the cache.
    environmentGlob: [
      '**/package.json',
      '**/*.config.js',
      '.github/workflows/*',
      'tsconfig.base.json',
      'yarn.lock',
    ],
    // These are the subset of files in the package directories that will be saved into the cache
    outputGlob: ['dist/**/*', 'lib/**/*', '!node_modules'],
  },
};
