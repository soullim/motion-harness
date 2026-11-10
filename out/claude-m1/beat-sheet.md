# beat-sheet — claude-m1  (안 A · 총 450f = 15초 · 30fps)
뼈대: figma-2003-332 (컷 01 → 02 → 03 → 04 → 엔드)
반영: R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11(근사), R12, R13, R14 (14/15 = 93%) · 빠짐: R15 (컷 02와 04 사이에 컷 03이 있어 `match-cut` 불가)

셈법 (docs에 없음, director가 정함 · 2026-11-09 사람 확정, decisions.md)
1. `cut-in-motion` = `scene-out`(`dur-s` 6f) 절반 3f에서 `transition`. 3f는 앞 장면에 넣는다.
2. `logo-reveal`(엔드, 글자만) = logotype 덩어리 `stagger` `dur-xs`, 6개 상한(7번째부터 같이) → 27f.
3. `shape-morph` 24f는 앞 장면에 넣는다. 이 영상에는 `shape-morph`가 없다.
4. `text-type`: 띄어쓰기도 한 글자 (`type-step` × 글자 수).
5. `icon-spin` → `zoom-through`: 사이 hold 없이 잇는다 (`zoom-through`는 경계 동작).

새 후보 승인: `parts-ring` (2026-11-09, 이번 영상만). 배치 · 움직임은 아래 "배치 규칙" 3.
프레임 표기: `시작–끝`은 시작 포함 · 끝 미포함 (끝 = 다음 장면 시작).

| 장면 | 시작–끝 (f) | 화면 · 부품 | 글자 (video.md 토큰) | 움직임 (motion.md 이름) | 카메라 | 머묾 | 전환 → 다음 | 반영 R | 대신 |
|---|---|---|---|---|---|---|---|---|---|
| 1 훅 (컷 01) | 0–120 (120) | 바탕 `video-bg` · 부품 없음 · 폰 없음 | `video-headline` 1줄 `video-text` "오늘 배운 AI 스킬이" + 커서 (video.md 3장) | `text-type` → `scene-out` | `cam-follow` → `cam-pull` | `hold-m` (읽는 글자 9자) | `cut-in-motion` → 2 | R1, R2, R3, R14 | 없음 |
| 2 격자 (컷 02) | 120–180 (60) | 바탕 `video-bg-soft` · `brand-icon.html` × 6 (3열 × 2줄 격자, 배치 규칙 2) | 없음 | `enter` · `stagger` (열마다) → `zoom-through` (위 줄 가운데 칸) | `zoom-through` (× 1 → `cam-in`) | `hold-s` | `zoom-through` 끝 `transition` → 3 | R4, R5, R6 | 없음 |
| 3 부품 둘레 (컷 03) | 180–276 (96) | 바탕 `video-bg-soft` · 위: `skill-card-1.html` · `badge-approved.html` · `skill-card-2.html` / 아래: `stat-card.html` · `button-submit.html` `data-state="submit"` · `skill-card-3.html` (배치 규칙 3) | 가운데 `video-headline` 1줄 `video-accent` "나의 자산이 되기까지" (헤드라인 둘째 줄 전체 강조) | `parts-ring` (부품마다 `part-in` · `stagger` → 가운데 글자 `enter`) → `scene-out` | `cam-hold` (정면) | `hold-m` (한 번) | `cut-in-motion` → 4 | R7, R8, R9, R10 | 0장 "부품 장면엔 그 부품만 · 제목은 글자 장면에서만" 대신 `parts-ring` 가운데 글자 한 줄 (R9) |
| 4 상징 · 빛 (컷 04) | 276–333 (57) | 바탕 `video-bg-soft` · `brand-icon.html` 하나 (화면 가운데) + `video-glow` 고리 | 없음 | `enter` + 마스크 대신 `scale-from` → 1 → `icon-spin` → `zoom-through` | `zoom-through` (× 1 → `cam-in`) | `hold-s` | `zoom-through` 끝 `transition` → 5 | R11(근사: `cam-in` 상한), R12, R13 | `zoom-through` "다음 첫 프레임은 그 자리에서" 대신 엔드 카드 배치(video.md 5장 · logotype 무리 가운데) |
| 5 엔드 | 333–450 (117) | 바탕 `video-bg-end` · `logo.html` `data-state="logotype-black"` (brand-icon 없음, 폰 없음) | 슬로건 `video-sub` "배운 만큼, 자산이 되는 곳" (색 video.md 3장 `video-sub`) | `end-reveal` (`logo-reveal` 글자만 → 슬로건 `enter` + 마스크 대신 투명도) | `cam-hold` | `hold-end` | 영상 끝 (마지막 머묾 정지) | — | 없음 |

## 배치 규칙 (builder용 · docs 토큰과 video.md 5장 부품 크기로만 계산)

