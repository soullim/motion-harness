# video.md

영상 룩 기준. 캔버스 **1920×1080 (16:9) · 30fps**. 움직임은 `docs/motion.md`, 장면 순서 · 흐름 · 구성은 영상마다 비트 시트(레퍼런스가 정함).
규칙: 색 · 폰트는 `docs/design.md`에 있는 것만 쓴다. 이 문서의 토큰은 design.md 토큰을 가리키는 이름이다. 새 색 · 새 폰트 · 그라데이션 · 텍스처 · 노이즈 없음.
선택 (2026-11-06 요청): 배경 **밝은** · 헤드라인 **단정하게** · 엔드 카드 **밝은**.

| 토큰 | 값 | 설명 |
|---|---|---|
| `video-scale` | × 2.8 | 피그마 값 → 영상 값 배율. 영상 글자 · parts 크기에 쓴다 (모션용 텍스트 배율, 요청) |
| `video-safe` | 96px (네 변) | 글자 · 부품이 들어가는 안전 영역. 안쪽 1728×888 |
| `video-gap` | 48px | 영상 안 요소 사이 간격 (목록 카드 · 캐러셀 · 아이콘 옆) |

design.md 4장 Scale(간격 · 모서리)은 parts 안에서만 쓴다. 영상 배치 간격은 위 `video-safe` · `video-gap`만.

## 1. 텍스트 최소 크기

| 토큰 | 값 | 근거 |
|---|---|---|
| `video-text-min` | **31px** (1080 캔버스에서 잰 글자 크기) | design.md 가장 작은 스타일 `Text/eyebrow` 11px × `video-scale` |

- 읽어야 하는 글자는 최종 프레임에서 31px 이상. 어떤 장면이든 이보다 작으면 읽히지 않는 글자로 본다.
- parts는 × 2.8로 그리므로 안의 글자는 모두 31px 이상이다 (`Text/eyebrow` 11 → 31 · `Text/caption` 12 → 34).
- 폰 프레임 속 화면 글자는 × 1.1(4장)이라 최소보다 작다 → 읽히는 정보로 쓰지 않는다. 읽혀야 하면 parts로 따로 그리거나 카메라 `cam-in`(× 2.4)으로 다가간다. 이때 `Text/caption` 12 × 1.1 × 2.4 = 31.7px로 최소를 넘고, `Text/eyebrow`(11 → 29px)는 여전히 작다.
- 줄이기 금지: parts · 영상 글자를 `video-scale`보다 작게 줄이지 않는다 (예외: motion.md `phone-ring` · `card-flip-scatter`처럼 반쯤 잘린 둘레 요소는 읽는 글자가 아님).

## 2. 배경

| 토큰 | 가리키는 design.md | hex | 쓰는 곳 |
|---|---|---|---|
| `video-bg` | `color-bg` | `#ffffff` | 기본 바탕 · 글자 장면 |
| `video-bg-soft` | `color-surface` | `#f7f7f8` | parts · 폰 프레임 장면 (흰 카드 · 흰 화면이 바탕과 구분되게) |
| `video-bg-dark` | `color-text` | `#18191b` | motion.md `dark-cut` 한 곳만 |
| `video-bg-end` | `color-bg` | `#ffffff` | 엔드 카드 (밝은) |
| `video-glow` | `color-primary` | `#3759de` | motion.md `icon-spin` 빛 고리 · 가운데 투명도 0.45 → 가장자리 0 (원형, 블러 필터 없음) |

- 바탕은 한 색으로 칠한다. 사진 · 무늬 · 그라데이션 바탕 없음 (`video-glow`는 바탕이 아니라 잠깐 지나가는 요소).
- 바탕이 바뀌는 순간은 motion.md를 따른다 (`transition` 컷 · `dark-cut` · `icon-expand`). 이 문서는 색만 정한다.

## 3. 글자

폰트 `Pretendard` (design.md 3장 로컬 파일 A). 크기 · 행간 = 피그마 스타일 × `video-scale`, 소수점은 반올림. 자간 0%.

