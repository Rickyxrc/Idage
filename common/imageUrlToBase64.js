const axios = require("axios");
module.exports = (type, url) => {
  return axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then(
      (response) =>
        `data:${type};base64,` +
        new Buffer.from(response.data, "binary").toString("base64")
    );
};
