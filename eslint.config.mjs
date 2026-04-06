import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import stylistic from '@stylistic/eslint-plugin'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  stylistic.configs.customize({
    js: true,
    ts: true,
    jsx: true,
    pluginName: 'stylistic',
  }),
  reactRefresh.configs.recommended,
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
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/button-has-type': ['error', { button: true, submit: true, reset: true }],
      'stylistic/semi': ['error', 'always'],
      'stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true, // требовать после последнего элемента
          },
          singleline: {
            delimiter: 'semi', // точка с запятой для однострочных
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
    },
  },
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**', 'webpack.config.js'],
  },
]
