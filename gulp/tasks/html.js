module.exports = function () {
  $.gulp.task('html', function() {
    return $.gulp.src('*.html')
      .pipe($.glp.plumber())
      .pipe($.glp.include())
      .pipe($.gulp.dest('build'))
      .pipe($.browserSync.reload({stream: true}));
  });
};