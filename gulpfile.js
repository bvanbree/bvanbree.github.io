const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');


const srcFiles = {
  scss: 'src/sass/**/*.scss',
  js: 'src/js/**/*.js'
}
const destFiles = {
  css: 'dist/css',
  js: 'dist/js'
}

function scssTask() {
  return src(srcFiles.scss)
    .pipe(sass())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(destFiles.css)
    );
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
  watch([srcFiles.scss, srcFiles.js],
    parallel(scssTask, jsTask)
  );
}

exports.default = series(
  parallel(scssTask, jsTask),
  watchTask
);