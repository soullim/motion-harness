# beat-sheet — claude-m1  (안 B · 총 450f = 15초 · 30fps)
반영: 해당 없음 (ref-notes R 0개 · 레퍼런스 없음 → motion.md [기본 스타일]만)

셈법 (docs에 없음, director가 정함 · 사람 확인 전, decisions.md 참고)
1. `cut-in-motion` = `scene-out`(`exit` `dur-s` 6f)의 절반 3f에서 `transition`. 이 3f는 앞 장면 길이에 넣는다.
2. `logo-reveal`(엔드, brand-icon 없이 글자만) = logotype 글자 `enter`를 `dur-xs` 간격 `stagger`, 6개 상한(7번째부터 같이) → 마지막 글자 시작 18f + `enter` 9f = 27f. logotype 글자 덩어리가 7개 이상이면 늘 27f.
3. `shape-morph` 24f = 글자 `exit` 6 + 원으로 줄어듦 9 + 점까지 9. 이 24f는 앞(버튼) 장면에 넣고, 주인공의 `scale-from` → 1 9f는 다음 장면에 넣는다.

프레임 표기: `시작–끝`은 시작 포함 · 끝 미포함 (끝 = 다음 장면 시작).

| 장면 | 시작–끝 (f) | 화면 · 부품 | 글자 (video.md 토큰) | 움직임 (motion.md 이름) | 카메라 | 머묾 | 전환 → 다음 | 반영 R | 대신 |
|---|---|---|---|---|---|---|---|---|---|
| 1 헤드라인 | 0–75 (75) | 바탕 `video-bg` · 부품 없음 | `video-headline` 2줄 가운데. 1줄 `video-text` "오늘 배운 AI 스킬이" / 2줄 `video-accent` "나의 자산이 되기까지" (18자 > 15) | `headline-in` (`enter` × 2 · `stagger`) → `scene-out` | `cam-hold` | `hold-l` | `cut-in-motion` → 2 | 해당 없음 | 없음 |
| 2 스킬 | 75–159 (84) | 바탕 `video-bg-soft` · `skill-card-1.html` · `skill-card-2.html` · `skill-card-3.html` (세로 3장, `video-gap`) | 없음 (부품 안 글자만) | `skill-list` → `scene-out` | `cam-hold` | `hold-l` | `cut-in-motion` → 3 | 해당 없음 | 없음 |
| 3 제출 | 159–237 (78) | 바탕 `video-bg-soft` · `button-submit.html` `data-state="submit"` (제출하기) | 없음 (부품 안 글자만) | `part-in` → `button-press` → `shape-morph` | `cam-hold` | `hold-m` (`button-press` 안의 앞 머묾) | `shape-morph` 끝 `transition` → 4 (점 자리 그대로) | 해당 없음 | 없음 (`button-press` 끝 `transition` 자리에 `shape-morph`: 3장 경계 규칙 "button-submit에서 나갈 땐 `shape-morph` 가능" 안쪽) |
| 4 승인 | 237–267 (30) | 바탕 `video-bg-soft` · `badge-approved.html` (3의 점 자리 = 화면 가운데) | 없음 (부품 안 "승인 완료"만) | `badge-pulse` (`shape-morph`의 주인공 `scale-from` → 1) → `scene-out` | `cam-hold` | `hold-s` | `cut-in-motion` → 5 | 해당 없음 | 없음 |
| 5 수익 | 267–333 (66) | 바탕 `video-bg-soft` · `stat-card.html` (제목 없음) | 없음 (부품 안 글자만 · 숫자는 video.md 3장 숫자 규칙) | `part-in` → `count-up` → `scene-out` | `cam-hold` | `hold-s` (`count-up` 끝) | `cut-in-motion` → 6 | 해당 없음 | 없음 |
| 6 엔드 | 333–450 (117) | 바탕 `video-bg-end` · `logo.html` `data-state="logotype-black"` (brand-icon 없음, 폰 없음) | 슬로건 `video-sub` "배운 만큼, 자산이 되는 곳" (video.md 3장 색) | `end-reveal` (`logo-reveal` 글자만 → 슬로건 `enter` + 투명도) | `cam-hold` | `hold-end` | 영상 끝 (마지막 머묾 정지) | 해당 없음 | 없음 |

