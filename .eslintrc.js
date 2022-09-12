module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { 'varsIgnorePattern': '^_', "argsIgnorePattern": "^_" }],
        'react/react-in-jsx-scope': 'off',
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};