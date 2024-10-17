const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { makeMetroConfig } = require('@rnx-kit/metro-config');
const { CyclicDependencies } = require('@rnx-kit/metro-plugin-cyclic-dependencies-detector');
const { MetroSerializer } = require('@rnx-kit/metro-serializer');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const path = require('path');
const fs = require('fs');

const projectDir = __dirname; // Adjust to your project directory if needed
const defaultConfig = getDefaultConfig(projectDir);
const monorepoRoot = path.resolve(projectDir, '../..'); // Root of the monorepo

/**
 * Strict symlinking
 * 
 * Creates a list of node_modules based on the package.json dependencies and symlinks
 * similar dependencies from other workspaces to it intead of using a copy.
 */
function strictSymLinkingBetweenWorkspaces() {
  const appPackageJsonPath = path.resolve(__dirname, 'package.json');
  const appPackageJson = JSON.parse(fs.readFileSync(appPackageJsonPath, 'utf-8'));
  const pkgNames = Object.keys(appPackageJson.dependencies);
  const pkgPnpmPaths = pkgNames.reduce((acc, pkgName) => {
    acc[pkgName] = path.resolve(__dirname, 'node_modules', pkgName);
    return acc;
  }, {});

  return pkgPnpmPaths;
}


const monorepoConfig = {
  watchFolders: [monorepoRoot],
  resolver: {
    disableHierarchicalLookup: true, // Disable hierarchical lookup for faster resolution
    extraNodeModules: strictSymLinkingBetweenWorkspaces(),
    resolveRequest: MetroSymlinksResolver(),
  },
  transformer: {
    getTransformOptions: async () => {
      const isReleaseBundle = process.env.BUNDLE_COMMAND === 'release';

      return {
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
          exclude: isReleaseBundle ? [/\/__mocks__\//, /\/__tests__\//] : [],
        },
      };
    },
  },
  serializer: {
    customSerializer: MetroSerializer([
      CyclicDependencies({
        includeNodeModules: false,
        linesOfContext: 1,
        throwOnError: true,
      }),
    ]),
  },
};

/**
 * Merging configs do not deeply merge arrays/functions. 
 * Keep this in mind to not override important properties. 
 * Order matters!
 * 
 * @see https://metrobundler.dev/docs/configuration/#merging-configurations
 */
const finalConfig = makeMetroConfig(mergeConfig(defaultConfig, monorepoConfig));

module.exports = finalConfig;

