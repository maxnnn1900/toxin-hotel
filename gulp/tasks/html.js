module.exports = function () {
  $.gulp.task('html', function() {
    return $.gulp.src('*.html')
      .pipe($.glp.addSrc('html/**/*.html'))
      .pipe($.glp.plumber())
      .pipe($.glp.include())
      .pipe($.gulp.dest($.path.build))
      .pipe($.browserSync.reload({stream: true}));
  });
};