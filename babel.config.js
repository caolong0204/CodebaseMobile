const alias = {
  '@assets': './assets',
  '@common': './common',
  '@utils': './common/utils',
  '@navigators': './navigators',
  '@network': './network',
  '@components': './components',
  '@screens': './screens',
  '@services': './services',
  '@store': './store',
  '@themes': './themes',
  '@types': './types',
};
const plugins = [
  [
    'module-resolver',
    {
      root: ['./src/'],
      extensions: [
        '.ios.js',
        '.android.js',
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.json',
      ],
      alias,
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins,
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
