var gulp = require('gulp');
var markdownpdf = require('gulp-markdown-pdf');

gulp.task('default', function () {
    return gulp.src('*/*.md')
        .pipe(markdownpdf({
            highlightCssPath: "./styles/github.css"
        }))
        .pipe(gulp.dest('dist'));
});
