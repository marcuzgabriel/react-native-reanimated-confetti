const customWebpackConfig = require("./webpack.config");
import { dirname, join } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

console.log(getAbsolutePath("@storybook/react-webpack5"))

module.exports = {
  stories: ["../src/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-actions"),
    getAbsolutePath("@storybook/addon-react-native-web"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },
  core: {
    builder: 'webpack5',
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      ...customWebpackConfig,
    };
  },
};
