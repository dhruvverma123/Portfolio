function _0x1440() {
  const _0x29b8ed = [
    "React\x20js\x20Developer",
    "nav-open",
    "addEventListener",
    "3520540jjrbiF",
    "classList",
    ".scrollStyle",
    "querySelector",
    "click",
    "hoverEffect",
    "499195ebHZeM",
    "scrollY",
    "152767rgdHfL",
    "#element",
    "1120WITVqD",
    "nav",
    ".cross",
    "add",
    "1856259QBTPGZ",
    "2eFnfnn",
    "mouseenter",
    "16kSXZtP",
    "Backend\x20Developer",
    "18378VpzeVE",
    "scrollUpper",
    "4hJqVBA",
    "style",
    "querySelectorAll",
    "remove",
    "scroll",
    "none",
    "init",
    "9850812InuwKO",
    "11benjSm",
    ".upperScrollStyle",
    "innerHeight",
    "flex",
    ".onHoverEffect",
    ".navStyleForshow640px",
    "navbar",
    "399774jNPAXJ",
    "display",
  ];
  _0x1440 = function () {
    return _0x29b8ed;
  };
  return _0x1440();
}
const _0x393538 = _0x6e5e;
(function (_0x122cae, _0xdaa4d6) {
  const _0x5193c6 = _0x6e5e,
    _0x5d2e9c = _0x122cae();
  while (!![]) {
    try {
      const _0x1e37a4 =
        -parseInt(_0x5193c6(0xcb)) / 0x1 +
        (parseInt(_0x5193c6(0xd2)) / 0x2) * (parseInt(_0x5193c6(0xe7)) / 0x3) +
        (-parseInt(_0x5193c6(0xd8)) / 0x4) * (parseInt(_0x5193c6(0xc9)) / 0x5) +
        (-parseInt(_0x5193c6(0xd6)) / 0x6) * (parseInt(_0x5193c6(0xcd)) / 0x7) +
        (parseInt(_0x5193c6(0xd4)) / 0x8) * (parseInt(_0x5193c6(0xd1)) / 0x9) +
        -parseInt(_0x5193c6(0xc3)) / 0xa +
        (parseInt(_0x5193c6(0xe0)) / 0xb) * (parseInt(_0x5193c6(0xdf)) / 0xc);
      if (_0x1e37a4 === _0xdaa4d6) break;
      else _0x5d2e9c["push"](_0x5d2e9c["shift"]());
    } catch (_0xefc3c2) {
      _0x5d2e9c["push"](_0x5d2e9c["shift"]());
    }
  }
})(_0x1440, 0x42631);
import "./matter.js";
let nav = document[_0x393538(0xc6)](_0x393538(0xce));
nav["addEventListener"]("mouseenter", function (_0x219281) {
  const _0x5b8e93 = _0x393538;
  nav[_0x5b8e93(0xc4)][_0x5b8e93(0xd0)]("navbar"),
    setTimeout(() => {
      const _0x321bbe = _0x5b8e93;
      nav[_0x321bbe(0xc4)][_0x321bbe(0xdb)](_0x321bbe(0xe6));
    }, 0x32);
});
let btn = document[_0x393538(0xc6)](_0x393538(0xc5));
function _0x6e5e(_0x5c7ed0, _0x3065f2) {
  const _0x14403a = _0x1440();
  return (
    (_0x6e5e = function (_0x6e5edf, _0x5d52cb) {
      _0x6e5edf = _0x6e5edf - 0xc3;
      let _0x49c534 = _0x14403a[_0x6e5edf];
      return _0x49c534;
    }),
    _0x6e5e(_0x5c7ed0, _0x3065f2)
  );
}
btn[_0x393538(0xeb)](_0x393538(0xc7), function (_0x199a82) {
  const _0x54d8e2 = _0x393538;
  window["scrollBy"]({ top: window[_0x54d8e2(0xe2)], behaviour: "smooth" });
});
let scrollUp = document[_0x393538(0xc6)](_0x393538(0xe1)),
  section1 = document[_0x393538(0xc6)](".navResponsive"),
  lastScroll = 0x0;
window[_0x393538(0xeb)](_0x393538(0xdc), function () {
  const _0x2eb1fa = _0x393538;
  let _0x5630a2 = window[_0x2eb1fa(0xca)];
  _0x5630a2 < lastScroll
    ? scrollUp[_0x2eb1fa(0xc4)][_0x2eb1fa(0xd0)](_0x2eb1fa(0xd7))
    : scrollUp[_0x2eb1fa(0xc4)][_0x2eb1fa(0xdb)](_0x2eb1fa(0xd7)),
    (lastScroll = _0x5630a2);
});
let effect = document[_0x393538(0xda)](_0x393538(0xe4));
for (let i = 0x0; i < effect["length"]; i++) {
  effect[i][_0x393538(0xeb)](_0x393538(0xd3), function () {
    const _0x635640 = _0x393538;
    effect[i]["classList"][_0x635640(0xd0)]("hoverEffect"),
      setTimeout(() => {
        const _0x13282f = _0x635640;
        effect[i][_0x13282f(0xc4)][_0x13282f(0xdb)](_0x13282f(0xc8));
      }, 0x64);
  });
}
let ham = document[_0x393538(0xc6)](".hamBar"),
  navStyleForshow640px = document[_0x393538(0xc6)](_0x393538(0xe5)),
  cross = document["querySelector"](_0x393538(0xcf));
ham[_0x393538(0xeb)]("click", function () {
  const _0x29fe99 = _0x393538;
  navStyleForshow640px[_0x29fe99(0xc4)]["add"](_0x29fe99(0xea)),
    (ham[_0x29fe99(0xd9)][_0x29fe99(0xe8)] = _0x29fe99(0xdd)),
    (cross[_0x29fe99(0xd9)][_0x29fe99(0xe8)] = _0x29fe99(0xe3));
}),
  cross[_0x393538(0xeb)](_0x393538(0xc7), function () {
    const _0x43b91f = _0x393538;
    navStyleForshow640px[_0x43b91f(0xc4)][_0x43b91f(0xdb)]("nav-open"),
      (ham["style"][_0x43b91f(0xe8)] = _0x43b91f(0xe3)),
      (cross[_0x43b91f(0xd9)]["display"] = _0x43b91f(0xdd));
  }),
  AOS[_0x393538(0xde)]();
const typed = new Typed(_0x393538(0xcc), {
  strings: ["Frontend\x20Developer", _0x393538(0xd5), _0x393538(0xe9)],
  typeSpeed: 0x64,
  backSpeed: 0x32,
  loop: !![],
});
