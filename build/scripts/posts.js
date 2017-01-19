var gulp = require("gulp");
var mustache = require("gulp-mustache");
var rename = require("gulp-rename");
var paths = require("./paths");
var prompt = require('prompt');
var _ = require("underscore");
var moment = require("moment");
var jsonfile = require('jsonfile');

var fetchPostInfos = function (callback) {
    var schema = {
        properties: {
            title: {
                required: true
            },
            owner: {
                required: true,
                default: "Christian Kotzbauer"
            },
            share: {
                required: true,
                type: 'boolean',
                default: true
            },
            tags: {
                required: true,
                message: "a comma separated list of words"
            }
        }
    };

    prompt.start();

    prompt.get(schema, function (err, result) {
        if (err) {
            throw err;
        }

        prompt.stop();
        callback(result);
    });
};

var prepareData = function (data) {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);

    var identifier = data.title.replace(/ /g, "-");
    identifier = identifier.toLowerCase();

    var pageLink = "#/posts/" + year + "/" + month + "/" + identifier;
    var publishDate = moment(date).format("YYYY-MM-DD HH:mm:ss");

    var absoluteUrl = paths.url + "/" + pageLink + "/index.html";
    absoluteUrl = absoluteUrl.replace("#/", "");

    return _.extend(data, {
        identifier: identifier,
        year: year,
        month: month,
        pageLink: pageLink,
        publishDate: publishDate,
        absoluteUrl: absoluteUrl
    });
};

var editIndexFile = function (data) {
    var filePath = "./posts/index.json";

    var obj = jsonfile.readFileSync(filePath);

    obj[data.year] = obj[data.year] || {};
    obj[data.year][data.month] = obj[data.year][data.month] || [];
    obj[data.year][data.month].push(data.identifier);

    jsonfile.writeFileSync(filePath, obj, { spaces: 4 });
};

var generateMarkdownFile = function (data) {
    var d = {
        title: data.title,
        pageLink: data.pageLink,
        publishDate: data.publishDate,
        owner: data.owner,
        share: data.share,
        tags: data.tags.split(",")
    };

    gulp.src("build/scripts/template.mustache")
        .pipe(mustache(d, { extension: ".md" }))
        .pipe(rename(data.identifier + ".md"))
        .pipe(gulp.dest("posts/" + data.year + "/" + data.month + "/" + data.identifier));
};

var generateIndexHtml = function (data) {
    var d = {
        author: data.owner,
        description: "",
        image: paths.image,
        keywords: data.tags.split(","),
        title: data.title,
        absoluteUrl: data.absoluteUrl,
        siteTitle: paths.title,
        siteUrl: paths.url
    };

    gulp.src("build/scripts/index.mustache")
        .pipe(mustache(d, { extension: ".html" }))
        .pipe(gulp.dest("posts/" + data.year + "/" + data.month + "/" + data.identifier));
};

fetchPostInfos(function (data) {
    data = prepareData(data);
    generateIndexHtml(data);
    generateMarkdownFile(data);
    editIndexFile(data);
});
