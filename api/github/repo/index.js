const axios = require("axios");
module.exports = (req, res) => {
  img_width = Number(req.query.width) | 480;
  img_height = Number(req.query.height) | 144;
  axios
    .get(`https://api.github.com/repos/${req.query.username}/${req.query.repo}`)
    .then((data) => {
      res.send(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${img_width}" height="${img_height}"
          viewBox="0 0 ${img_width} ${img_height}" fill="none">
          <style>
              * {
                  font-family: 'Segoe UI';
                  font-weight: 600;
              }
          </style>
          <rect fill="#FFFFFF" opacity="1" x="0" y="0" width="${img_width}"
              height="${img_height}" rx="4" stroke="#CCCCCC" />
          <text transform="translate(32 39)">
              <tspan x="0" y="12" font-size="10" line-height="0" fill="#9C9C9C" opacity="1"
                  letter-spacing="0">${data.data.description}</tspan>
          </text>
          <text transform="translate(16 16)">
              <tspan x="0" y="19" font-size="16" line-height="0" fill="#2b67d5" opacity="1"
                  letter-spacing="0">Repository ${data.data.full_name}
              </tspan>
          </text>
          <g transform="translate(0 0)">
              <path transform="translate(16 55)" fill-rule="evenodd" fill="#eac54f"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
              </path>
              <text transform="translate(33 48)">
                  <tspan x="0" y="19" font-size="12" line-height="0" fill="#eac54f" opacity="1"
                      letter-spacing="0">
                      Total stars
                  </tspan>
                  <tspan x="128" y="19" font-size="12" line-height="0" fill="#eac54f" opacity="1"
                      letter-spacing="0">
                      ${data.data.stargazers_count}
                  </tspan>
              </text>
          </g>
          <g transform="translate(0 20)">
              <path transform="translate(16 55)" fill-rule="evenodd" fill="#11d8b4"
                  d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z">
              </path>
              <text transform="translate(33 48)">
                  <tspan x="0" y="19" font-size="12" line-height="0" fill="#11d8b4" opacity="1"
                      letter-spacing="0">
                      Total watches
                  </tspan>
                  <tspan x="128" y="19" font-size="12" line-height="0" fill="#11d8b4" opacity="1"
                      letter-spacing="0">
                      ${data.data.watchers}
                  </tspan>
              </text>
          </g>
          <g transform="translate(0 40)">
              <path fill-rule="evenodd" fill="#7e11d8" transform="translate(16 55)"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z">
              </path>
              <text transform="translate(33 48)">
                  <tspan x="0" y="19" font-size="12" line-height="0" fill="#7e11d8" opacity="1"
                      letter-spacing="0">
                      Total forks
                  </tspan>
                  <tspan x="128" y="19" font-size="12" line-height="0" fill="#7e11d8" opacity="1"
                      letter-spacing="0">
                      ${data.data.forks}
                  </tspan>
              </text>
          </g>
      </svg>`);
    });
};
