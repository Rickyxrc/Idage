function parseNumber(num) {
  if (num == undefined) return "0";
  if (num < 1000) return num.toString();
  else return (num / 1000.0).toString() + "k";
}
module.exports = (img_width, img_height, data, avatarBase64, fillColor) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${img_width}" height="${img_height}" fill="none"><style>*{font-family:Segoe UI;font-weight:600;}</style><rect fill="#FFF" width="${img_width}" height="${img_height}" rx="4" stroke="#CCC"/><mask id="prefix__bg-mask-0" fill="#fff"><use href="#prefix__path_0"/></mask><image href="${avatarBase64}" height="32" width="32" transform="translate(16 16)"/><text transform="translate(64 16)"><tspan x="0" y="19" font-size="16" letter-spacing="0" fill="${fillColor}"> ${
    data.data.currentData.user.name
  }</tspan> <tspan x="16" y="35" font-size="12" fill="#9C9C9C" letter-spacing="0"> ${
    data.data.currentData.user.slogan
  }</tspan></text><text transform="translate(16 16)"><tspan x="32" y="54" font-size="16" letter-spacing="0" fill="#5597d3"> 提交</tspan> <tspan x="72" y="54" font-size="16" letter-spacing="0" fill="#5597d3"> ${parseNumber(
    data.data.currentData.user.submittedProblemCount
  )}</tspan> <tspan x="134" y="54" font-size="16" letter-spacing="0" fill="#5597d3"> 通过</tspan> <tspan x="172" y="54" font-size="16" letter-spacing="0" fill="#5597d3"> ${parseNumber(
    data.data.currentData.user.passedProblemCount
  )}</tspan> <tspan x="32" y="78" font-size="16" letter-spacing="0" fill="#5597d3"> 关注</tspan> <tspan x="72" y="78" font-size="16" letter-spacing="0" fill="#5597d3"> ${
    data.data.currentData.user.followingCount
  }</tspan> <tspan x="134" y="78" font-size="16" letter-spacing="0" fill="#5597d3"> 粉丝</tspan> <tspan x="172" y="78" font-size="16" letter-spacing="0" fill="#5597d3"> ${
    data.data.currentData.user.followerCount
  }</tspan> <tspan x="32" y="98" font-size="14" letter-spacing="0" fill="#c3c3c3"> uid:${
    data.data.currentData.user.uid
  }</tspan></text></svg>`;
};
