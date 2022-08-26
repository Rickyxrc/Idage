const axios = require("axios");
const error = require("../../../common/error");
const badrequest = require("../../../common/badrequest");
module.exports = (req, res) => {
  img_width = Number(req.query.width) | 480;
  img_height = Number(req.query.height) | 144;
  res.set("content-type", "image/svg+xml; charset=utf-8");
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
        res.send(
          `<svg xmlns="http://www.w3.org/2000/svg" width="${img_width}" height="${img_height}" fill="none"><style>*{font-family:&apos;Segoe UI&apos;;font-weight:600}</style><rect fill="#FFF" width="${img_width}" height="${img_height}" rx="4" stroke="#CCC"/><text transform="translate(32 39)"><tspan x="0" y="12" font-size="10" fill="#9C9C9C" letter-spacing="0">${data.data.description}</tspan></text><text transform="translate(16 16)"><tspan x="0" y="19" font-size="16" fill="#2b67d5" letter-spacing="0">Repository ${data.data.full_name} </tspan></text><path fill-rule="evenodd" fill="#eac54f" d="M24 55.25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L24 67.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194-3.048-2.969a.75.75 0 01.416-1.28l4.21-.611 1.883-3.815A.75.75 0 0124 55.25zm0 2.445L22.615 60.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L24 57.694v.001z"/><text transform="translate(33 48)"><tspan x="0" y="19" font-size="12" fill="#eac54f" letter-spacing="0"> Total stars </tspan> <tspan x="128" y="19" font-size="12" fill="#eac54f" letter-spacing="0"> ${data.data.stargazers_count} </tspan></text><path fill-rule="evenodd" fill="#11d8b4" d="M17.679 82.932c.412-.621 1.242-1.75 2.366-2.717 1.13-.973 2.482-1.715 3.955-1.715 1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717-1.13.973-2.482 1.715-3.955 1.715-1.473 0-2.824-.742-3.955-1.715-1.125-.967-1.955-2.095-2.366-2.717a.119.119 0 010-.136zM24 77c-1.981 0-3.67.992-4.933 2.078-1.27 1.091-2.187 2.345-2.637 3.022a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C20.329 88.008 22.019 89 24 89c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C27.671 77.992 25.981 77 24 77zm0 8a2 2 0 100-4 2 2 0 000 4z"/><text transform="translate(33 68)"><tspan x="0" y="19" font-size="12" fill="#11d8b4" letter-spacing="0"> Total watches </tspan> <tspan x="128" y="19" font-size="12" fill="#11d8b4" letter-spacing="0"> ${data.data.watchers} </tspan></text><g><path fill-rule="evenodd" fill="#7e11d8" d="M21 98.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878a2.25 2.25 0 002.25 2.25h1.5v2.128a2.251 2.251 0 101.5 0V103.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/><text transform="translate(33 88)"><tspan x="0" y="19" font-size="12" fill="#7e11d8" letter-spacing="0"> Total forks </tspan> <tspan x="128" y="19" font-size="12" fill="#7e11d8" letter-spacing="0"> ${data.data.forks} </tspan></text></g></svg>`
        );
      })
      .catch((err) => {
        console.log(err);
        res.send(error());
      });
};
