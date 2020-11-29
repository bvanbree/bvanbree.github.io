const { src, dest, watch, series, parallel } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');


const srcFiles = {
  scss: 'src/sass/**/*.scss',
  css: 'src/css/**/*.css',
  js: 'src/js/**/*.js'
}
const destFiles = {
  css: 'public/css',
  js: 'public/js'
}

function scssTask() {
  return src(srcFiles.scss)
    .pipe(sass())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(destFiles.css)
    );
}

function cssTask() {
  return src(srcFiles.css)
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest(destFiles.css));
}

function jsTask() {
  return src([
    srcFiles.js
  ])
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(destFiles.js)
    );
}

function watchTask() {
  watch([srcFiles.css, srcFiles.js],
    parallel(cssTask, jsTask)
  );
}

exports.default = series(
  parallel(cssTask, jsTask),
  watchTask
);