import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      react,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // A JSX element is a reference to its component, so it must count as
      // usage for `no-unused-vars`. React 19 uses the automatic JSX runtime,
      // so the classic `jsx-uses-react` rule stays off.
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'off',
    },
  },
  {
    // Node.js runtime files: the production server, the dev/preview API
    // middleware and the Vercel serverless handler.
    files: ['server.js', 'server/**/*.js', 'api/**/*.js', 'vite.config.js'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
])
