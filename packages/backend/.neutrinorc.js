const airbnbBase = require('@neutrinojs/airbnb-base');
const node = require('@neutrinojs/node');
const mocha = require('@neutrinojs/mocha');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnbBase({
      eslint: {
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: './tsconfig.json',
        },
        plugins: ['@typescript-eslint'],
        baseConfig: {
          extends: [
            'plugin:@typescript-eslint/eslint-recommended',
            'plugin:@typescript-eslint/recommended',
          ],
          settings: {
            'import/resolver': {
              node: {
                extensions: [".js", ".ts" ],
              },
            },
          },
        },
      },
    }),
    node({
      babel: {
        presets: ['@babel/preset-typescript'],
      }
    }),
    mocha(),
    neutrino => {
      neutrino.config.resolve.extensions.add('.tsx');
      neutrino.config.resolve.extensions.add('.ts');
      neutrino.config.module.rule('compile')
        .test(/\.(wasm|mjs|jsx|js|tsx|ts)$/);
    },
  ],
};
