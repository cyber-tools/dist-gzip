const { zip } = require("cross-zip");
const { promisify } = require("es6-promisify");

const toast = require("@/utils/toast");
const getConfigInfo = require("@/utils/getConfigInfo");

module.exports = async (option) => {
  try {
    const { config } = option;
    toast.start("正在压缩... ...");
    const { source, dist } = await getConfigInfo(config);
    await promisify(zip)(source, dist);
    toast.succeed("压缩成功!");
  } catch (error) {
    toast.fail("压缩失败!");
    throw error;
  }
};