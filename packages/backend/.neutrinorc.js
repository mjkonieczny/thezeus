const airbnbBase = require('@neutrinojs/airbnb-base');
const node = require('@neutrinojs/node');
const jest = require('@neutrinojs/jest');

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
        "rules": {
          "semi": ["error", "never"],
          "arrow-parens": ["error", "as-needed"],
          "babel/semi": 0,
        }
      },
    }),
    node({
      babel: {
        presets: ['@babel/preset-typescript'],
      }
    }),
    jest({
      'testRegex': '/__tests__/.*.test.ts$'
    }),
    neutrino => {
      neutrino.config.resolve.extensions.add('.tsx');
      neutrino.config.resolve.extensions.add('.ts');
      neutrino.config.module.rule('compile')
        .test(/\.(wasm|mjs|jsx|js|tsx|ts)$/);
    },
  ],
};
