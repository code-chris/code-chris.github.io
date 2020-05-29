var sm = require("sitemap");
var _ = require("underscore");
var fs = require("fs");
var mkdirp = require("mkdirp");
var index = require("../../posts/index.json");

var sitemap = sm.createSitemap({ hostname: 'https://ckotzbauer.github.io', cacheTime: 600000 });
sitemap.add({ url: `/index.html`, changefreq: 'monthly', priority: 0.7 });

var years = Object.keys(index);
_.each(years, (year) => {
    var months = Object.keys(index[year]);
    _.each(months, (month) => {
        var articles = index[year][month];
        _.each(articles, (article) => {
            sitemap.add({ url: `/posts/${year}/${month}/${article}/index.html`, changefreq: 'monthly', priority: 0.7 });
        });
    });
});

var parent = "build/out";
if (!fs.existsSync(parent)) {
    mkdirp.sync(parent);
}

fs.writeFileSync("build/out/sitemap.xml", sitemap.toString(), { flags: "w" });
