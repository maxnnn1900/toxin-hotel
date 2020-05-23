module.exports = function () {
  $.gulp.task('copy', function() {
    return $.gulp.src([
      'fonts/**/*.{woff,woff2}',
    ], {
      base: '.'
    })
      .pipe($.gulp.dest('build'));
  });
};