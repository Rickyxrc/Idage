module.exports = (img_width, img_height) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${img_width}" height="144" viewBox="0 0 ${img_width} ${img_height}" fill="none"><style>*{font-family:&apos;Segoe UI&apos;;font-weight:500}</style><rect fill="#FFF" width="${img_width}" height="${img_height}" rx="4" stroke="#CCC"/><mask id="prefix__bg-mask-0" fill="#fff"><use href="#prefix__path_0"/></mask><text><tspan x="${
    img_width / 2
  }" y="${
    img_height / 3
  }" class="prefix__centerr" font-size="47" letter-spacing="0" fill="#2b67d5" text-anchor="middle"> Idage</tspan> <tspan x="${
    img_width / 2
  }" y="${
    img_height / 2
  }" class="prefix__centerr" font-size="17" letter-spacing="0" fill="#9c9c9c" text-anchor="middle">public image badge service on internet </tspan> <tspan x="40" y="${
    img_height - 16
  }" class="prefix__centerr" font-size="11" letter-spacing="0" fill="#2b67d5">our git repository : https://github.com/Rickyxrc/Idage </tspan></text><path fill="#9c9c9c" fill-rule="evenodd" transform="translate(0 ${img_height})" d="M18-23.5a2.5 2.5 0 012.5-2.5h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 0118-14.5v-9zm10.5-1v7.5h-8c-.356 0-.694.074-1 .208V-23.5a1 1 0 011-1h8zM21-13.75v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L24.6-10.3a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>`;
};
