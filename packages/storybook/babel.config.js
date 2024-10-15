module.exports = {
  presets: ['module:@babel/preset-typescript', 'module:@react-native/babel-preset'],
  plugins: [
    'react-native-web',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'react': './node_modules/react',
          'react-dom': './node_modules/react-dom',
          'react-native-web': './node_modules/react-native-web',
          'react-native-svg-web': './node_modules/react-native-svg-web',
          'react-native-svg': './node_modules/react-native-svg-web',
          'react-native-reanimated-confetti': './node_modules/react-native-reanimated-confetti',
          'react-native-skia-confetti': './node_modules/react-native-skia-confetti',
          'canvaskit-wasm': './node_modules/canvaskit-wasm',
          '^react-native$': '../../node_modules/react-native',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
