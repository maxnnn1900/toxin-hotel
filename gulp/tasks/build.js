module.exports = function () {
  $.gulp.task($.path.build, $.gulp.series('clean', 'copy', 'sass', 'scripts', 'images', 'webp', 'svg', 'html'));
};