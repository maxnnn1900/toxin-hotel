module.exports = function () {
  $.gulp.task('scripts', function() {
    return $.gulp.src('js/main.js')
      .pipe($.glp.plumber())
      .pipe($.glp.include())
      .pipe($.glp.sourcemaps.init())
      .pipe($.glp.babel({presets: [
        [
          '@babel/preset-env',    
          { "modules": false }
        ]
      ]}))
      .pipe($.glp.concat('all.js'))
      .pipe($.glp.uglify())
      .pipe($.glp.rename('all.min.js'))
      .pipe($.glp.sourcemaps.write(''))
      .pipe($.gulp.dest('build/js'))
      .pipe($.browserSync.stream());
  });
};