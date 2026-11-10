# motion.md
움직임 기준. 성격: **차분한** (2026-11-06 요청) · 바탕: 2026-10-25 motion.md (성격 경쾌함, 레퍼런스 inoue-aix · LoreOS 광고 40초, `references/ref-frames/inoue-aix/original.mp4`)
규칙: 이 문서에 있는 값만 쓴다. 장면에서는 Semantic(2장) 이름으로 부르고, Primitive(1장)를 직접 쓰지 않는다. 30fps.
출처: `레퍼런스 <장면>` = 위 영상에서 잰 값(바탕 문서 경유) · `요청 <날짜>` · `기존` = 그 전 motion.md · `차분한 (A→B)` = 바탕 값 A를 오늘 성격으로 B로 바꿈. 레퍼런스에서 가져오지 않는 것: 프레임 · 에셋 · 음악 · 로고 · 카피 문장 · 색값 (CLAUDE.md 4번).
[고정]은 늘 지킨다. [기본 스타일]은 beat-sheet.md에 다른 규칙이 있으면 그쪽을 따르고 decisions.md에 "기본 스타일 X 대신 비트 시트 Y"로 남긴다. 없으면 [기본 스타일]을 따른다. 1장 숫자 · 4장 hold 숫자는 [고정].
레퍼런스 시점: 바탕 문서에는 장면 이름만 있고 mm:ss가 없다. 영상을 다시 재면 `00:00 장면 nf` 꼴로 바꾼다.

## 0. 영상 전체 규칙 (장면표 쓰기 전에 먼저 본다 · 1~5장보다 앞섬 · 근거 work/launch-30s/log.md)
- 폰 프레임은 한 영상에서 한 장면에만. 나머지는 폰 없이 부품을 화면 가운데에. 엔드 카드에도 폰 없음. (2026-10-24 반려 2) [기본 스타일]
- 같은 종류 부품을 잇는 이웃 장면은 하나로 합친다 (예: 카드 여러 장 → `skill-carousel`). (2026-10-24 반려 2) [고정]
- 부품 장면에는 그 부품만. 제목 · 부제는 글자 장면에서만. (2026-10-24 반려 2 · stat-card 제목 없음 결정) [기본 스타일]
- 앞뒤에 없던 화면 · 메시지를 더하지 않는 장면은 뺀다. (2026-10-24 반려 2) [고정]
- 장면 길이가 움직임 + hold(4장)보다 길면 빈 hold로 채우지 않고 BRIEF 길이를 줄이자고 묻는다. (2026-10-24 반려 2) [고정]
- 카메라가 다가간 장면은 머묾 컷을 따로 두지 않고 그 대상의 동작(`button-press` · `shape-morph`)으로 넘긴다. (2026-10-24 요청) [기본 스타일]

## 1. Primitives
### Duration (6단계)
| 토큰 | 프레임 | ms | 출처 |
|---|---|---|---|
| `dur-xs` | 3 | 100 | 차분한 (2→3) · 레퍼런스 엔드 로고 글자 간격 |
| `dur-s` | 6 | 200 | 차분한 (3→6) · 레퍼런스 장면 끝 글줄 사라짐 · 타이핑 한 글자 |
| `dur-m` | 9 | 300 | 차분한 (6→9) · 레퍼런스 글줄 등장 · 폴더 한 줄 |
| `dur-l` | 15 | 500 | 차분한 (12→15) · 레퍼런스 입력창 줌아웃 |
| `dur-xl` | 24 | 800 | 바탕 그대로 · 레퍼런스 "翌朝" 어두운 바탕 → 밝은 바탕 |
| `dur-2xl` | 36 | 1200 | 차분한 (30→36) · 레퍼런스 아이콘 고리 연결선 · 카메라 이동 상한 |

### Easing (y값 모두 0–1 안 · 넘었다 돌아오는 back · elastic · bounce 없음 · 레퍼런스 전체)

