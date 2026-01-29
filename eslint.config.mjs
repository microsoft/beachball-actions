import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import globals from 'globals';
import path from 'path';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  includeIgnoreFile(path.join(import.meta.dirname, '.gitignore')),
  includeIgnoreFile(path.join(import.meta.dirname, '.prettierignore')),
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: 2024,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: true,
      },
    },

    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
  // {
  //   // https://typescript-eslint.io/troubleshooting/typed-linting/#i-get-errors-telling-me--was-not-found-by-the-project-service-consider-either-including-it-in-the-tsconfigjson-or-including-it-in-allowdefaultproject
  //   files: ['**/jest.config.js'],
  //   extends: [tseslint.configs.disableTypeChecked],
  // },
  {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
);
