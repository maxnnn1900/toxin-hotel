module.exports = function () {
  $.gulp.task('svg', function() {
    return $.gulp.src('img/**/*.svg')
      .pipe($.glp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.glp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');          
        },
        parseOptions: {xmlMode: true}
      }))
      .pipe($.glp.replace('&gt;', '>'))
      .pipe($.glp.svgSprite({
        mode: {
          symbol: {
            sprite: 'sprite.svg'
          }
        }
      }))
      .pipe($.gulp.dest($.path.build + '/img'));
  });
};