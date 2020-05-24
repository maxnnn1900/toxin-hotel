module.exports = function () {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      server: $.path.build + '/',
      notify: false,
    });
    $.gulp.watch('sass/**/*.scss', {usePolling: true}, $.gulp.series('sass'));
    $.gulp.watch('*.html', {usePolling: true}, $.gulp.series('html'));
    $.gulp.watch('js/**/*', {usePolling: true}, $.gulp.series('scripts'));
    $.gulp.watch('img/**/*', {usePolling: true}, $.gulp.series('images'));
  });
};