module.exports = function (gulp, plugins) {
    return function () {
        plugins.watch([buildPath+'/**/*.*'], function() {
            gulp.run('compile:sass');
            gulp.run('compile:jade');
            gulp.run('compile:javascript');
            gulp.run('compress:images');
        });
    };
};
