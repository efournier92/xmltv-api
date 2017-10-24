const zapData = require(`../get_data/getZap2It.service`);
const http = require(`http`);
const fs = require('fs');

module.exports.getXml = function (req, res) {
  let today = new Date;
  let ms = today.getTime();
  const url = 
    `http://tvlistings.zap2it.com/tvlistings/ZCGrid.do?aid=zap2it.html`;
  // `http://tvlistings.zap2it.com/tvlistings/ZCGrid.do?isDescriptionOn=true&amp;fromTimeInMillis=${ms}&amp;aid=zap2it`;
  let body = ``;
  http.get(url, res => {
    res.on(`data`, function (chunk) {
      body += chunk;
    });
    res.on(`end`, function () {
      fs.writeFile(`test.html`, body, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log(`FILE SAVED!`);
      }); 
    });
  });
};
