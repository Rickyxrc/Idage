const axios = require("axios");
module.exports = (req, res) => {
  img_width = Number(req.query.width) | 480;
  img_height = Number(req.query.height) | 144;
  axios
    .get("https://api.github.com/users/" + req.query.username)
    .then((data) => {
      res.send(
        `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${img_width}" height="${img_height}" viewBox="0 0 ${img_width} ${img_height}" fill="none">
        <style>
            * {
                font-family: 'Segoe UI';
                font-weight: 500;
            }
        </style>
        <g opacity="1">
            <rect fill="#FFFFFF" opacity="1" x="0" y="0" width="${img_width}" height="${img_height}" rx="4" stroke="#CCCCCC" />
            <mask id="bg-mask-0" fill="white">
                <use href="#path_0"></use>
            </mask>
                <g opacity="1" transform="translate(64 39)">
                    <text>
                        <tspan x="16" y="12" font-size="10" line-height="0" fill="#9C9C9C" opacity="1" letter-spacing="0">${data.data.bio}</tspan>
                    </text>
                </g>
                <image href="${data.data.avatar_url}" x="0" y="0" height="32px" width="32px" transform="translate(16 16)" opacity="1" d="M16,0C7.16,0 0,7.16 0,16C0,24.84 7.16,32 16,32C24.84,32 32,24.84 32,16C32,7.16 24.84,0 16,0Z "/>
                <g opacity="1" transform="translate(64 16)">
                    <text>
                        <tspan x="0" y="19" font-size="16" line-height="0" opacity="1" letter-spacing="0" fill="#2b67d5">User ${data.data.login}</tspan>
                    </text>
                </g>
                <image href="https://ghchart.rshah.org/${data.data.login}" x="0" y="50" height="60px" transform="translate(16 16)" opacity="1" d="M16,0C7.16,0 0,7.16 0,16C0,24.84 7.16,32 16,32C24.84,32 32,24.84 32,16C32,7.16 24.84,0 16,0Z "/>
        </g>
    </svg>`
      );
    });
};