| 토큰 | 값 | 쓰는 곳 | 출처 |
|---|---|---|---|
| `ease-out` | `cubic-bezier(0.33, 1, 0.68, 1)` | 들어오기 · 상태 바뀜 | 차분한 (`0.16, 1, 0.3, 1` → 완만하게) · 레퍼런스 글줄 등장 |
| `ease-in` | `cubic-bezier(0.32, 0, 0.67, 0)` | 나가기 · 모이기 | 차분한 (`0.5, 0, 0.75, 0` → 완만하게) · 레퍼런스 아이콘 고리 모임 |
| `ease-inout` | `cubic-bezier(0.65, 0, 0.35, 1)` | 카메라 줌 | 바탕 그대로 · 레퍼런스 입력창 줌아웃 |
| `ease-linear` | `linear` | 카메라 따라가기 · 바탕 바뀜 | 바탕 그대로 · 레퍼런스 타이핑 · "翌朝" 바탕 |

### Distance · Scale · 기타
| 토큰 | 값 | 출처 |
|---|---|---|
| `mask-rise` | 100% (글줄 높이, 마스크 아래 → 위) | 레퍼런스 글줄 · 로고 글자 등장 |
| `dist-s` · `dist-m` · `dist-l` | 8px · 24px · 70px | 레퍼런스 폴더 줄 · "翌朝" 결과 카드 · 요청 2026-10-24 (폰 `rise` · `cam-crane` 시작) |
| `press-scale` | 0.97 | 차분한 (0.96→0.97) · 요청 2026-10-24 버튼 누름 |
| `scale-from` · `tilt` | 0 · 15deg → 0 | 레퍼런스 엔드 L 아이콘 · "1ヶ月無料" 배지 (점에서 커짐 · 기운 채 커지며 섬) |
| `cam-in` · `cut-scale` · `dolly-scale` | × 2.4 · × 1.7 · × 0.5 | 레퍼런스 입력창 · 요청 2026-10-24 (snapcn wordmark-cut) · 요청 2026-10-25 (1password 그물 줌아웃) |
| `dim` | 투명도 0.4 | 레퍼런스 "探さない。まとめない。" |
| `type-step` | `dur-s` (6f) | 레퍼런스 타이핑 한 글자 간격 · 차분한 (3→6) |
| `crane-angle` | rotateX 12° · rotateY -18° · perspective 2400px · 중심 폰 가운데 | 요청 2026-10-24 (snapcn `showcase`) |
| `flip-turn` | rotateY 180° · perspective 2400px · 중심 부품 가운데 | 요청 2026-10-25 (1password · langease) |
| `spin` | rotateZ 360° · 중심 부품 가운데 | 요청 2026-10-25 (1password 아이콘 약 6f) |
| `ring-count` | 4 | 요청 2026-10-25 (langease 폰 터널 · 카드 4장) |

## 2. Semantic (5개뿐 · 변형은 만들지 않고 3장에서 "Semantic + 차이"로)

| 토큰 | 구성 | 출처 |
|---|---|---|
| `enter` | `dur-m` · `ease-out` · 마스크 안에서 `mask-rise` → 0 (투명도는 그대로, 마스크가 가림) | 레퍼런스 글줄 등장 |
| `exit` | `dur-s` · `ease-in` · 제자리 투명도 1 → 0 | 레퍼런스 장면 끝 |
| `emphasis` | 상태 한 번 바뀜 (값 · 테두리 · 채움 시작 → 최종) · `dur-m` · `ease-out` · 크기 변화 없음 | 레퍼런스 폴더 파일 칩 하이라이트 |
| `transition` | 0ms 컷 (길이 · 곡선 [고정]). 다음 장면 첫 프레임에 이미 `enter` 중 | 레퍼런스 장면 경계 (전부 컷) [기본 스타일] |
| `stagger` | 항목 · 줄 사이 `dur-m`, 글자 사이 `dur-xs`. 6개를 넘으면 7번째부터 같이 | 레퍼런스 폴더 줄 · 엔드 로고 글자 · 6개 상한 기존 |

## 3. Pattern (src/parts · src/screens에 있는 것만 · Semantic + 다른 점만 `+`로, 차이도 1장 토큰으로)