| 토큰 | 피그마 스타일 | 굵기 | 크기 / 행간 (px) | 쓰는 곳 |
|---|---|---|---|---|
| `video-headline` | `Text/display` 28 / 34 | 700 | **78 / 95** | 헤드라인 (단정하게: 이 크기에서 더 키우지 않음) |
| `video-sub` | `Text/heading` 18 / 28 | 600 | 50 / 78 | 헤드라인 아래 한 줄 · 슬로건 |
| `video-body` | `Text/body` 15 / 24 | 400 | 42 / 67 | 설명 문장 (꼭 필요할 때만) |
| `video-label` | `Text/label` 14 / 20 | 600 | 39 / 56 | 숫자 옆 단위 · 짧은 표시 |
| `video-eyebrow` | `Text/eyebrow` 11 / 16 | 600 | 31 / 45 | 헤드라인 위 작은 머리말 (= `video-text-min`) |

| 토큰 | 가리키는 design.md | hex | 쓰는 곳 |
|---|---|---|---|
| `video-text` | `color-text` | `#18191b` | 밝은 바탕 위 기본 글자 |
| `video-text-muted` | `color-text-muted` | `#75777c` | `video-sub` · `video-eyebrow` |
| `video-accent` | `color-primary` | `#3759de` | 강조 색 글자 (밝은 바탕) |
| `video-text-inverse` | `color-on-primary` | `#ffffff` | `video-bg-dark` 위 글자 |
| `video-accent-inverse` | `color-primary-subtle` | `#edf1ff` | `video-bg-dark` 위 강조 글자 |

- 정렬: 가운데. 헤드라인은 최대 2줄 · 한 줄 폭 1400px 이하 (약 18자). 한국어 줄바꿈은 단어 단위 (`word-break: keep-all`).
- 강조 색: 헤드라인 하나에 한 곳 (둘째 줄 전체 또는 한 단어). 색만 바꾸고 굵기 · 크기는 그대로. 움직임이 아니다 (motion.md 3장 [고정]).
- `dark-cut`: `video-bg-dark`에서는 `video-text-inverse` · `video-accent-inverse`. 바탕이 밝아지는 동안 글자도 같은 시간 · 같은 곡선으로 `video-text` · `video-accent`로 바뀐다.
- 숫자 (`count-up` · 진행 글자): `font-variant-numeric: tabular-nums`로 자릿수 폭을 고정해 숫자가 오를 때 흔들리지 않게. 천 단위 쉼표.
- 커서 (`text-type`): 폭 6px · 끝 글자와 6px 띄움 · 높이 = 그 글자 스타일의 행간 (예: `video-headline` 95px) · 색 `video-text`.
- `icon-inline` (motion.md `word-swap` · `icon-flight`): 글자 줄 안에 brand-icon을 넣을 때 크기 = 그 글자 크기 (헤드라인이면 78×78), 모서리는 같은 비율로 줄임, 양옆 간격 = 글자 크기 × 0.25 (헤드라인 20px), 세로 가운데 = 줄 가운데.
- 그림자 · 외곽선 · 글자 효과 없음.

## 4. 폰 프레임

화면 이미지 `src/screens/*.png`(780×1688 = 390×844 @2x)를 담는 틀. 장식 없는 단순한 기기 모양.

| 토큰 | 값 | 설명 |
|---|---|---|
| `video-phone-scale` | × 1.1 | 화면 390×844 → **429×928**. 1080 높이에 위아래 64px 남김 (`video-safe` 세로는 넘어도 됨) |
| `video-phone-bezel` | 12px · `color-text` `#18191b` | 화면 둘레 테. 바깥 크기 453×952 |
| `video-phone-radius` | 화면 52px · 바깥 64px | 둥근 모서리 |
| `video-phone-shadow` | `Shadow/lg` × 1.1 → 0 · 9 · 26 · `#0000001F` | design.md 4장 그림자 |

