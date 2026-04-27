import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ExFunction: 'readonly',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': ['error', { singleQuote: true }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'no-debugger': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'comma-dangle': ['error', 'always-multiline'],
    },
    plugins: {
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];
