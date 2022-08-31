const render = require("./_svg");

module.exports = (req, res) => {
  var img_width = Number(req.query.width) || 480;
  var img_height = Number(req.query.height) || 144;
  res.setHeader("content-type", "image/svg+xml; charset=utf-8");
  res.setHeader("Cache-Control", "max-age=0, s-maxage=<CACHE_TIME>"); //edit variable CACHE_TIME
  res.send(render(img_width, img_height));
};
