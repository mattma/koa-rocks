'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var $ = require('gulp-load-plugins')();

// task: jshint
// @describe need to be passed to be able to build the project
gulp.task('jshint', function () {
  var src = [
    'gulpfile.js',
    'server/**/*.js'
  ];

  return gulp.src(src)
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});

// task: jscs
// @describe need to be passed to be able to build the project
gulp.task('jscs', function () {
  var src = [
    '*.js',
    'server/**/*.js'
  ];

  return gulp.src(src)
    .pipe($.jscs());
});

gulp.task('lint', ['jscs', 'jshint'], function () {
  gutil.log(
    gutil.colors.green('[-done:] Awesome! Both'),
    gutil.colors.bold('jscs'),
    gutil.colors.green('and'),
    gutil.colors.bold('jshint'),
    gutil.colors.green('have been satisfied!')
  );
});
