const jsFiles = [
  $.path.jquery,
  $.path.js,
];


module.exports = function () {
  $.gulp.task('scripts', function() {
    return $.gulp.src(jsFiles)
      .pipe($.glp.plumber())
      .pipe($.glp.sourcemaps.init())
      .pipe($.glp.babel({presets: ['@babel/preset-env']}))
      .pipe($.glp.concat('all.js'))
      .pipe($.glp.uglify())
      .pipe($.glp.rename('all.min.js'))
      .pipe($.glp.sourcemaps.write(''))
      .pipe($.gulp.dest('build/js'))
      .pipe($.browserSync.stream());
  });
};