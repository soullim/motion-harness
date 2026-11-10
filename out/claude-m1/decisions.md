# decisions — claude-m1

## 2026-11-09 승인 ① (장면표 3안 중 고르기)
- 고른 안: **B안 — 버튼이 다음 장면을 여는 릴레이** (6장면 · 450f · 폰 없음). 3안 요약: `beat-sheet-options.md`
- 헤드라인 (2줄, 둘째 줄 강조 색): "오늘 배운 AI 스킬이 / 나의 자산이 되기까지" → 18자로 15자를 넘어 `hold-l`
- 엔드 슬로건: "배운 만큼, 자산이 되는 곳"
- 레퍼런스: 없음 → 반영 칸 "해당 없음", motion.md [기본 스타일]만 따름 (ref-notes R 0개)

## 셈법 (docs에 없음, director가 정함 · 사람 확인 전)
1. `cut-in-motion` 길이 = `scene-out`(`dur-s` 6f)의 절반 3f, 앞 장면에 넣어 셈.
2. `logo-reveal`(엔드, 글자만) = logotype 글자 `stagger` 6개 상한 → 27f. (logotype SVG 글자 덩어리를 7개 이상으로 나눈다는 전제)
3. `shape-morph` 24f(글자 `exit` 6 + 원 9 + 점 9)는 앞 장면에, 주인공 `scale-from` → 1 9f는 다음 장면에 넣어 셈.
→ 사람이 다르게 정하면 장면 길이와 총합(450f)을 다시 계산한다.

## 대신 (기본 스타일 바꾼 곳)
- 없음. motion.md [기본 스타일]을 바꾼 곳이 없다.
- 참고 (바꿈 아님): 3 제출 장면에서 `button-press` 끝 `transition` 자리에 `shape-morph`를 이음 → motion.md 3장 경계 규칙 "button-submit에서 나갈 땐 `shape-morph` 가능" 안쪽.
- 참고 (바꿈 아님): 폰 프레임 장면 0개 → 0장 "폰 프레임은 한 장면에만" 안쪽. 앱 화면(src/screens)은 이 영상에 나오지 않음.

## 2026-11-09 builder — 스냅보드 (승인 ② 전 · 영상 렌더 안 함)
- 토큰: docs 값은 `video/tokens.css` 한 곳(줄마다 출처). 장면은 이름만 부름, 움직임 토큰은 `video/lib.js`가 CSS 변수에서 읽음 (lib.js에는 docs 값 없음).
- parts 불러 쓰기: `tools/sync-src.sh`가 src/parts · src/assets를 고치지 않고 `video/parts/` · `video/assets/`로 복사 → 장면은 `<iframe>`으로 원본 HTML을 피그마 크기로 열고 `--video-scale`로 키움. 상태는 부품이 가진 `?state=`(button-submit `submit` · logo `logotype-black`)로만 지정.
- 장면 시작 · 길이: beat-sheet 프레임 ÷ 30fps를 index.html 장면 칸에 적음 (계산식 주석). 장면 안 시간은 토큰 합으로 계산 (예: 1장면 hold 시작 = dur-m × 2 = f18).
- logotype 글자 덩어리: `logo-logotype-black.svg`의 path 17개를 getBBox로 재서 13덩어리 = 심볼(path 0–4) 1 + 글자 12 (H u d d l i n g C l u b, i는 점 포함 한 path). 경계 = 이웃 덩어리 사이 틈의 가운데. 덩어리마다 logo 부품을 하나씩 겹쳐 놓고 clip-path로 그 x 범위만 보이게 자른 창 안에서 `mask-rise` → 13 ≥ 7이라 beat-sheet 셈법 2의 27f 그대로.
- 엔드 무리 배치: logo와 슬로건 사이는 `video-gap`(video.md 머리말 "요소 사이 간격"), 무리째 화면 가운데. 슬로건 색 = `video-text-muted` (video.md 3장 `video-sub` 색).
- shape-morph 원: 버튼 자리를 좌우 (폭 − 높이) ÷ 2씩 clip-path로 잘라 폭 = 높이 · 모서리 = 높이 ÷ 2 (부품 크기에서 계산, 새 값 없음). 글자 `exit`는 부품 안 `.label` 투명도만 바꿈 → 부품 안쪽을 건드리는 유일한 곳이라 사람 확인 필요 (아래 새 후보).
- count-up: 부품 주석대로 `#stat-card-amount` span textContent만 바꾸고 `tabular-nums`는 장면에서 더함 (video.md 3장 숫자 규칙).
- registry: `count-up` · `bottom-up-letters` · `line-swap` 등이 있으나 자체 길이 · 곡선 · 흐림이 들어 있어 쓰지 않고 motion.md 토큰으로 직접 만듦.
- 새 후보 1 (질문): `shape-morph`의 "글자 `exit`"를 하려면 button-submit 안 `.label` 투명도를 장면에서 바꿔야 함. video.md 5장은 `data-state` · `--progress`만 허용 → 이대로 둘지, 부품에 글자 숨김 상태(`data-state`)를 더할지 사람이 정함. 스냅보드 컷(f168)에는 영향 없음.
- 참고: `hyperframes check`가 `first_frame_empty` 경고(0f에 글자 없음) — beat-sheet 1장면이 0f에서 `enter`로 시작하는 설계 그대로라 고치지 않음.

