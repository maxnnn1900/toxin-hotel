module.exports = function () {
  $.gulp.task('webp', function() {
    return $.gulp.src('img/**/*.{jpg,png}')
      .pipe($.glp.webp({quality: 90}))
      .pipe($.gulp.dest($.path.build + '/img'));
  });
};