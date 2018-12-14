var gulp = require('gulp');
var ts = require('gulp-typescript');
var debug = require("gulp-debug");
var runSequence = require('run-sequence');
var webpackConfig = require('./webpack.config.js');
var webpack = require('webpack-stream');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('webpack', function() {
    return gulp.src('js/Canvas.js')
      .pipe(webpack(webpackConfig))
      .pipe(gulp.dest('dist/'));
  });

gulp.task('transpile', function() {
    var tsResult = tsProject.src()
    // .pipe(sourcemaps.init())
        .pipe(debug())
        .pipe(tsProject(ts.reporter.fullReporter()));
 
    return tsResult.js
            //.pipe(sourcemaps.write())
        .pipe(gulp.dest('js'));
});

gulp.task("default", function(cb) {
    runSequence('transpile', 'webpack', cb);
});


