#!/usr/bin/env node
require("./utils/initial");
const { program } = require("commander");
const json = require("@/package.json");


program
  .usage("dist-gzip <cmd>")
  .version(json.version);

program
  .command("config")
  .description("生成压缩配置")
  .action(require("@/actions/zip-config"));

program
  .command("start")
  .option("-c,--config")
  .description("开始压缩")
  .action(require("@/actions/zip-start"));

program.parse(process.argv);


