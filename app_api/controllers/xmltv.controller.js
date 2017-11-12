zapData = require(`../get_data/getZap2It.service`);

module.exports.getXml = function (req, res) {
  zapData.getZap();

    res.status(200).json(`{message:SUCCESS!}`);

};
