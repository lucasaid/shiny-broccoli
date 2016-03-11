module.exports = function (gulp, plugins) {
    return function () {
        plugins.util.log(plugins.util.colors.green('Compressing images.'));
        gulp.src(sourcePath+'/img/*')
            .pipe(plugins.imagemin())
            .pipe(gulp.dest(buildPath+'/img'))
            .pipe(plugins.connect.reload());
    };
};