## 장면별 타임라인 (builder용 · f 구간은 시작 포함 · 끝 미포함)

**1 헤드라인 (0–75)**
- 0–9: 1줄 `enter` (`dur-m` · `ease-out` · `mask-rise` → 0)
- 9–18: 2줄 `enter` (`stagger` `dur-m` 뒤 시작)
- 18–72: `hold-l` (정지)
- 72–75: `scene-out` (두 줄 함께 `exit` `dur-s` · `ease-in`) 앞 절반 → 75에서 `transition`

**2 스킬 (75–159)**
- 75–84: skill-card-1 `enter` + 위 `dist-m` · 투명도 0 → 1
- 84–93: skill-card-2 같은 움직임 (`stagger` `dur-m`)
- 93–102: skill-card-3 같은 움직임
- 102–156: `hold-l`
- 156–159: `scene-out` 앞 절반 → 159에서 `transition`

**3 제출 (159–237)**
- 159–168: button-submit `part-in` (`enter` + 위 `dist-m` · 투명도 0 → 1)
- 168–198: `hold-m` (`button-press`의 앞 머묾)
- 198–204: 누름 1 → `press-scale` (가운데 기준 · `dur-s` · `ease-in`)
- 204–213: 돌아옴 → 1 (`dur-m` · `ease-out`)
- 213–219: `shape-morph` 글자 "제출하기" `exit` (`dur-s`)
- 219–228: 폭이 높이까지 줄어 원 (`dur-m` · `ease-in`)
- 228–237: 원 → `scale-from` 점 (`dur-m` · `ease-in`) → 237에서 `transition`

**4 승인 (237–267)**
- 237–246: badge-approved가 그 점에서 `scale-from` → 1 (`dur-m` · `ease-out`, = `badge-pulse`)
- 246–264: `hold-s`
- 264–267: `scene-out` 앞 절반 → 267에서 `transition`

**5 수익 (267–333)**
- 267–276: stat-card `part-in`
- 276–312: `count-up` 금액 0 → 29,700 (`dur-2xl` · `ease-out` · 정수)
- 312–330: `hold-s`
- 330–333: `scene-out` 앞 절반 → 333에서 `transition`

**6 엔드 (333–450)**
- 333–360: `logo-reveal` logotype 글자마다 `enter` · `stagger` `dur-xs` (1–6번째 글자 333 · 336 · 339 · 342 · 345 · 348 시작, 7번째부터 351에 같이 시작, 모두 360에 끝)
- 360–375: 기다림 `dur-l` (`end-reveal` 정의)
- 375–390: 슬로건 `enter` + 마스크 대신 투명도 0 → 1 (`dur-l`)
- 390–450: `hold-end` (영상 마지막, 정지)

## 합계 확인
75 + 84 + 78 + 30 + 66 + 117 = **450f** (= 15.0초 · BRIEF 450f와 같음)
- 1: 9 + 9 + 54 + 3 = 75
- 2: 9 × 3 + 54 + 3 = 84
- 3: 9 + 30 + 6 + 9 + 24 = 78
- 4: 9 + 18 + 3 = 30
- 5: 9 + 36 + 18 + 3 = 66
- 6: 27 + 15 + 15 + 60 = 117

## 0장 규칙 점검
- 폰 프레임: 0장면 (한 장면 이하 · 엔드 폰 없음) ✔
- 같은 종류 부품 이웃 장면: 스킬 3장은 한 장면(2)으로 합침. 3 버튼 · 4 배지 · 5 stat-card는 서로 다른 부품 ✔
- 부품 장면엔 그 부품만: 2–5 모두 한 종류 부품만. 3→4의 버튼 → 배지는 `shape-morph` 경계에서 바뀌고 한 장면에 같이 있지 않음 ✔
- 제목 · 부제는 글자 장면(1)과 엔드(6)에서만 ✔
- 빈 hold로 채운 곳 없음. 모든 hold는 4장 "쓰는 곳"과 15자 규칙으로 정함 ✔
