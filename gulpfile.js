const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('ap', () =>
    gulp.src('dist/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
);