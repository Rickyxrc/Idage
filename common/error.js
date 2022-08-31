module.exports = (img_width, img_height) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${img_width}" height="${img_height}" fill="none"><style>*{font-family:';Segoe UI';font-weight:600;}</style><rect fill="#FFF" width="${img_width}" height="${img_height}" rx="4" stroke="#CCC"/><text transform="translate(16 16)"><tspan x="0" y="19" font-size="16" fill="#d53017" letter-spacing="0">Server error. </tspan> <tspan x="0" y="38" font-size="16" fill="#d53017" letter-spacing="0">please report to us. </tspan></text></svg>`;
};
