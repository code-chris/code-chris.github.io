var path = require('path');
var _ = require("underscore");


var buildAureliaMap = function (suffixes) {
    var obj = {};
    _.each(suffixes, function (s) {
        obj["aurelia-" + s] = path.resolve("./components/aurelia-" + s + "/dist/commonjs/aurelia-" + s + ".js");
    });
    return obj;
};

module.exports = _.extend({
    "highlight/less": path.resolve("./components/highlight.js/lib/languages/less.js"),
    "highlight.js": path.resolve("./components/highlight.js/lib/highlight.js"),
    "highlight/js": path.resolve("./components/highlight.js/lib/languages/javascript.js"),
    "highlight/css": path.resolve("./components/highlight.js/lib/languages/css.js"),
    "highlight/scss": path.resolve("./components/highlight.js/lib/languages/scss.js"),
    "highlight/ts": path.resolve("./components/highlight.js/lib/languages/typescript.js"),
    "modernizr": path.resolve("./components/modernizr.js"),
    "fetch": path.resolve("./components/whatwg-fetch/fetch.js"),
    "moment": path.resolve("./components/moment/moment.js"),
    "markdown-it": path.resolve("./components/markdown-it/dist/markdown-it.js"),
    "jquery": path.resolve("./components/jquery/dist/jquery.js"),
    "googleAnalytics": path.resolve("./components/googleAnalytics.js"),
    "bluebird": path.resolve("./components/bluebird/js/browser/bluebird.core.js"),
    "scripts": path.resolve("./components/scripts.min.js")
}, buildAureliaMap([
    "binding",
    "bootstrapper-webpack",
    "dependency-injection",
    "event-aggregator",
    "framework",
    "fetch-client",
    "history",
    "history-browser",
    "loader",
    "loader-webpack",
    "logging",
    "logging-console",
    "metadata",
    "pal",
    "pal-browser",
    "path",
    "polyfills",
    "route-recognizer",
    "router",
    "task-queue",
    "templating",
    "templating-binding",
    "templating-resources",
    "templating-router"
]));
