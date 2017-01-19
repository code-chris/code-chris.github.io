var RSS = require("rss");
var fs = require("fs");
var _ = require("underscore");
var md = require('markdown-it')();
var cheerio = require('cheerio');
var moment = require('moment');
var paths = require("./paths");

var generateFeed = () => {
    var rss = new RSS({
        title: paths.title,
        feed_url: paths.feed,
        image_url: paths.icon,
        managingEditor: paths.maintainer,
        pubDate: new Date().toISOString()
    });

    var entryList = [];

    _.each(parsePostData(), function (post) {
        entryList.push({
            title: post.title,
            description: post.content,
            url: post.link,
            guid: post.publishDate + "-" + post.title,
            author: post.owner,
            date: post.publishDate
        });
    });

    entryList = _.sortBy(entryList, "date");
    entryList.reverse();

    _.each(entryList, function (entry) {
        rss.item(entry);
    });

    var xml = rss.xml("\t");

    fs.writeFileSync("build/out/feed.xml", xml);
};

var parsePostData = function () {
    var index = require("../../posts/index.json");
    var years = Object.keys(index);

    var list = [];

    _.each(Object.keys(index), function (year) {
        _.each(Object.keys(index[year]), function (month) {
            _.each(index[year][month], function (post) {
                var postData = parseMarkdown("./posts/" + year + "/" + month + "/" + post + "/" + post + ".md");
                list.push(postData);
            });
        });
    });

    return list;
};

var parseMarkdown = function (file) {
    var content = fs.readFileSync(file, "utf8");
    var html = md.render(content);
    var $ = cheerio.load(html);

    var postData = {};

    var $ul = $("ul").first();

    $ul.children().each(function (index, element) {
        var c = element.children[0].data;
        var key = c.substr(0, c.indexOf(":"));
        var value = c.substr(c.indexOf(":") + 1).trim();
        postData[key] = value;
    });

    $ul.prev().remove();
    $ul.next().remove();
    $ul.remove();

    postData.publishDate = moment(postData.publishDate).toDate();
    postData.content = $.html().trim();
    postData.link = getAbsoluteLink(postData.pageLink);

    return postData;
};

var getAbsoluteLink = function (link) {
    var absolute = paths.url + "/" + link + "/index.html";
    absolute = absolute.replace("#/", "");
    return absolute;
};

generateFeed();
