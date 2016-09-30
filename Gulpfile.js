var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    when = require('gulp-if');
    // reload = bs.reload;

var paths = {
  scripts: ['client/js/**/*.js'],
  html: ['client/js/**/*.html', 'client/index.html'],
  style: ['client/css/styles.css']
};

gulp.task('start', ['serve'],function () {
  console.log('Gulp Started');
});

gulp.task('serve', function() {
  nodemon({script: 'server.js', ignore: 'node_modules/**/*.js'});
});

gulp.task('default', ['start']);
