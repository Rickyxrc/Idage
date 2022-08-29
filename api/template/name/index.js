/* eslint-ignore */
const error = require("../../../common/error");
const badrequest = require("../../../common/badrequest");
const render = require("./_svg");

module.exports = (req, res) => {
  var img_width = Number(req.query.width) || 480;
  var img_height = Number(req.query.height) || 144;
  res.setHeader("content-type", "image/svg+xml; charset=utf-8");
  res.setHeader("Cache-Control", "max-age=0, s-maxage=<CACHE_TIME>"); //edit variable CACHE_TIME
  if (req.query.PARAM1 == undefined && req.query.PARAM2 == undefined)
    //edit this line
    res.send(badrequest());
  else
    GETDATA() //rewrite this to get data and render.
      .then(() => {
        res.send(render(PARAM));
      })
      .catch(() => {
        res.send(error());
      });
};
