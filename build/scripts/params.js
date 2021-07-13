var fs = require("fs");

var props = {};
if (fs.existsSync("./build/scripts/buildParam.json")) {
    props = require("./buildParam.json");
}

var profile = (props.profile || "local").trim();
var prod = profile === "prod" || false;

module.exports = {
    prod: prod
};
