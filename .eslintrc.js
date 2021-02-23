module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    curly: 'error',
    'arrow-parens': [2, 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'no-debugger': 'error',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    'no-void': ['error'],
    'no-else-return': ['error'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/jsx-no-bind': 'error',
    'react/no-did-mount-set-state': ['error', 'disallow-in-func'],
    'react/no-will-update-set-state': 'error',
    'react/jsx-curly-brace-presence': 'error',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-require-imports': ['error'],
    '@typescript-eslint/no-var-requires': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'function', 'interface'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false
        }
      }
    ]
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
    'import/resolver': { 'eslint-import-resolver-typescript': true },
    react: {
      pragma: 'React',
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
