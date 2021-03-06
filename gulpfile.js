const gulp        = require('gulp'),
      imagemin    = require('gulp-imagemin'),
      uglify      = require('gulp-uglify'),
      minHTML     = require('gulp-minify-html'),
      sass        = require('gulp-sass'),
      concat      = require('gulp-concat'),
      babel       = require('gulp-babel'),
      rename      = require('gulp-rename'),
      fileinclude = require('gulp-file-include');     

// HTML task
gulp.task('copyHTML', () => {
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'))
})

// HTML / Includes task
gulp.task('fileinclude', () => {
  gulp.src('src/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(minHTML())
    .pipe(gulp.dest('dist'));
});

// Sass task
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

// Imagemin task
gulp.task('imagemin', () => {
  gulp.src('src/styles/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('scripts', () => {
  gulp.src('src/scripts/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    // .pipe(uglify())
    .pipe(concat('main.min.js'))
    .on('error', (err) => { 
      gutil.log(gutil.colors.red('[Error]'), 
      err.toString()
    ); })
    .pipe(gulp.dest('dist/scripts'));
});

// Default task
gulp.task('default', [
  'copyHTML',
  'fileinclude',
  'sass',
  'imagemin',
  'scripts'
]);

// Watch task
gulp.task('watch', () => {
  gulp.watch('src/**/*.html', ['copyHTML']);
  gulp.watch('src/**/*.html', ['fileinclude']);
  gulp.watch('src/styles/images/**/*', ['imagemin']);
  gulp.watch('src/styles/**/*.sass', ['sass']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
});
