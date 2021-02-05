const { src, dest } = require('gulp');
const rollup = require('gulp-better-rollup')
const nodeResolve = require('rollup-plugin-node-resolve');
const { uglify } = require('rollup-plugin-uglify');
const concat = require('gulp-concat');
const babel = require('rollup-plugin-babel');

const scripts = () => {
  return src(BUILD_PATHS.scripts.entry)
    .pipe(rollup({
      plugins: [
        nodeResolve(),
        babel({
          presets: [
            ["@babel/preset-env", {
              "modules": false
            }]
          ],
          sourceMaps: true,
          babelrc: false,
          exclude: 'node_modules/**'
        }),
        uglify()
      ],
      context: 'this'
    }, {
      format: 'cjs',
    }))
    .pipe(concat('main.js'))
    .pipe(dest(BUILD_PATHS.scripts.dest))
};

exports.scripts = scripts;
