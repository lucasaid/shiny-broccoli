var gulp = require('gulp');
var plugins = require( 'gulp-load-plugins' )();

GLOBAL.params = {
    buildPath: './build',
    sourcePath: './source',
    port: 8080,
    livePort: 35729,
    defaultBrowser: 'chrome'
};
gulp.task('loadFunctions', getTask('_functions'));


function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins, params);
}


gulp.task('compress:images', getTask('images'));
gulp.task('compile:javascript', getTask('javascript'));
gulp.task('compile:sass', getTask('sass'));
gulp.task('compile:jade', getTask('jade'));

gulp.task('getLivePort', ['getPort'], getTask('getLivePort'));

gulp.task('getPort', getTask('getPort'));

gulp.task('watch',['getPort', 'getLivePort', 'init', 'connect'], getTask('watch'));

gulp.task('openBrowser', ['getPort', 'getLivePort', 'init', 'connect', 'watch'], getTask('openBrowser'));

gulp.task('connect',['getPort', 'getLivePort'], getTask('connect'));


gulp.task('init',['getPort', 'getLivePort'], function(){
    gulp.run('compile:sass');
    gulp.run('compile:jade');
    gulp.run('compile:javascript');
    gulp.run('compress:images');
});

gulp.task('run', [
    'loadFunctions',
    'getPort',
    'getLivePort',
    'init',
    'connect',
    'watch',
    'openBrowser'
]);

gulp.task('build', [
    'loadFunctions',
    'init'
]);


/*
  Display Help
*/
gulp.task('help', getTask('help'));
