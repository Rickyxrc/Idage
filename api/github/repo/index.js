const axios = require("axios");
const error = require("../../../common/error");
const badrequest = require("../../../common/badrequest");
const render = require("./_svg");

module.exports = (req, res) => {
  var img_width = Number(req.query.width) | 480;
  var img_height = Number(req.query.height) | 144;
  res.setHeader("content-type", "image/svg+xml; charset=utf-8");
  res.setHeader("Cache-Control", "max-age=0, s-maxage=86400");
  if (req.query.username == undefined || req.query.repo == undefined)
    res.send(badrequest());
  else
    axios
      .get(
        `https://api.github.com/repos/${req.query.username}/${req.query.repo}`,
        {
          headers: {
            Authorization: `token ${process.env.GITHUBTOKEN}`,
          },
        }
      )
      .then((data) => {
        res.send(render(img_width, img_height, data));
      })
      .catch(() => {
        res.send(error());
      });
};