- 노치 · 다이내믹 아일랜드 · 옆 버튼 · 기종 디테일 없음. 화면 이미지에 이미 있는 상태 표시줄(9:41)만.
- 바탕은 `video-bg-soft`. 기울기 · 원근은 motion.md `crane-angle`이 정한다 (이 문서는 정면 모양만).
- 화면 이미지는 그대로 쓰고 고치지 않는다. 화면 안 글자 크기는 1장 규칙을 본다.

### 겹침 · 덮개판 (화면 속 부품을 움직일 때)

화면 이미지는 그림이라 안의 부품이 움직이지 않는다. 움직일 부품만 HTML parts로 같은 자리에 겹친다.
1. 덮개판: 이미지 속 원래 부품 자리를 그 아래 바탕색 판으로 덮는다. 크기 = 부품 + 네 변 2px, 모서리 = 부품 모서리 × 1.1. 색은 design.md에서 (아래 표 모두 `color-bg` `#ffffff`).
2. 그 위에 parts를 × 1.1로 같은 자리에 놓는다. 캔버스 위치 = 화면 왼쪽 위 + (아래 좌표 × 1.1).

| 화면 | 부품 | 자리 (화면 @1x 좌표 x · y · 폭 × 높이) |
|---|---|---|
| `01-home` | `button-submit` (mission-card 안, apply-case) | 37 · 486 · 318 × 44 |
| `01-home` | mission-card 진행 바 (트랙) | 37 · 471 · 318 × 3 (채움 159 = 50%) |
| `03-mission` | `button-submit` "제출하기" | 20 · 753 · 350 × 44 |
| `03-mission` | mission-card 진행 바 (트랙) | 37 · 281 · 318 × 3 (채움 159 = 50%) |
| `04-approved` | `button-submit` | 20 · 668 · 350 × 44 |
| `05-assets` | `button-submit` | 20 · 285 · 350 × 44 |

좌표는 화면 PNG에서 `color-primary` 영역을 재서 얻었다 (2026-11-06). 표에 없는 부품을 겹칠 때는 같은 방법으로 재서 이 표에 더한다.

## 5. parts

`src/parts/*.html`을 그대로 불러와 `video-scale`(× 2.8)로 키워 쓴다. PNG(`_check/`)는 확인용이라 영상에 쓰지 않는다.

| 부품 | 피그마 | 영상 크기 (× 2.8) |
|---|---|---|
| `mission-card` | 350×253 | 980×708 |
| `stat-card` | 350×101 | 980×283 |
| `skill-card-1 · 2 · 3` | 350×88 | 980×246 (3장 + `video-gap` 2번 = 834 높이) |
| `asset-card` | 350×74 | 980×207 (3장 + `video-gap` 2번 = 717 높이) |
| `button-submit` | 350×44 (apply-case 318×44) | 980×123 (890×123) |
| `badge-approved` | 108×32 | 302×90 |
| `brand-icon` | 98×98 | 274×274 |
| `logo` logotype · symbol | 149×19 · 100×100 | 417×53 · 280×280 |

- 키우는 기준점은 부품 가운데. 안의 여백 · 모서리 · 테두리 · 글자도 같이 × 2.8 (CSS `transform: scale` 또는 같은 배율로 다시 그림). 부품 안 값을 따로 고치지 않는다.
- 바탕은 `video-bg-soft`. 부품에 그림자를 더하지 않는다 (피그마에 있는 것만).
- 여러 장은 `video-gap`으로 띄운다. 모두 `video-safe` 안에 들어간다 (위 표 높이 ≤ 888).
- 상태는 각 부품의 `data-state`로만 바꾼다 (design.md 6장). mission-card 진행은 `--progress`.
- 캐릭터 PNG(`src/assets`, 1200×1200)는 × 2.8과 motion.md `cut-scale`(× 1.7)까지 키워도 원본 해상도 안이다. 감싸기만 하고 고치지 않는다.
- 엔드 카드: `video-bg-end` 위에 `logo-logotype-black`만 (logotype 안에 심볼이 있어 brand-icon 없음, motion.md `logo-reveal`). white 로고는 `video-bg-dark` 위에서만.
- 첫 프레임을 찍기 전에 `document.fonts.ready`와 이미지 로드를 기다린다 (design.md 3장).
