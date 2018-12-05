
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
gulp.task('concat', function () {
 return gulp.src('src/styles/*.css')
   .pipe(concatCss("./styles/style.css"))
   .pipe(gulp.dest('build/'));
});

gulp.task('move',function(){
  return gulp.src('src/templates/index.html') 
  .pipe(gulp.dest('./build/'));
});
gulp.task('default', ['move', 'concat']);