**1 훅 글자**
- `cam-pull`이 끝난 × 1 프레임에서 글줄 무리가 화면 가로 · 세로 가운데에 온다 (R2, video.md 3장 가운데 정렬).
- `cam-follow` 동안은 `cam-in` 배율이다. 커서가 화면 가로 가운데에 오도록 가로로만 따라간다 (5장 `cam-follow`).
- 첫 프레임 = 첫 글자 "오"와 커서를 `cam-in`으로 담은 화면 (컷 01 구도).

**2 brand-icon 격자 (3열 × 2줄)**
- 칸 크기 = brand-icon 영상 크기 (video.md 5장). 칸 사이 가로 · 세로 = `video-gap`.
- 격자 무리(폭 = 3 × brand-icon 폭 + 2 × `video-gap`, 높이 = 2 × brand-icon 높이 + `video-gap`)를 × 1 화면 가운데에 둔다. 이 크기는 `video-safe` 안쪽에 들어간다.
- `zoom-through` 대상 = 위 줄 가운데 칸.
  - 카메라 중심이 그 칸 가운데로 옮겨 가며 × 1 → `cam-in`이 된다.
  - 끝 프레임에서 그 칸이 화면 가운데에 온다. 양옆 칸은 좌우 가장자리에서, 아래 줄은 아래 가장자리에서 잘린다 (컷 02 구도 · R5).
- 3 × 3 대신 3열 × 2줄로 한 이유:
  - 3줄이면 격자 높이(3 × brand-icon + 2 × `video-gap`)가 `video-safe` 안쪽 높이를 넘는다 (video.md 5장).
  - 컷 02에는 가운데 칸 위에 줄이 없다.
  - 들어옴은 열마다 `stagger`(3열)라 길이는 3 × 3 줄마다와 같은 27f다.

**3 `parts-ring` (위 3 · 아래 3 · 정면)**
- 순서 (ref-notes R7 그대로)
  - 위: 왼 `skill-card-1` · 가운데 `badge-approved` · 오른 `skill-card-2`
  - 아래: 왼 `stat-card` · 가운데 `button-submit`(`submit`) · 오른 `skill-card-3`
  - 크기는 모두 video.md 5장 영상 크기 그대로다 (줄이지 않음).
- 세로
  - 위 줄 부품은 각자의 세로 가운데를 화면 위 가장자리에 맞춘다.
  - 아래 줄 부품은 각자의 세로 가운데를 화면 아래 가장자리에 맞춘다.
  - 그래서 모두 세로로 반쯤 잘린다 (컷 03 · R8).
- 가로 (3열 정렬)
  - 가운데 열: 부품 가로 가운데 = 화면 가로 가운데 (`badge-approved` · `button-submit`).
  - 열 폭 기준 = 가운데 열에서 가장 넓은 부품 = `button-submit` 영상 폭.
  - 옆 열 안쪽 가장자리 = 가운데 열 기준 폭의 가장자리 + `video-gap`. 왼쪽 열은 부품 오른쪽 가장자리를, 오른쪽 열은 부품 왼쪽 가장자리를 여기에 맞춘다.
  - 위 · 아래 같은 열은 안쪽 가장자리를 같은 x에 맞춘다.
  - 바깥쪽은 화면 좌우 가장자리에서 잘린다.
- 가운데 글자: 위 줄 아래 가장자리와 아래 줄 위 가장자리 사이 빈 곳의 가운데 (가로 · 세로 가운데). 한 줄 폭 규칙은 video.md 3장.
- 반쯤 잘린 둘레 부품의 글자는 읽는 글자가 아니다 (video.md 1장 예외를 `parts-ring` 승인으로 이번 영상에 적용). 부품 안 값 · `data-state` 외 상태는 바꾸지 않는다.
- `crane-angle` · `cam-drift` 없음 (R10 정면 · `cam-hold`).

**4 상징 · 빛**
- brand-icon 하나를 × 1 화면 가운데에 둔다.
- `video-glow` 고리는 brand-icon 모양 · 같은 중심이다 (motion.md `icon-spin` · video.md 2장).
- `zoom-through` 대상 = brand-icon 가운데 (중심 이동 없이 × 1 → `cam-in`).

**5 엔드**
- video.md 5장대로 `video-bg-end` 위에 logotype과 슬로건을 둔다. 둘 사이는 `video-gap`, 무리째 화면 가운데.
- logotype 덩어리는 builder가 나눈 13덩어리(심볼 1 + 글자 12, decisions.md 스냅보드 항목)를 그대로 쓴다.

## 장면별 타임라인 (builder용 · f 구간은 시작 포함 · 끝 미포함)

