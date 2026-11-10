# beat-sheet 3안 요약 — claude-m1 (2회차 · 뼈대 figma-2003-332)
BRIEF 15초 = 450f · 30fps · 뼈대 컷 01 → 02 → 03 → 04 → 엔드 순서는 세 안 모두 그대로 (뼈대가 이김, CLAUDE.md 4장)

## 셈법
**decisions.md 보류분 그대로 (사람 확인 전)**
- `cut-in-motion` = 3f, 앞 장면에 넣는다.
- `logo-reveal`(글자만) = 27f.
- `shape-morph` = 24f, 앞 장면에 넣는다.

**이번에 더한 것 (docs에 없음, director가 정함 · 확인 필요)**
- `text-type`: 띄어쓰기도 한 글자로 친다 (`type-step` 6f × 글자 수).
- `icon-spin` → `zoom-through`: 둘 사이에 hold 없이 잇는다. `zoom-through`가 경계 동작이라서다 (`button-press` 끝 `transition`과 같은 성격).

## 세 안이 같이 쓰는 덩어리 (motion.md 1 · 2 · 4장 토큰 합)
- **T 컷 01 타이핑 훅 = 120**: `text-type` "오늘 배운 AI 스킬이" 12자 × 6 = 72 (`cam-follow` 같이) → `cam-pull` 15 → `hold-m` 30 (읽는 글자 9자 ≤ 15) → `cut-in-motion` 3.
- **G 컷 02 brand-icon 격자 = 60**: 3 × 3 격자 줄마다 `enter` · `stagger` (3줄 = 27) → `hold-s` 18 → `zoom-through` 15 → `transition`.
  - 3 × 3은 컷 02에 보이는 열 수에서 정했다.
  - `zoom-through`가 끝난 프레임(가운데 칸 `cam-in`, 이웃 칸은 가장자리에서 잘림)이 컷 02 구도다.
- **I 컷 04 brand-icon 확대 · 빛 = 57**: brand-icon `enter` + 마스크 대신 `scale-from` → 1 (9) → `hold-s` 18 → `icon-spin` 15 (`video-glow` 고리) → `zoom-through` 15 → `transition`.
- **E 엔드 = 117**: `end-reveal` = 27 + 15 + 15 + `hold-end` 60.
- 카메라: 장면마다 한 묶음 (T `cam-follow` → `cam-pull` · G/I `zoom-through` · 나머지 `cam-hold`). 확대는 `cam-in`까지. `cam-drift` · `cam-push` · `cam-release`는 세 안 모두 쓰지 않는다.

---

## A안 — 컷 03에 01–05를 압축 (부품 6개 둘레, 레퍼런스 그대로)
- **콘셉트:** 한 자씩 친 질문 → 서비스 상징 격자 → 01–05 화면의 부품 6개가 가장자리에 둘러서고, 가운데에 답이 뜬다 → 상징이 빛으로 퍼지며 엔드.
- **장면 5개 · 450f (15.0초) · 맞음**
- **흐름:** T 글자 `text-type` (`cam-follow` → `cam-pull`) → G brand-icon 격자 `enter` · `stagger` → `zoom-through` → **P** `parts-ring`(새 후보) skill-card-1 · badge-approved · skill-card-2 / stat-card · button-submit · skill-card-3 + 가운데 글자 `headline-in` 1줄 (`cam-hold`) → I brand-icon `icon-spin` → `zoom-through` → E `end-reveal`
- **반영 R:** R1 · R2 · R3 · R4 · R5 · R6 · R7 · R8 · R9 · R10 · R11(근사) · R12 · R13 · R14 = **14/15 (93%)**. 빠짐: R15 (컷 02와 04 사이에 컷 03이 있어 `match-cut` 불가)
- **새 후보: 1개**
  - 새 후보: `parts-ring`
  - 무엇: 서로 다른 부품 6개(위 3 · 아래 3)가 위 · 아래 가장자리에 반쯤 잘려 둘러서고, 가운데에 글자 한 줄이 들어온다.
  - 제안: 배치 규칙만 `phone-ring` · `card-flip-scatter`의 "가장자리에 반쯤 잘림 · 가운데 비움"을 그대로 가져온다. 부품 사이는 `video-gap`. 기울기 없이 정면(R10)이라 `crane-angle`은 쓰지 않는다. 움직임은 부품마다 `part-in`(`enter` + 위 `dist-m` · 투명도)과 `stagger`. 가운데 글자는 `enter`로 7번째 항목처럼 들어온다. hold는 한 번 `hold-m`, 나갈 때는 `scene-out`이다. 새 숫자는 0개다.
  - 이유: 맞는 패턴이 없다. `phone-ring`은 폰 4대, `card-flip-scatter`는 같은 카드 4장이 대상이다. video.md 1장 "반쯤 잘린 둘레 요소는 읽는 글자 아님" 예외에도 `parts-ring`을 더해야 한다.