| 패턴 | 대상 | 움직임 | 출처 |
|---|---|---|---|
| `headline-in` | 화면 제목 · 부제 (01–05) | 줄마다 `enter`, 줄 사이 `stagger` | 레퍼런스 "9つのサービスと / 連携。" |
| `text-type` | 훅 제목 한 줄 | `type-step`마다 한 글자 (움직임 없음) · 끝 글자 뒤 커서 (폭 6px · 6px 띄움 · 높이 = 행간, video.md 3장) · `cam-follow`와 같이 | 레퍼런스 타이핑 · 요청 2026-10-24 커서 |
| `word-strike` | 앞서 보인 제목 줄 | 다음 줄 `enter`와 같이: 취소선 왼 → 오 `dur-m` · `ease-out` + 그 줄 → `dim` | 레퍼런스 "探さない。まとめない。" |
| `logo-reveal` | brand-icon → logo | brand-icon `enter` + `scale-from` → 1 · `tilt` → 0 → logotype 글자마다 `enter` · `stagger`. 엔드 카드는 brand-icon 없이 글자만 | 레퍼런스 엔드 로고 · 요청 2026-10-24 |
| `end-reveal` | 엔드 logo + 슬로건 | `logo-reveal` → `dur-l` 뒤 슬로건 `enter` + 마스크 대신 투명도 0 → 1 · `dur-l` | 레퍼런스 엔드 "loreos.jp" |
| `chip-row` | 카테고리 칩 (01 · 02 · 05) | 칩마다 `enter` + 마스크 대신 왼쪽 `dist-s` · 투명도 0 → 1, `stagger` | 레퍼런스 폴더 줄 |
| `skill-list` · `asset-list` | skill-card-1 · 2 · 3 (02의 3장 · 01은 1장이라 `part-in`) · asset-card (05의 3장) | `enter` + 마스크 대신 위 `dist-m` · 투명도 0 → 1, `stagger` | 레퍼런스 "翌朝" 결과 카드 |
| `skill-carousel` | skill-card-1 · 2 · 3 (폰 없이) | 가로 한 줄 → 한 장씩 왼쪽으로 (카드 폭 + `video-gap`, video.md 3장) · `dur-l` · `ease-inout`, 카드마다 `hold-m` | 요청 2026-10-24 |
| `part-in` | mission-card · stat-card · button-submit 하나 | `enter` + 마스크 대신 위 `dist-m` · 투명도 0 → 1 | 레퍼런스 "翌朝" 결과 카드 |
| `count-up` | stat-card 금액 | `part-in` 바로 뒤 0 → 최종값 · `dur-2xl` · `ease-out` · 정수, 끝나면 `hold-s` | 요청 2026-10-24 승인 |
| `mission-in` | mission-card (01 · 03) | `part-in` → 진행 바 · 진행 글자 `emphasis` | 레퍼런스 결과 카드 · 칩 하이라이트 |
| `mission-done` | mission-card 100% (03 → 04) | 진행 바 · 글자 `emphasis` → `badge-pulse` | 레퍼런스 칩 하이라이트 · 배지 |
| `badge-pulse` | badge-approved (04) | `enter` + 마스크 대신 `scale-from` → 1 | 레퍼런스 "1ヶ月無料" 배지 |
| `button-press` | button-submit (화면 속 같은 자리에 겹쳐도 됨, video.md 4장) | 앞 `hold-m` → 1 → `press-scale` (중심 가운데) `dur-s` · `ease-in` → 1로 `dur-m` · `ease-out` → 끝 프레임에 `transition` (`scene-out` 없음) | 요청 2026-10-24 승인 |
| `screen-reveal` | 폰 화면 01–05의 한 부분 (01 mission · 02 첫 skill · 03 mission · 04 badge · 05 stat) → 전체 | `cam-in`에서 시작 → `cam-pull` → 멈춘 뒤 주변 `enter` + 투명도 0 → 1, `stagger`. 폰은 첫 프레임부터 제자리 (빈 바탕 프레임 없음) | 레퍼런스 입력창 → 채팅 화면 · 요청 2026-10-24 |
| `screen-change` | 01 → 05 | `transition` | 레퍼런스 장면 경계 |
| `screen-dissolve` | 장면 경계 (이어지는 요소 없음) | 앞 화면 1 → 0과 다음 화면 0 → 1 동시 · `dur-m` · `ease-inout` · 위치 · 크기 그대로, 끝나면 다음 `enter` | 요청 2026-10-25 (saadpastadev) |
| `dark-cut` | 강조 전환 (영상에 1곳) | `transition`으로 `video-bg-dark` → 제목 `enter` → `hold-s` → 바탕만 밝게 `dur-xl` · `ease-linear` (글자 색은 video.md) | 레퍼런스 "翌朝。" |
| `scene-out` | 장면 끝 요소 전체 | 한꺼번에 `exit` (stagger 없음) | 레퍼런스 장면 끝 |
| `match-cut` | 경계 (같은 요소가 양쪽에) | `transition`. brand-icon · logo · 숫자는 다음 첫 프레임에 같은 자리 · 크기, 바탕 · 주변만 바뀜 | 레퍼런스 L 아이콘 |
| `cut-in-motion` | 경계 (이어지는 요소 없음) | `scene-out` 절반 프레임에서 `transition` | 레퍼런스 "あとは毎日" → 엔드 |
| `shape-morph` | button-submit → 다음 주인공 | 글자 `exit` → 폭이 높이까지 줄어 원 `dur-m` · `ease-in` → `scale-from`까지 `dur-m` · `ease-in` → `transition`, 주인공이 그 점에서 `scale-from` → 1 `dur-m` · `ease-out` | 요청 2026-10-24 (saadpastadev) |
| `slot-roll` | 영상 글자 두 줄 (아랫줄 단어만 바뀜) | 나가는 · 들어오는 단어 한 덩어리로 `mask-rise` · `dur-s` · `ease-out`. 간격 `dur-l`에서 줄어 마지막 `dur-m`. 단어 최대 6 · 가운데 정렬 · 끝 `hold-m` | 요청 2026-10-24 (saadpastadev) |
| `punch-cut` | 엔드 logo (와이드 → 클로즈) | `logo-reveal` → `hold-s` → `transition` → 같은 logo `cut-scale`, 심볼을 화면 가운데 · logo만 남김 → `hold-end` | 요청 2026-10-24 (snapcn · 오버슈트 뺌) |
| `phone-rise-tilt` | 폰 등장 | 아래 `dist-l` · `crane-angle` → 0 · `dur-l` · `ease-out` | 기존 · 2026-10-25 조립 |
| `phone-tip` | 폰 나감 | 각도 0 → `crane-angle` + `exit` · `dur-l` · `ease-in` → `transition` | 기존 · 2026-10-25 조립 |
| `zoom-through` | 경계 (부품 안으로) | × 1 → `cam-in` · `dur-l` · `ease-in` → `transition`, 다음 첫 프레임은 그 자리에서 (`match-cut`처럼) | 기존 · 2026-10-25 조립 |
| `icon-expand` | 경계 (부품이 다음 바탕) | 글자 `exit` → 화면을 덮을 때까지 커짐 `dur-m` · `ease-in` → `transition`, 다음 바탕이 그 색 | 기존 · 2026-10-25 조립 |
| `word-swap` | 글자 한 단어 → brand-icon (video.md `icon-inline`) | 단어 `exit` → 같은 자리 brand-icon `enter` + `scale-from` → 1 | 기존 · 2026-10-25 (`word-close` 합침) |
| `flip-wave` | 같은 부품 격자 (brand-icon → badge · asset-card · skill-card) | 부품마다 `flip-turn` × 3 · `dur-m` · `ease-out`, 90°에서 앞면이 다음 상태로 · 왼쪽 위부터 대각선 `stagger` | 요청 2026-10-25 (1password 비트 2) |
| `icon-spin` | brand-icon | `spin` `dur-m` · `ease-out` + brand-icon 모양 고리 `color-primary` × 1 → `cut-scale` · 투명도 0.45 → 0 (`video-glow`) `dur-l` · `ease-out`. 블러 없음 | 요청 2026-10-25 (1password 비트 4 · 10) |
| `phone-ring` | 폰 `ring-count`대 (01–05, video.md 4장 크기) + 가운데 글자 한 줄 | 상하좌우 가장자리에 반쯤 잘려 놓임, 각 폰 `crane-angle`을 가운데 쪽으로. 들어옴 `dur-xl` · `ease-out` · `stagger` → 머묾 rotateZ 0 → `tilt` · `ease-linear` → 나감 `phone-tip`. 0장 "폰 한 장면" 대신이라 비트 시트에 있을 때만 · `대신:` 기록 | 요청 2026-10-25 (langease 비트 6–7) |
| `bar-stretch` | button-submit → mission-card 진행 바 | 글자 `exit` → 폭 · 높이가 진행 바 치수(design.md 4장 × `video-scale`)로 오른쪽으로 늘어남 `dur-l` · `ease-inout` · `cam-pan`이 끝을 따라감 → `match-cut`, `mission-in` `emphasis`로 이어짐 | 요청 2026-10-25 (langease 비트 8) |
| `focus-lift` | skill-card · asset-card 하나 | 대상 위 `dist-m` `dur-l` · `ease-out` + 주변 전부 `exit` (길이 `dur-l`). 블러 · 크기 변화 없음 | 요청 2026-10-25 (langease 비트 13) |
| `card-flip-scatter` | skill-card · asset-card 한 장 → `ring-count`장 | `flip-turn` `dur-m` · `ease-in` → 끝에 4장으로 나뉘어 네 귀퉁이(반쯤 잘림), 각 `crane-angle` 가운데 쪽 · `dur-l` · `ease-out`. 머무는 동안 `cam-drift` 가능 (비트 시트에 있을 때) | 요청 2026-10-25 (langease 비트 13–14) |
| `icon-flight` | brand-icon (통째) | 오른쪽 밖 → 글자 줄 끝 · 위로 볼록 (높이 `dist-l`) `dur-l` · `ease-out` · 꼬리 없음. 글자가 붙는 동안 줄 끝에 `video-gap` 띄워 따라감 → 글자 `exit` → `match-cut`으로 logo 심볼 자리 | 요청 2026-10-25 (langease 비트 18–19) |

