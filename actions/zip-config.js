const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");

const toast = require("@/utils/toast");
const hasConfigFile = require("@/utils/hasConfigFile");

module.exports = async () => {
  try {
    if (await hasConfigFile()) {
      toast.warn("zip.config.js文件已存在");
    } else {
      const source = path.resolve(__dirname, "../configs/zip.config.template.js");
      const target = path.join(process.cwd(), "./zip.config.js");
      toast.start("开始创建配置文件");
      await promisify(fs.copyFile)(source, target);
      toast.succeed("配置文件创建完成!");
    };
  } catch (error) {
    toast.fail("配置文件创建失败!");
    throw error;
  };
};