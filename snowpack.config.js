/**
 * Due to Snowpack’s bug, CSS Modules cannot be compiled natively.
 * For now, `@snowpack/plugin-webpack@3.0.0` and `snowpack@3.3.2` should be used.
 * Hot Fix: https://github.com/snowpackjs/snowpack/issues/3243#issuecomment-854472971
 *  
 * https://github.com/snowpackjs/snowpack/issues/2998
 * https://github.com/snowpackjs/snowpack/issues/3219
 * https://github.com/snowpackjs/snowpack/issues/3243
 */

/**
 * @type {import('snowpack').SnowpackConfig}
 */
const config = {
  mount: {
    public: '/',
    src: '/dist',
  },
  alias: {
    'T': './types',
    '@': './src',
    'Pages': './src/pages',
    'Comps': './src/comps',
  },
  packageOptions: {
    installTypes: true,
    NODE_ENV: true,
  },
  devOptions: {
    // open: 'none',
  },
  buildOptions: {
    clean: true,
    out: 'build',
  },
  plugins: [
    '@snowpack/plugin-babel',
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: (config) => {
          const cssModulesRule = config.module.rules.find((rule) =>
            rule && rule.use && rule.use.find((use) => use && use.loader && use.loader.includes('css-loader') && use.options && use.options.modules));

          if (cssModulesRule) {
            cssModulesRule.use.unshift({
              loader:  require.resolve('./scripts/webpack/css-modules-fix.js'),
            });
          }

          return config;
        },
      }
    ],
  ],
  routes: [
    // SPA Fallback in development
    // Valid on dev server only
    // https://www.snowpack.dev/guides/routing 
    {
      match: 'routes',
      src: '.*', 
      dest: '/',
    },
  ],
};

module.exports = config;
