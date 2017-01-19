var argv = require("yargs").argv;
var fs = require("fs");

delete argv._;
delete argv.$0;

fs.writeFileSync("./build/scripts/buildParam.json", JSON.stringify(argv), { flag: "w" });

