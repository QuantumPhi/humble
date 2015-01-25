var gulp       = require('gulp'),
    del        = require('del'),
    jade       = require('gulp-jade')

gulp.task('clean', function(opts) {
    del([
        'dist/*',
        'index.html'
    ], opts)
})

gulp.task('jade', function() {
    gulp.src('jade/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('.'))
})

gulp.task('watch', function() {
    gulp.watch('jade/*.jade', ['jade'])
})

gulp.task('default', ['jade'])
