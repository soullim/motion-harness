# critic — claude-m1

## 스냅보드 1회차 — 통과

판정: 통과 | docs 밖 숫자 0 · 화면 밖 UI 0 · 레퍼런스 해당 없음

| 곳 (장면 · 파일:줄) | 무엇 | 어느 docs를 봐야 하나 | 이곳 탈락 횟수 |
|---|---|---|---|
| — | 탈락 항목 없음 | — | — |

본 것
- 1번 docs 밖 숫자: `video/tokens.css` 14–76줄 값을 모두 출처 주석의 docs 값과 맞춰 봄 (video.md 머리말 · 2장 · 3장 · 5장, motion.md 1장 · 2장 · 4장) → 모두 같음. `compositions/s1–s6`, `lib.js`, `index.html`의 길이 · 곡선 · 색 · 크기는 모두 `var(--…)` 또는 `HF.f/n/ease("토큰")`을 거침. 남은 숫자는 프레임 번호(÷30), 위치 · 정렬 계산(주석 있음), motion.md 2장에 정의된 시작/끝 상태값(투명도 0↔1 · scale 1 · yPercent 0)뿐.
- 2번 화면 밖 UI: s01 영상 글자(video-headline 2줄)만 · s02 skill-card-1·2·3 · s03 button-submit(submit) · s04 badge-approved · s05 stat-card · s06 logo(logotype-black) + 슬로건(영상 글자). 모두 src/parts에 있음. 바탕은 video-bg · video-bg-soft · video-bg-end.
- 3번 레퍼런스: 해당 없음 (ref-notes R 0개).

## 참고

- **builder 새 후보 1 (shape-morph의 button-submit `.label` 투명도, `compositions/s3-submit.html:29–32`)** → 1번에 세지 않고 참고로 둠. 근거: (a) 쓰인 값은 투명도 1 → 0 (motion.md 2장 `exit` 정의) · `dur-s` · `ease-in`으로 모두 docs 토큰이라 "docs 밖 숫자(길이 · 곡선 · 색 · 크기)"가 아님. (b) `.label`은 부품에 원래 있는 글자라 "화면 밖 UI"도 아님. (c) 다만 video.md 5장 "상태는 각 부품의 `data-state`로만 바꾼다 · 부품 안 값을 따로 고치지 않는다"와는 충돌함 — 게이트 세 항목 밖의 규칙 위반이라 판정에는 넣지 않고 사람 결정으로 넘김. stat-card는 부품 주석이 장면에서 바꿀 것(textContent · tabular-nums)을 허락하지만 button-submit에는 그런 주석이 없음. 스냅보드 컷(f168)에는 보이지 않으므로 영상 회차 전에 decisions.md에 답이 있어야 함 (답이 없으면 영상 회차에서 다시 봄).
- `s3-submit.html:37–38` clip-path `inset(0px … round 0px)` 시작값과 원 크기(폭 − 높이) ÷ 2 · 높이 ÷ 2는 video.md 5장 button-submit 크기에서 계산(주석 있음) → 세지 않음.
- `s6-end.html:25–37` 덩어리 경계 `data-x0/x1`(logotype SVG에서 잰 x 위치)은 위치 계산(주석 있음) → 세지 않음. 다만 docs 표에 없는 잰 값이라, video.md 4장처럼 "잰 값은 표에 더한다" 규칙을 logo에도 둘지 사람이 정해 두면 좋음.
- `lib.js:17–24` 베지어 식의 3 · 이분법 40회는 계산 방법이지 디자인 숫자가 아님 → 세지 않음.
- `snapboard/index.html`(보기 페이지, 영상 밖)의 px 값 중 1200 · 320 · 4 · 1px 테두리 · h1 20px/600(Text/section은 700)은 docs에 없음. 영상에는 들어가지 않는 검토용 페이지라 세지 않음.