**글자 후보**
- 훅 (T, `text-type`): "오늘 배운 AI 스킬이" (BRIEF 첫 줄 · 컷 01의 "오"와 첫 글자가 같다)
- 가운데 (P, `video-headline` 1줄 · `video-accent`): "나의 자산이 되기까지" (BRIEF 둘째 줄)
- 엔드 슬로건: "배운 만큼, 자산이 되는 곳" (BRIEF 그대로)
- 바꿀 후보: 가운데 "이렇게, 나의 자산으로" (컷 03에서 부품을 가리키는 말)

**길이 계산**
- P = 부품 6개 `stagger` (0 · 9 · 18 · 27 · 36 · 45 시작 → 54) + 가운데 글자 9 + `hold-m` 30 + `cut-in-motion` 3 = 96
- T 120 + G 60 + P 96 + I 57 + E 117 = **450f**

**대신**
- P: motion.md 0장 "부품 장면엔 그 부품만 · 제목은 글자 장면에서만" 대신, `parts-ring`의 가운데 글자 한 줄 (R9).

---

## B안 — 컷 03을 기존 `phone-ring`으로 근사 (새 후보 없음, 실제 화면이 보임)
- **콘셉트:** A와 같은 뼈대다. 컷 03에서 부품 대신 앱 화면 4장(폰)이 가장자리에 둘러서서 01–05 흐름을 화면 그대로 보여 준다.
- **장면 5개 · 450f (15.0초) · 맞음**
- **흐름:** T 글자 `text-type` (`cam-follow` → `cam-pull`) → G brand-icon 격자 → `zoom-through` → **R** `phone-ring` 폰 4대(`ring-count`) `02-skills` · `03-mission` · `04-approved` · `05-assets` + 가운데 글자 한 줄 → `phone-tip` → I brand-icon `icon-spin` → `zoom-through` → E `end-reveal`
- **반영 R:** R1 · R2 · R3 · R4 · R5 · R6 · R8(근사: 부품 대신 폰) · R9 · R11(근사) · R12 · R13 · R14 = **12/15 (80%)**. 빠짐:
  - R7: 부품 6개가 아니라 폰 4대다.
  - R10: `crane-angle` 기울기와 머묾 중 rotateZ로 정면이 아니다.
  - R15: A와 같다.
- **새 후보: 0개**

**글자 후보**
- 훅: "오늘 배운 AI 스킬이"
- 가운데 (`video-headline` 1줄 · `video-accent`): "나의 자산이 되기까지"
- 엔드 슬로건: "배운 만큼, 자산이 되는 곳"
- 바꿀 후보: 가운데 "스킬에서 자산까지, 한 앱에서"

**길이 계산**
- R = 폰 4대 들어옴 `dur-xl` 24, `stagger` (0 · 9 · 18 · 27 시작 → 51). 가운데 글자는 5번째 항목으로 36에 시작해 45에 끝나 그 안에 든다. → `hold-m` 30 (rotateZ 0 → `tilt` · `ease-linear`) → `phone-tip` 15 → `transition` = 96
- T 120 + G 60 + R 96 + I 57 + E 117 = **450f**

