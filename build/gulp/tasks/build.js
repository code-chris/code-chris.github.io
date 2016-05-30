var gulp = require("gulp");
var runSequence = require("run-sequence");
var webpack = require("webpack-stream");

gulp.task('bundle',  function() {
    return gulp.src('app/Main.ts')
        .pipe(webpack(require('../../../webpack.config.js')))
        .pipe(gulp.dest('build/out/assets'));
});

gulp.task("build", function () {
    return runSequence("clean", "bundle", "generate-feed");
});
