module.exports = function (gulp, plugins) {
    return function () {
        plugins.util.log(plugins.util.colors.green('Compressing javascript.'));
        gulp.src([sourcePath+'/js/vendor/*',sourcePath+'/js/*'])
            .pipe(plugins.uglify())
            .pipe(plugins.concat('scripts.js'))
            .pipe(gulp.dest(buildPath+'/js'))
            .pipe(plugins.connect.reload());
    };
};
