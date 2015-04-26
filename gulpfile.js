var gulp = require('gulp'),
	jasmine = require('gulp-jasmine');

//test javascripts
gulp.task('specs', function () {
	return gulp.src('tests/specs/*.js')
		.pipe(jasmine());
});

//watch files for changes and reload
gulp.task('serve', function () {
	gulp.watch(['tests/specs/*.js', 'assets/js/*.js'], ['specs']);
});

gulp.task('default', function () {
	//default task code here for production.
});

gulp.task('default', ['sepcs']);