module.exports = (
  img_width,
  img_height,
  data,
  avatarBase64,
  chartBase64
) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${img_width}" height="${img_height}" fill="none"><style>*{font-family:';Segoe UI';font-weight:600;}</style><rect fill="#FFF" width="${img_width}" height="${img_height}" rx="4" stroke="#CCC"/><mask id="prefix__bg-mask-0" fill="#fff"><use href="#prefix__path_0"/></mask><text transform="translate(64 39)"><tspan x="16" y="12" font-size="12" fill="#9C9C9C" letter-spacing="0"> ${data.data.bio}</tspan></text><image href="${avatarBase64}" height="32" width="32" transform="translate(16 16)"/><text transform="translate(64 16)"><tspan x="0" y="19" font-size="16" letter-spacing="0" fill="#2b67d5">User ${data.data.login}</tspan></text><image href="${chartBase64}" y="50" height="60" transform="translate(16 16)"/></svg>`;
}