## 2026-11-09 승인 ② 자리 — 레퍼런스 추가
- 사람이 스냅보드 승인 대신 피그마 레퍼런스(node 2003:332, 정지 컷 4장)를 줌 → "뼈대로 다시 짜기" 선택. 레퍼런스 정리 → 장면표 3안 → 승인 ①부터 다시.
- 레퍼런스 없는 B안 장면표 · 스냅보드 · 판정은 `_archive-B-noref/`에 보관 (스냅보드 1회차 critic 통과였음).
- 새 후보 답: shape-morph에서 button-submit `.label` 투명도를 장면에서 바꾸는 것 → **이번 영상만 예외 허용** (값은 `exit` 토큰 그대로). video.md 5장 원칙은 그대로.
- director 셈법 3가지(cut-in-motion 3f · logo-reveal 27f · shape-morph 24f 앞 장면 포함): 사람 답 "선호 없음" → 확정 보류, 새 장면표에서도 그대로 쓰되 사람 확인 전으로 유지.

## 2026-11-09 승인 ① 2회차 (뼈대 figma-2003-332)
- 고른 안: **A안 — 컷 03에 01–05를 압축 (부품 6개 둘레)** · 5장면 · 450f · 반영 14/15 (93%, R15 빠짐 · R11 근사). 3안 요약: `beat-sheet-options.md` · 장면표: `beat-sheet.md`
- 카피 (BRIEF 그대로, 바꿀 후보 안 씀): 훅 "오늘 배운 AI 스킬이" (`text-type`) · 가운데 "나의 자산이 되기까지" (`parts-ring` 가운데, `video-accent`) · 슬로건 "배운 만큼, 자산이 되는 곳"
- 새 후보 `parts-ring` → **이번 영상만 승인**. 배치는 `phone-ring` · `card-flip-scatter`의 "가장자리 반쯤 잘림 · 가운데 비움"을 서로 다른 부품 6개(R7 순서)에 적용하고 정면이다. 움직임은 `part-in` · `stagger` + 가운데 글자 `enter` · `hold-m` 한 번 · `scene-out`. 새 숫자 0개. video.md 1장 "반쯤 잘린 둘레 요소는 읽는 글자 아님" 예외를 이번 영상의 `parts-ring`에도 적용.
- 셈법 5가지 → **사람 확정**: `cut-in-motion` 3f (앞 장면) · `logo-reveal` 27f · `shape-morph` 24f (앞 장면) · `text-type` 띄어쓰기 1글자 · `icon-spin` → `zoom-through` 사이 hold 없음.
- 대신
  - 3 부품 둘레: motion.md 0장 "부품 장면엔 그 부품만 · 제목은 글자 장면에서만" [기본 스타일] 대신 `parts-ring` 가운데 글자 한 줄 (R9).
  - 4 상징 · 빛: `zoom-through` "다음 첫 프레임은 그 자리에서" 대신 엔드 카드 배치 (video.md 5장 · logotype 무리 가운데).
  - 카메라 `cam-drift` · `cam-push` · `cam-release` · `cam-dolly-out`: 안 씀.
- 버튼 글자 예외 (`shape-morph`에서 button-submit `.label` 투명도): **해당 없음** (A안에 `shape-morph` 없음. button-submit은 `parts-ring`에서 `data-state="submit"` 그대로).
- director 결정 (확인 요청): 격자 G를 3 × 3 대신 **3열 × 2줄**로 함.
  - 3줄이면 격자 높이가 `video-safe` 안쪽을 넘는다 (video.md 5장).
  - 컷 02에는 가운데 칸 위 줄이 없다.
  - `zoom-through` 대상 = 위 줄 가운데 칸.
  - 들어옴을 열마다 `stagger`로 해서 길이(60f)와 총합(450f)은 그대로다.

