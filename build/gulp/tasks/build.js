var gulp = require("gulp");
var runSequence = require("run-sequence");
var es = require("event-stream");

// Copy views, stylesheets and other scripts to output directory
gulp.task("copy-additional-files", function () {
    var fonts = gulp.src("content/fonts/**/*")
        .pipe(gulp.dest("build/out/content/fonts"));

    var images = gulp.src("content/images/**/*")
        .pipe(gulp.dest("build/out/content/images"));

    var favicon = gulp.src("content/images/favicon.ico")
        .pipe(gulp.dest("build/out"));

    var posts = gulp.src("posts/**/*")
        .pipe(gulp.dest("build/out/posts"));

    var rootElements = gulp.src(["index.html"])
        .pipe(gulp.dest("build/out"));

    return es.concat(fonts, images, favicon, posts, rootElements);
});

gulp.task("build", function () {
    return runSequence("clean", "copy-additional-files", ["generate-feed", "bundle"]);
});
