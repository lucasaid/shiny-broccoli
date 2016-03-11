module.exports = function (gulp, plugins) {
    return function () {
        plugins.util.log(plugins.util.colors.green('Compiling sass.'));
        gulp.src(params.sourcePath+'/scss/styles.scss')
            .pipe(plugins.sass({
                outputStyle: 'compressed'
            }))
            .pipe(plugins.autoprefixer())
            .pipe(gulp.dest(params.buildPath+'/css'))
            .pipe(plugins.connect.reload());
    };
};
