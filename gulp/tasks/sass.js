module.exports = function () {
  $.gulp.task('sass', function() {
    return $.gulp.src('sass/style.scss')
      .pipe($.glp.plumber())
      .pipe($.glp.sourcemaps.init())
      .pipe($.glp.sass())
      .pipe($.glp.autoprefixer({
        overrideBrowserslist: ['last 2 versions']
      }))
      .pipe($.glp.csso())
      .pipe($.glp.rename('style.min.css'))
      .pipe($.glp.sourcemaps.write(''))
      .pipe($.gulp.dest('build/css'))
      .pipe($.browserSync.stream());
  });
};