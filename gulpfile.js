var gulp = require('gulp')
var sass = require('gulp-sass')
var bs = require('browser-sync')
var files = {
  html: './src/**/*.html',
  js: './src/**/*.js',
  sass: './src/**/*.sass',
  serv: './src'
}

gulp.task('default', ['sass'], function () {
  bs.init({
    server: files.serv,
    https: true
  })
  bs.watch(files.sass, ['sass'])
  bs.watch([files.html, files.js], bs.reload)
})

gulp.task('sass', function () {
  return gulp.src(files.sass)
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .on('error', function (e) {
    console.error(e.message)
    this.emit('end')
  })
  .pipe(gulp.dest('./src/'))
  .pipe(bs.stream())
})
