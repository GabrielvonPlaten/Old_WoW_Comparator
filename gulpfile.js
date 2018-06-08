const gulp        = require('gulp'),
      imagemin    = require('gulp-imagemin'),
      uglify      = require('gulp-uglify'),
      sass        = require('gulp-sass'),
      concat      = require('gulp-concat'),
      babel       = require('gulp-babel'),
      rename      = require('gulp-rename');
      
gulp.task('copyHTML', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
  gulp.src('src/styles/main.sass')
    .pipe(sass( { 
      outputStyle: 'compressed'}
    ))
    .on('error', sass.logError)
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/styles'))
})

gulp.task('imagemin', () => {
  gulp.src('src/styles/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('scripts', () => {
  gulp.src('src/scripts/**/*.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .on('error', (err) => { 
      gutil.log(gutil.colors.red('[Error]'), err.toString()
    ); })
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('default', [
  'copyHTML',
  'imagemin',
  'sass',
  'scripts'
]);

gulp.task('watch', () => {
  gulp.watch('src/*.html', ['copyHTML'])
  gulp.watch('src/styles/images/*', ['imagemin'])
  gulp.watch('src/styles/**/*.sass', ['sass'])
  gulp.watch('src/scripts/**/*.js', ['script'])
});
