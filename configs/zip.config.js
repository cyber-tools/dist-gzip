const path = require("path");

module.exports = {
  source: path.resolve(process.cwd(), "./dist/"),
  dist: path.resolve(process.cwd(), "./dist.tar.gz")
};