## 2026-11-09 builder — 스냅보드 2회차 (A안 · 영상 렌더 안 함)
- 장면 파일: 예전 B안 장면 s1–s5와 원래 s6은 `_archive-B-noref/video-compositions/`로 옮김. 새 장면은 `s1-hook` · `s2-grid` · `s3-ring` · `s4-symbol` · `s5-end` (`s5-end`는 예전 s6을 그대로 옮기고 id만 바꿈 · 로고 13덩어리 처리 그대로). tokens.css · lib.js는 그대로 쓰고 토큰만 더함 (cam-in · cut-scale · spin · type-step · ease-inout · ease-linear · video-glow · 커서 · brand-icon 크기, 줄마다 출처).
- 1 훅 글자 폭: 폰트를 다 읽은 뒤 캔버스로 글자 폭을 재서 글줄 왼쪽 위치와 커서 자리를 계산함 (위치 계산). 화면 가운데에 맞추는 무리 = 글자만 (커서는 끝 글자 뒤에 붙는 표시라 가운데 계산에서 뺌).
- 1 훅 cam-follow: 글자가 나오는 type-step마다 그 글자 뒤 커서를 화면 가로 가운데에 두도록 ease-linear로 이어 감 → f0 = "오"+커서 가운데 (컷 01 구도). 세로는 글줄 가운데 고정. f66(마지막 글자) → f72는 정지.
- 2 격자: 들어옴 = 칸마다 마스크 안 `mask-rise` (enter 그대로). 카메라는 판 전체를 확대 · 이동하는 식 (중심 → 위 줄 가운데 칸 가운데, 같은 시간 · 같은 곡선).
- 3 parts-ring 가운데 글자 세로: "위 줄 아래 가장자리" = 위 줄에서 가장 낮은 가장자리(skill-card 아래), "아래 줄 위 가장자리" = 아래 줄에서 가장 높은 가장자리(stat-card 위) → 그 사이 가운데.
- 4 video-glow 고리: brand-icon과 같은 크기 · 모서리(radius-card × video-scale)의 판에 color-primary 원형 퍼짐(가운데 0.45 → 가장자리 0)을 칠하고 brand-icon 뒤에 둠. icon-spin 동안 판 × 1 → cut-scale · 투명도 1 → 0.
- 4 zoom-through: 카메라 판을 화면 가운데 기준으로 × 1 → cam-in.
- CLI는 `npx hyperframes@0.9.25`로 버전을 고정함 (그냥 `npx hyperframes`는 그사이 나온 0.9.26을 받음).

## 2026-11-09 승인 ② (2회차)
- 사람 승인: A안 스냅보드 (critic 통과 · 레퍼런스 12/15) → 영상 렌더로.
- 장면 4 빛 · 확대: docs 그대로 (빛 옅음 · 확대 cam-in ×2.4 상한 유지). R11 · R12는 레퍼런스와 다른 채로 둠.
- 장면 2 격자: 3열 × 2줄 사람 확정 (video-safe 안).

## 2026-11-10 builder — 영상 (claude-m1.mp4 · delivery)
- gsap: 렌더 브라우저가 CDN(jsdelivr)에 못 닿아 렌더가 막힘 → HyperFrames에 함께 든 gsap 3.15.0 사본을 `video/assets/vendor/gsap.min.js`로 두고 index.html이 그걸 부름. `tools/sync-src.sh`는 `assets/vendor`를 지우지 않게 고침.
- 4 video-glow: 처음 코드에서 고리가 icon-spin 전(276–303)에도 보이던 것을 고침 → 고리 상태를 장면 시각에서 바로 계산 (spin 전 = 안 보임). 값 · 곡선은 그대로.
- 장면 첫 프레임: motion.md 2장 `transition` "다음 장면 첫 프레임에 이미 enter 중"에 맞춤. 2 · 3 · 4 · 5장면의 첫 enter는 첫 프레임에 한 프레임 진행된 모양부터 보여 줌 (끝 모양 · 끝 프레임 · 장면표 시간 그대로) → f120 · f180 · f276 · f333이 빈 바탕이 아님. 1장면은 f0에 "오"+커서가 이미 있음.
- 마스크 가장자리: mask-rise로 아직 안 들어온 칸 · 덩어리 · 글자는 투명도 0으로 둠 (마스크 밖이라 보이는 변화 없음). 2 격자 칸에 clip-path도 더함 (칸 274.4px 소수점 가장자리 비침).
- 소리 없음 (BRIEF).
