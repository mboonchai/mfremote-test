import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const rspack = require('@rspack/core');

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './static/index.html',
  },
  server: {
    port: 3000,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
        // You need to set a unique value that is not equal to other applications
        uniqueName: 'component1'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'component1',
          exposes: {
            './button': './src/components/controls/button.tsx',
            './short-text': './src/components/forms/short-text/index.tsx'
          },
          shared: ['react', 'react-dom'],
        }),
        new rspack.CssExtractRspackPlugin({}),
      ],

      module: {
        rules: [
          {
            test: /\.css$/i,
            oneOf: [
              {
                test: /\.tw\.css$/i,
                use: [
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: true,
                      postcssOptions: {
                        plugins: {
                          tailwindcss: {},
                          autoprefixer: {},
                        },
                      },
                    },
                  },
                ],
                type: 'javascript/auto',
              },
              {
                use: [
                  {
                    loader: rspack.CssExtractRspackPlugin.loader,
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: true,
                      postcssOptions: {
                        plugins: {
                          tailwindcss: {},
                          autoprefixer: {},
                        },
                      },
                    },
                  },
                ],
                type: 'javascript/auto',
              },
            ],
          },
        ],
  
    },
  },
}  
});
