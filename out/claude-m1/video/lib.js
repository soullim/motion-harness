/*
  lib.js — tokens.css 값을 장면 스크립트에서 이름으로 부르는 도우미. 여기에는 docs 값이 없다.
  HF.f("dur-m")      → 초 (프레임 토큰 ÷ --video-fps)
  HF.n("press-scale")→ 숫자
  HF.ease("ease-out")→ GSAP용 곡선 함수 (CSS cubic-bezier와 같은 계산)
  HF.part(iframe, fn)→ 부품 iframe 안 문서가 준비됐을 때만 fn(doc) (seek마다 다시 부름 → 결정적)
*/
(function () {
  const css = () => getComputedStyle(document.documentElement);
  const raw = (name) => css().getPropertyValue("--" + name).trim();
  const n = (name) => parseFloat(raw(name));
  const fps = () => n("video-fps");
  const f = (name) => n(name) / fps();

  // CSS cubic-bezier(x1,y1,x2,y2) 계산 (이분법, 결정적)
  function bezier(x1, y1, x2, y2) {
    const cx = (t, a, b) => 3 * a * t * (1 - t) * (1 - t) + 3 * b * t * t * (1 - t) + t * t * t;
    return function (x) {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      let lo = 0, hi = 1, t = x;
      for (let i = 0; i < 40; i++) {
        t = (lo + hi) / 2;
        if (cx(t, x1, x2) < x) lo = t; else hi = t;
      }
      return cx(t, y1, y2);
    };
  }
  const cache = {};
  function ease(name) {
    if (!cache[name]) {
      const v = raw(name).split(",").map(parseFloat);
      cache[name] = bezier(v[0], v[1], v[2], v[3]);
    }
    return cache[name];
  }
  function part(frame, fn) {
    const doc = frame && frame.contentDocument;
    if (doc && doc.readyState !== "loading" && doc.body) fn(doc);
  }
  // leadFromTo: 장면 첫 프레임에 이미 enter 중 (motion.md 2장 transition).
  //   같은 시작 · 같은 곡선에서 한 프레임 지난 모양을 첫 프레임에 그대로 둠 (from 값을 그 모양으로) →
  //   남은 구간을 길이 dur − 한 프레임, 곡선은 원래 곡선의 남은 부분으로. 끝 모양 · 끝나는 프레임은 그대로.
  function leadFromTo(tl, target, from, to, durName, easeName, pos, extra) {
    const d = f(durName), one = 1 / fps(), e = ease(easeName), k = one / d, ek = e(k);
    const from1 = {};
    Object.keys(from).forEach((p) => { from1[p] = from[p] + (to[p] - from[p]) * ek; });
    const rest = (x) => (e(k + x * (1 - k)) - ek) / (1 - ek);
    return tl.fromTo(target, from1, Object.assign({}, to, extra || {}, { duration: d - one, ease: rest }), pos);
  }
  // maskWatch: mask-rise 끝(마스크 밖)에 있을 때는 그리지 않음 → 마스크 가장자리 머리카락 선 방지 (움직임 변화 없음)
  //   장면 타임라인이 그려질 때마다(seek 포함) 모든 대상에 적용
  function maskWatch(tl, selector) {
    const els = Array.from(document.querySelectorAll(selector));
    const apply = () => els.forEach((el) => {
      el.style.opacity = gsap.getProperty(el, "yPercent") >= n("mask-rise") ? 0 : 1;   // iframe은 visibility로 안 숨겨져 투명도로
    });
    tl.eventCallback("onUpdate", apply);
    apply();
  }
  window.HF = { raw, n, f, ease, part, leadFromTo, maskWatch };
})();
