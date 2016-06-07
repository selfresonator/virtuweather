var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    when = require('gulp-if'),
    reload = bs.reload;

var paths = {
  scripts: ['client/js/**/*.js'],
  html: ['client/js/**/*.html', 'client/index.html'],
  style: ['client/css/styles.css']
};

gulp.task('start', ['serve'],function () {
  livereload.watch();
  console.log('here');
  bs({
    notify: true,
    injectChanges: true,
    files: paths.scripts.concat(paths.html, paths.styles),
    proxy: 'localhost:8000'
  });
});

gulp.task('serve', function() {
  nodemon({script: 'server.js', ignore: 'node_modules/**/*.js'});
});

gulp.task('default', ['start']);
