var gulp = require('gulp');
var webpack = require("webpack-stream");

// Do bundling
gulp.task('bundle',  function() {
    return gulp.src('app/Main.ts')
        .pipe(webpack(require('../../../webpack.config.js')))
        .pipe(gulp.dest('build/out/assets/'));
});
