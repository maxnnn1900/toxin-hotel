global.$ = {
  gulp: require('gulp'),
  glp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  del: require('del'),
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  path: {
    config: require('./gulp/config.js'),
    build: 'build'
  }
};

$.path.config.forEach(function (path) {
  require(path)();
});