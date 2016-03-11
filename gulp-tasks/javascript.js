module.exports = function (gulp, plugins) {
    return function () {
        plugins.util.log(plugins.util.colors.green('Compressing javascript.'));
        gulp.src([params.sourcePath+'/js/vendor/*',params.sourcePath+'/js/*'])
            .pipe(plugins.uglify())
            .pipe(plugins.concat('main.js'))
            .pipe(gulp.dest(params.buildPath+'/js'))
            .pipe(plugins.connect.reload());
    };
};
