const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    (neutrino) => neutrino.use(airbnb({
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
                extensions: [".js", ".jsx", ".ts", ".tsx"],
              },
            },
          },
        },
      },
    })),
    react({
      babel: {
        presets: ['@babel/preset-typescript'],
      },
      html: {
        title: 'frontend'
      }
    }),
    jest(),
    neutrino => {
      neutrino.config.resolve.extensions.add('.tsx');
      neutrino.config.resolve.extensions.add('.ts');
      neutrino.config.module.rule('compile')
        .test(/\.(wasm|mjs|jsx|js|tsx|ts)$/);
    },
  ],
};