- 경계는 `match-cut` 먼저, 이어지는 요소가 없으면 `cut-in-motion`. button-submit에서 나갈 땐 `shape-morph` 가능. 주인공은 같은 자리에. (레퍼런스 L 아이콘) [기본 스타일]
- 강조 색 글자는 움직임이 아니다 (색은 video.md에서만). `phone-rise-tilt`와 `screen-reveal`은 한 장면에 같이 쓰지 않는다. [고정]

### 새 후보 (승인 전엔 쓰지 않음 · 쓰려면 먼저 묻는다)
| 후보 | 무엇 | 왜 후보인가 |
|---|---|---|
| `orbit-collapse` | 서비스 아이콘 고리가 `dur-l` · `ease-in`으로 가운데 로고에 빨려 듦 | 레퍼런스 "連携。" · 아이콘 부품 없음 |
| `line-draw` | 아이콘 사이 연결선이 `dur-2xl`로 그려짐 | 레퍼런스 "連携。" · 연결선 부품 없음 |
| `modal-dismiss` | 창이 줄며 빠지고 위에 알림이 내려옴 | 레퍼런스 "登録する" · 모달 부품 없음 |
| `whip-blur` | 전환 중 흐림 | 흐림 값이 docs에 없음 |
| `grid-collapse` | 격자가 한 줄로 모여 입력창, 점이 하나씩 채워짐 | 승인 2026-10-25 · 입력창 · 점 부품 대기 (1password 비트 3) |
| `orbit-in` | brand-icon 둘레에 서비스 로고가 `scale-from`으로 붙음 | 승인 2026-10-25 · 로고 부품 대기 (다른 회사 로고 금지) · 6개 넘는 stagger |
| `confetti` | 완료 순간 색종이 | 승인 2026-10-25 · 색종이 부품 대기 (langease 비트 10) |
| `cursor-tap` | 손 커서가 가리키고 누름 | 승인 2026-10-25 · 커서 부품 대기. 그동안 `button-press` (langease 비트 12 · 15–17) |

