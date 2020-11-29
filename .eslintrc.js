module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    api: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-await-in-loop': 'warn',
    'no-console': 'off',
    'no-mixed-operators': 'warn',
    'no-useless-escape': 'off',
  },
};
