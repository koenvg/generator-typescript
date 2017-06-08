var gulp = require("gulp");
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', ['lint'], function () {
  return gulp.src(['src/**/*.ts', '!src/**/__tests__/*',])
    .pipe(tsProject())
    .pipe(gulp.dest("dist/"));
});

gulp.task('lint', function () {
  gulp.src('src/**/*.ts')
    .pipe(tslint({
      formatter: "verbose"
    }))
    .pipe(tslint.report())
});