## 4. 머무는 시간 (움직임이 **끝난 뒤** 멈춰 있는 시간 · 차분한 성격이라 바탕보다 길게)

| 토큰 | 프레임 | ms | 쓰는 곳 | 출처 |
|---|---|---|---|---|
| `hold-s` | 18 | 600 | 배지 · 숫자 하나 · `dark-cut` 첫 제목 | 차분한 (12→18) · 레퍼런스 "翌朝。" |
| `hold-m` | 30 | 1000 | 제목 한 줄 · 카드 하나 | 차분한 (21→30) · 레퍼런스 40초판 약 1000 |
| `hold-l` | 54 | 1800 | 화면 한 장 전체 (목록 포함) | 차분한 (36→54) · 레퍼런스 40초판 약 2000 |
| `hold-end` | 60 | 2000 | 엔드 카드 (`end-reveal` · `logo-reveal`) | 차분한 (45→60) · 레퍼런스 40초판 약 3000 |

- 읽을 글자가 15자를 넘으면 한 단계 위 hold. 올려도 `hold-l`까지 (`hold-end`는 엔드 전용). (기존) [고정]
- 다음 움직임은 앞 움직임의 hold가 끝난 뒤. `stagger` · `word-strike`는 예외. (레퍼런스) [기본 스타일]
- 같이 들어오는 덩어리(제목 + 버튼 등)는 `stagger`로 들어오고 hold는 한 번. (기존) [고정]
- 영상 마지막 hold는 멈춰도 된다. hold 동안 카메라 정지, 경계는 `scene-out`. (레퍼런스) [기본 스타일]

