const glob = require("glob-fs");

module.exports.clean = () => {
  const today = new Date;
  let cacheFiles = [];
  cacheFiles = glob.readdirSync(default.paths.cacheDir + "/**/*.js|.html");
  cacheFiles.forEach(cacheFile) {
    let cacheFilePath = cacheDir + cacheFile;
    let lastOpenedAt = fs.stat(cacheFilePath)[8];
    if (lastOpenedAt + ( (days + 2) * 86400 ) < today) {
      fs.unlink(cacheFilePath, (err) => {
        if (err) throw err;
        console.log("Deleted File: " + cacheFile);
      });
    }
  }
}
