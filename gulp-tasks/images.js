module.exports = function (gulp, plugins) {
    return function () {
        plugins.util.log(plugins.util.colors.green('Compressing images.'));
        gulp.src(params.sourcePath+'/img/*')
            .pipe(plugins.imagemin())
            .pipe(gulp.dest(params.buildPath+'/img'))
            .pipe(plugins.connect.reload());
    };
};
