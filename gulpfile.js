var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  plumber = require('gulp-plumber'),
  header = require('gulp-header'),
  clean = require('gulp-clean'),
  watch = require('gulp-watch'),
  rename = require('gulp-rename'),
  size = require('gulp-size'),
  notify = require('gulp-notify'),
  pkg = require('./package.json')

var banner =
`/*!
 * Milligram v${pkg.version}
 * ${pkg.homepage}
 *
 * Copyright (c) ${new Date().getFullYear()} CJ Patoilo
 * Licensed under the ${pkg.license} license
*/`

gulp.task('default', ['build', 'watch'])

gulp.task('build', ['clean', 'styles'])

gulp.task('clean', function () {
    return gulp.src('dist/**/*.*', {read: false})
      .pipe(clean())
})

gulp.task('watch', function() {
    gulp.watch(['src/stylus/**/*.styl', './gulpfile.js']).on('change', function (file) {
        gulp.start('default')
    })
})

gulp.task('styles', function() {
	gulp.src('src/stylus/milligram.styl')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(stylus())
  .pipe(autoprefixer('last 1 version'))
  .pipe(header(banner, {package: pkg}))
  .pipe(gulp.dest('./dist/'))
  .pipe(cssnano('./dist/milligram.css'))
  .pipe(sourcemaps.write('./'))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/'))
  .pipe(size())
  .pipe(notify('Stylus compilation complete.'))
})