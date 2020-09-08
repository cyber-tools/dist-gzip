const path = require("path");

module.exports = async function getAccountInfo(configFilePath) {
  if (configFilePath) {
    if (path.isAbsolute(configFilePath)) {
      const absoluteResolve = require.resolve(configFilePath);
      return require(absoluteResolve);
    };
    const relativeResolve = require.resolve(path.resolve("./", configFilePath), {
      paths: [process.cwd()]
    });
    return require(relativeResolve);
  };
  const defaultResolve = require.resolve("./zip.config", {
    paths: [process.cwd(), path.resolve(__dirname, "../configs/")]
  });
  return require(defaultResolve);
};