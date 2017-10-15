var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var projectFolder = '/var/www/html/fishinglog/';

gulp.task('sass', function() {
    return gulp.src(projectFolder + 'css/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest(projectFolder + 'css')) 
	.pipe(browserSync.reload({
	    stream: true
	}))
});

gulp.task('stalker', ['browserSync', 'sass'], function() {
    gulp.watch(projectFolder + 'css/**/*.scss', ['sass']);
    gulp.watch(projectFolder + '*.html', browserSync.reload);
    gulp.watch(projectFolder + 'js/**/*.js', browserSync.reload);
})

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
	    baseDir: projectFolder
	    },
	})
})

