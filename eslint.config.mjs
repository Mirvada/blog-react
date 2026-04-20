import storybook from 'eslint-plugin-storybook'
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import stylistic from '@stylistic/eslint-plugin'
import reactRefresh from 'eslint-plugin-react-refresh'
import i18next from 'eslint-plugin-i18next'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  stylistic.configs.customize({
    js: true,
    ts: true,
    jsx: true,
    tsx: true,
    pluginName: 'stylistic',
  }),
  reactRefresh.configs.recommended,
  i18next.configs['flat/recommended'],
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/self-closing-comp': ['error', {
        component: true,
        html: true,
      }],
      'react/button-has-type': ['error', { button: true, submit: true, reset: true }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'stylistic/semi': ['error', 'always'],
      'stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: true,
          },
          overrides: {
            interface: {
              multiline: { delimiter: 'semi', requireLast: true },
            },
            typeLiteral: {
              multiline: { delimiter: 'semi', requireLast: true },
            },
          },
        },
      ],
      'stylistic/max-len': ['error', { code: 100, tabWidth: 2, ignoreComments: true }],
    },
  },
  {
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  },
  {
    files: ['config/storybook/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './config/storybook/tsconfig.json',
      },
    },
  },
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**', 'webpack.config.js'],
  },
]
