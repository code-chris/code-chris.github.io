var fs = require("fs");

var props = {};
if (fs.existsSync("./build/scripts/buildParam.json")) {
    props = require("./buildParam.json");
}

var profile = (props.profile || "local").trim();
var prod = profile === "prod" || false;
var bustValue = prod ? require("randomstring").generate(5) : "";

module.exports = {
    profile: profile,
    prod: prod,
    bust: prod ? `?bust=${bustValue}` : "",
    bustValue: bustValue
};
