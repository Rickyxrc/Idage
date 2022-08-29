const axios = require("axios");
const base64 = require("../../../common/imageUrlToBase64");
const error = require("../../../common/error");
const badrequest = require("../../../common/badrequest");
const generateSvg = require("./_svg");

module.exports = (req, res) => {
  var img_width = Number(req.query.width) | 480;
  var img_height = Number(req.query.height) | 144;
  if (req.query.username == undefined) return res.send(badrequest());
  res.setHeader("content-type", "image/svg+xml; charset=utf-8");
  res.setHeader("Cache-Control", "max-age=0, s-maxage=86400");
  axios
    .get(`https://api.github.com/users/${req.query.username}`, {
      headers: {
        Authorization: `token ${process.env.GITHUBTOKEN}`,
      },
    })
    .then((data) => {
      base64("image/jpg", data.data.avatar_url).then((avatarBase64) => {
        base64(
          "image/svg+xml",
          `https://ghchart.rshah.org/${data.data.login}`
        ).then((chartBase64) => {
          return res.send(
            generateSvg(img_width, img_height, data, avatarBase64, chartBase64)
          );
        });
      });
    })
    .catch(() => {
      return res.send(error());
    });
};
