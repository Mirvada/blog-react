import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders.ts';
import webpack, { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react-webpack5',
  staticDirs: ['../../public'],
  webpackFinal: async (config) => {
    const paths: BuildPaths = {
      entry: '',
      html: '',
      output: '',
      src: path.resolve(import.meta.dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('ts', 'tsx');

    config.module.rules = config.module.rules.filter(
      (rule: RuleSetRule) => !(rule.test && /svg/.test(rule.test.toString())),
    );

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoaders(true));

    config.plugins.push(
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
      }),
    );

    return config;
  },
};
export default config;