**1 훅 (0–120)**
- 0–72: `text-type` — 0 오 · 6 늘 · 12 (띄어쓰기) · 18 배 · 24 운 · 30 (띄어쓰기) · 36 A · 42 I · 48 (띄어쓰기) · 54 스 · 60 킬 · 66 이 (각 글자는 그 프레임에 나타남, 움직임 없음). 커서는 늘 끝 글자 뒤에 있다. 같은 구간 `cam-follow` (`cam-in` · `ease-linear` · 글자 속도 그대로)
- 72–87: `cam-pull` (`cam-in` → × 1 · `dur-l` · `ease-inout`, 글줄 → 화면 가운데)
- 87–117: `hold-m` (정지 · 커서 그대로)
- 117–120: `scene-out` (글줄 · 커서 함께 `exit` `dur-s` · `ease-in`) 앞 절반 → 120에서 `transition`

**2 격자 (120–180)**
- 120–129: 왼쪽 열 brand-icon 2개 `enter` (`dur-m` · `ease-out` · `mask-rise`)
- 129–138: 가운데 열 2개 `enter` (`stagger` `dur-m`)
- 138–147: 오른쪽 열 2개 `enter`
- 147–165: `hold-s`
- 165–180: `zoom-through` (× 1 → `cam-in` · `dur-l` · `ease-in`, 위 줄 가운데 칸으로) → 180에서 `transition`

**3 부품 둘레 (180–276)**
- 180–189: skill-card-1 `part-in` (`enter` + 마스크 대신 위 `dist-m` · 투명도 0 → 1)
- 189–198: badge-approved `part-in`
- 198–207: skill-card-2 `part-in`
- 207–216: stat-card `part-in` (금액은 부품 그대로, `count-up` 없음)
- 216–225: button-submit `part-in`
- 225–234: skill-card-3 `part-in`
- 234–243: 가운데 글자 "나의 자산이 되기까지" `enter` (7번째 항목 · `stagger` 6개 상한)
- 243–273: `hold-m` (덩어리 hold 한 번, `cam-hold`)
- 273–276: `scene-out` (부품 6개 · 글자 한꺼번에) 앞 절반 → 276에서 `transition`

**4 상징 · 빛 (276–333)**
- 276–285: brand-icon `enter` + 마스크 대신 `scale-from` → 1 (`dur-m` · `ease-out`)
- 285–303: `hold-s`
- 303–318: `icon-spin`
  - 303–312: `spin` (`dur-m` · `ease-out`)
  - 303–318: `video-glow` 고리 × 1 → `cut-scale`, 투명도 → 0 (`dur-l` · `ease-out`, 블러 없음)
- 318–333: `zoom-through` (× 1 → `cam-in` · `dur-l` · `ease-in`, brand-icon 가운데로) → 333에서 `transition`

**5 엔드 (333–450)**
- 333–360: `logo-reveal` 덩어리마다 `enter` · `stagger` `dur-xs` (1–6번째 333 · 336 · 339 · 342 · 345 · 348 시작, 7번째부터 351에 같이 시작, 모두 360에 끝)
- 360–375: 기다림 `dur-l` (`end-reveal` 정의)
- 375–390: 슬로건 `enter` + 마스크 대신 투명도 0 → 1 (`dur-l`)
- 390–450: `hold-end` (영상 마지막, 정지)

## 합계 확인
120 + 60 + 96 + 57 + 117 = **450f** (= 15.0초 · BRIEF 450f와 같음)
- 1: 12 × 6 + 15 + 30 + 3 = 120
- 2: 9 × 3 + 18 + 15 = 60
- 3: 9 × 6 + 9 + 30 + 3 = 96
- 4: 9 + 18 + 15 + 15 = 57
- 5: 27 + 15 + 15 + 60 = 117

## 0장 · 5장 점검
- 폰 프레임: 0장면 (엔드 폰 없음) ✔
- 같은 종류 부품 이웃 장면: 격자(2)와 상징(4)의 brand-icon은 이웃이 아님 (사이에 3). 3의 skill-card 3장은 한 장면 안 ✔
- 부품 장면엔 그 부품만: 2 · 4는 brand-icon만. 3은 `parts-ring` 가운데 글자 → `대신` 기록 ✔
- 앞뒤에 없던 화면 · 메시지를 더하지 않는 장면 없음 (1 질문 · 2 상징 · 3 01–05 모음 + 답 · 4 브랜드로 좁힘 · 5 엔드) ✔
- 빈 hold 없음: hold는 모두 4장 "쓰는 곳"과 15자 규칙으로 정함 ✔
- 카메라: 장면마다 한 묶음 (1 `cam-follow` → `cam-pull` · 2 · 4 `zoom-through` · 3 · 5 `cam-hold`). 움직이는 동안 `enter` · `emphasis` 시작 없음 (예외 `cam-follow` + `text-type`). 확대는 `cam-in`까지 ✔
- `cam-drift` · `cam-push` · `cam-release` · `cam-dolly-out` 안 씀 → 카메라 `대신` 없음 ✔
- `dark-cut` · `shape-morph` 안 씀 ✔
