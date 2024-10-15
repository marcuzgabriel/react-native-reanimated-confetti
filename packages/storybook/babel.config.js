const path = require('path');

module.exports = {
  presets: ['module:@babel/preset-typescript', 'module:@react-native/babel-preset'],
  plugins: [
    'react-native-web',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'react-native-web': './node_modules/react-native-web',
          'react-native-svg': './node_modules/react-native-svg-web',
          '^react-native$': '../../node_modules/react-native',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