**대신**
- R: motion.md 0장 "폰 프레임은 한 장면에만(폰 하나)" 대신 `phone-ring` (패턴 정의상 `대신:` 기록).
- 빠지는 화면: 01-home (`ring-count` 4).

---

## C안 — 컷 02–03 사이에 승인 장면을 끼움 (상징 → 승인 → 모음)
- **콘셉트:** 격자 가운데 brand-icon으로 다가가면 그 자리에서 "승인 완료" 배지가 피어나고(04), 이어서 A와 같은 부품 둘레(01–05 모음)가 펼쳐진다.
- **장면 6개 · 480f (16.0초) → 길이 조정 필요: 약 +30f**
  - 고치는 길 ①: BRIEF를 480f(16초)로 늘린다.
  - 고치는 길 ②: 슬로건을 P 가운데 글자로 옮기고 E를 `logo-reveal` 27 + `hold-end` 60 = 87로 줄여 450f로 맞춘다. 이때 BRIEF 헤드라인 둘째 줄이 빠진다.
- **흐름:** T 글자 `text-type` → G brand-icon 격자 → `zoom-through` → **B** badge-approved `badge-pulse` (`zoom-through` 다음 첫 프레임, 가운데 그 자리) → P `parts-ring`(새 후보) + 가운데 글자 → I brand-icon `icon-spin` → `zoom-through` → E `end-reveal`
- **반영 R:** A와 같음 R1–R14 (R11 근사) = **14/15 (93%)**. 빠짐: R15. 끼운 B 장면은 레퍼런스에 없는 장면이라 R과 상관없다.
- **새 후보: 1개** — `parts-ring` (A안과 같은 내용)

**글자 후보**
- 훅: "오늘 배운 AI 스킬이"
- 가운데: "나의 자산이 되기까지"
- 엔드 슬로건: "배운 만큼, 자산이 되는 곳"
- 고치는 길 ②로 갈 때 가운데: "배운 만큼, 자산이 되는 곳"

**길이 계산**
- B = `badge-pulse` 9 + `hold-s` 18 + `cut-in-motion` 3 = 30
- T 120 + G 60 + B 30 + P 96 + I 57 + E 117 = **480f**
- 고치는 길 ②: 480 − 117 + 87 = **450f**

**대신**
- P: A안과 같다 (0장 "부품 장면엔 그 부품만" 대신 가운데 글자).

**주의**
- badge-approved가 B와 P에 두 번 나온다. 0장 "앞뒤에 없던 메시지를 더하지 않는 장면은 뺀다"에 걸릴 수 있다.

---

## 0장 · 5장 점검 (세 안 공통)
- 폰: A · C는 0장면, B는 `phone-ring` 1장면(대신). 엔드에 폰 없음.
- 같은 종류 부품 이웃 장면: 격자(G)와 컷 04(I)의 brand-icon은 이웃이 아니다 (사이에 컷 03).
- 빈 hold 없음: 모든 hold는 4장 "쓰는 곳"과 15자 규칙으로 정했다.
- 카메라: 장면마다 한 묶음이다. 카메라가 움직이는 동안 `enter` · `emphasis`를 시작하지 않는다. 확대는 `cam-in`까지 [고정].
- R11 근사: 컷 04는 심볼이 화면보다 크다. 우리는 `zoom-through`의 `cam-in`(× 2.4)이 상한이라 화면을 넘기지 않는다 (5장 [고정]).
- 레퍼런스의 흐림은 가져오지 않는다. `icon-spin`은 블러가 없다.

## 추천: A안
레퍼런스 반영이 14/15로 가장 높고 450f에 딱 맞으며, 컷 03 구도(정면 · 부품 6개 · 가운데 글자)를 그대로 살린다. `parts-ring`이 승인되지 않으면 B안으로 간다.