## 5. 카메라 (폰 프레임 · 부품을 찍는 가상 카메라 · 요소 움직임과 따로)

| 토큰 | 구성 | 쓰는 곳 | 출처 |
|---|---|---|---|
| `cam-hold` | × 1 정지 | 기본 | 레퍼런스 제목 장면 |
| `cam-follow` | `cam-in`에서 가로 이동 · 글자 속도 그대로 · `ease-linear` | `text-type` 동안 커서 쪽 | 레퍼런스 타이핑 |
| `cam-pull` | `cam-in` → × 1 · 대상 → 전체 가운데 · `dur-l` · `ease-inout` | `screen-reveal` | 레퍼런스 입력창 줌아웃 |
| `cam-crane` | `crane-angle` · × 1 · 아래 `dist-l` → 각도 0 · 위치 0 · `cam-in` (같은 시간 · 같은 곡선) · `dur-2xl` · `ease-inout`. 뒤 `cam-pull` 생략 가능 | 폰이 처음 나오는 장면 | 요청 2026-10-24 (snapcn `showcase`) |
| `cam-focus` | × 1 → `cam-in` · 전체 → 대상 · `dur-l` · `ease-inout` | 부품 하나를 가까이 | 기존 · 2026-10-25 조립 |
| `cam-release` | `cut-scale` → × 1 · `dur-2xl` · `ease-out`, 요소 `enter`가 같이 | 장면을 천천히 열 때 (비트 시트에 있을 때만) | 기존 · 2026-10-25 조립 |
| `cam-push` | × 1 → `cut-scale` · `dur-2xl` · `ease-in` → 멈추지 않고 `transition` | 밀어붙이며 끝낼 때 (비트 시트에 있을 때만) | 기존 · 2026-10-25 조립 |
| `cam-pan` | × 1로 다음 대상까지 이동 · `dur-l` · `ease-inout` | 한 화면 안에서 대상 옮기기 | 기존 · 2026-10-25 조립 |
| `cam-drift` | × 1로 가로 `dist-m` · hold 길이 · `ease-linear` | hold 중 살짝 (비트 시트에 있을 때만) | 기존 · 2026-10-25 조립 |
| `cam-dolly-out` | × 1 → `dolly-scale` · 가운데 기준 · hold 길이 · `ease-linear` | 엔드 앞 전체 한 번 (영상에 1곳 · 비트 시트에 있을 때만) | 요청 2026-10-25 (1password 비트 9) |

- 확대는 `cam-in`(× 2.4)까지, 축소는 `dolly-scale`(× 0.5)까지. [고정]
- 한 장면에 카메라 한 묶음 (`cam-follow` → `cam-pull`, `cam-crane` → `cam-pull`, 또는 나머지 중 하나). (레퍼런스) [기본 스타일]
- 카메라가 움직이는 동안 `enter` · `emphasis`를 시작하지 않는다 (예외: `cam-follow` + `text-type`). (레퍼런스) [기본 스타일]
- `cam-drift` · `cam-dolly-out` · `cam-release` · `cam-push`는 비트 시트에 있을 때만. 그때 4장 · 5장의 해당 [기본 스타일]을 대신하고 decisions.md에 남긴다. [고정]
