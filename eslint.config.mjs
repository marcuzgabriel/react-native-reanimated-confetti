import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    ignores: [
      'dist/**/*.ts',
      'dist/**',
      "**/lib/**",
      "**/*.mjs",
      "eslint.config.mjs",
      "**/.storybook/**",
      "**/*.js"
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.es2020,
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettier.rules, // Disable ESLint rules that conflict with Prettier
      'prettier/prettier': 'error', // Add Prettier rules
    },
  },
);
