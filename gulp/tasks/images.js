module.exports = function () {
  $.gulp.task('images', function() {
    return $.gulp.src('img/**/*.{jpg,png}')
      .pipe($.glp.imagemin([
        $.glp.imagemin.mozjpeg({progressive: true}),
        $.imageminJpegRecompress({
          loops: 5,
          min: 65,
          max: 70,
          quality: [0.65, 0.7]
        }),
        $.glp.imagemin.optipng({optimizationLevel: 3}),
        $.pngquant({quality: [0.65, 0.7], speed: 5}),
      ]))
      .pipe($.gulp.dest($.path.build + '/img'));
  });
};