module.exports = function () {
  $.gulp.task('scripts', function() {
    return $.gulp.src('js/main_babel.js')
      .pipe($.glp.plumber())
      .pipe($.glp.include())
      // .pipe($.glp.sourcemaps.init())
      .pipe($.glp.babel({presets: [
        [
          '@babel/preset-env',    
          // { "modules": false }
        ]
      ]}))
      .pipe($.glp.addSrc.prepend('js/main.js'))
      .pipe($.glp.include())
      .pipe($.glp.concat('all.js'))
      .pipe($.glp.if(process.env.NODE_ENV == 'production', $.glp.uglify()))
      .pipe($.glp.rename('all.min.js'))
      // .pipe($.glp.sourcemaps.write(''))
      .pipe($.gulp.dest($.path.build + '/js'))
      .pipe($.browserSync.stream());
  });
};