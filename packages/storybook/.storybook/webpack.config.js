import fs from "fs";
import babelConfig from "../babel.config";
import { sources } from "webpack";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

delete babelConfig.plugins[1][1].alias['^react-native$'];

module.exports = async ({ config: baseConfig }) => {
  baseConfig.module.rules.push({
    test: /\.(j|t)sx?$/,
    use: [
      {
        loader: 'babel-loader',
        options: babelConfig,
      },
    ]
  });

  baseConfig.plugins = [
    ...baseConfig.plugins,
    new (class CopySkiaPlugin {
      apply(compiler) {
        compiler.hooks.thisCompilation.tap("AddSkiaPlugin", (compilation) => {
          compilation.hooks.processAssets.tapPromise(
            {
              name: "copy-skia",
              stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
            },
            async () => {
              const src = require.resolve("canvaskit-wasm/bin/full/canvaskit.wasm");

              if (!compilation.getAsset(src)) {
                compilation.emitAsset("/canvaskit.wasm", new sources.RawSource(await fs.promises.readFile(src)));
              }
            }
          );
        });
      }
    })(),

    new NodePolyfillPlugin()
  ]  

  baseConfig.resolve.alias = {
    'react-native$': 'react-native-web',
  }
  
  return baseConfig;
};