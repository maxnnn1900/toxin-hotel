module.exports = function () {
  $.gulp.task('sass', function() {
    return $.gulp.src('sass/main.scss')
      .pipe($.glp.plumber())
      .pipe($.glp.sourcemaps.init())
      .pipe($.glp.sass())
      .pipe(
        ($.glp.if(process.env.NODE_ENV == 'production', 
          $.glp.autoprefixer({
            overrideBrowserslist: ['last 2 versions']
          }),
          $.glp.csso()
        ))        
      )
      .pipe($.glp.rename('style.min.css'))
      .pipe($.glp.sourcemaps.write(''))
      .pipe($.gulp.dest($.path.build + '/css'))
      .pipe($.browserSync.stream());
  });
};