/**
 * Due to Snowpack’s bug, CSS Modules cannot be compiled natively.
 * For now, `@snowpack/plugin-webpack` is required.
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
    // ENABLE FOR SCSS
    // [
    //   '@snowpack/plugin-sass',
    //   {
    //     loadPath: ["src/**/*.css", "src/**/*.module.css", "src/**/*.scss"]
    //   },
    // ],
  ],
  optimize: {
    bundle: true, 
    minify: true,
    treeshake: true,
    splitting: true,
  },
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
