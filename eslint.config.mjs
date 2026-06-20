import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

import prettierConfig from 'eslint-config-prettier';

import googleStyle from './google-style.js';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      ...googleStyle.rules,
      // Custom overrides to make Google style less painful in React/Next.js
      'max-len': ['error', { code: 120, ignoreUrls: true }], // Google's 80 is too tight for JSX
      'require-jsdoc': 'off', // Google style often requires JSDoc, but it's overkill for most components
      'object-curly-spacing': ['error', 'always'], // Next.js/React standard is usually 'always'
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'camelcase': 'off', // Many APIs use snake_case
      'new-cap': 'off', // decorator/component support
      'indent': ['error', 2, { 'SwitchCase': 1 }],
    },
  },
  prettierConfig,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
