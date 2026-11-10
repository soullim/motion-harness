# beat-sheet 3안 요약 — claude-m1  (BRIEF 15초 = 450f · 30fps · 레퍼런스 없음)

계산 약속 (motion.md 1·2·4장 토큰 값으로 더함)
- `stagger` n개 = (n−1)×`dur-m` 9 + `enter` 9. 글자 사이는 `dur-xs` 3이고 7번째부터는 같이 들어옴.
- 경계: `cut-in-motion` = `scene-out`(`dur-s` 6)의 절반 = 3f (앞 장면에 넣어 셈). `transition` · `match-cut` = 0f. `shape-morph` 24f = 글자 `exit` 6 + 원 9 + 점 9 (앞 장면에 넣어 셈).
- hold: 읽을 글자(띄어쓰기 빼고)가 15자를 넘으면 한 단계 위 (motion.md 4장).
- 자주 쓰는 덩어리: 엔드 `end-reveal` = `logo-reveal`(logotype 글자 6개 상한 → 18+9 = 27) + `dur-l` 15 + 슬로건 `enter` 15 + `hold-end` 60 = **117** · `skill-list`/`asset-list` 3장 = 27 + `hold-l` 54 + 3 = **84** · stat-card = `part-in` 9 + `count-up` 36 + `hold-s` 18 + 3 = **66**

---

## A안 — 앱 화면에서 출발하는 정공법 (01→05 순서 그대로)
- 콘셉트: 홈 화면을 한 번 보여 주고, 스킬 → 미션 완료 → 수익을 부품으로 차례로 따라간다.
- 장면 6개 · **504f (16.8초)** → **길이 조정 필요: 약 +54f** (BRIEF를 504f로 늘리거나, 스킬 장면을 빼면 420f)
- 흐름: 글자 `headline-in` 2줄 → 폰 `01-home` `screen-reveal`(01 mission에서 `cam-pull`) → skill-card-1·2·3 `skill-list` → mission-card `mission-in` → `mission-done`(→ badge-approved `badge-pulse`) → stat-card `part-in`+`count-up` → 엔드 `end-reveal` (경계 모두 `cut-in-motion`)
- 반영 R: 해당 없음 (ref-notes R 0개)
- 새 후보: 0개

글자 후보
- 헤드라인 ① "하나씩 배운 스킬이 / **내 자산으로**" (13자) · ② "오늘의 미션이 / **내일의 실력으로**" (13자)
- 엔드 슬로건: "배우고, 쓰고, 내 자산으로"

길이 계산
- 글자 18(2줄 `stagger`) + `hold-m` 30 + 3 = 51
- 폰 01 `cam-pull` 15 + 주변 3덩어리(제목·검색 / 칩 / 스킬·탭바) 27 + `hold-l` 54 + 3 = 99
- 스킬 84 · 미션 `mission-in` 18 + `hold-m` 30 + `mission-done` 18 + `hold-s` 18 + 3 = 87 · 수익 66 · 엔드 117
- 51 + 99 + 84 + 87 + 66 + 117 = **504f**

참고: `mission-done`은 mission-card 장면 안에 badge가 같이 나오는 패턴이라, 0장 "부품 장면엔 그 부품만"의 예외로 본다 (패턴 정의대로).

---

## B안 — 버튼이 다음 장면을 여는 릴레이 (폰 없음)
- 콘셉트: 스킬을 고르고 "제출하기"를 누르면 버튼이 점으로 줄어 승인 배지로 피어나고, 그대로 수익까지 이어진다.
- 장면 6개 · **450f (15.0초)** · 맞음
- 흐름: 글자 `headline-in` 2줄 → skill-card-1·2·3 `skill-list` → button-submit(제출하기) `part-in` → `button-press` → `shape-morph` → badge-approved `badge-pulse` → stat-card `part-in`+`count-up` → 엔드 `end-reveal`
- 반영 R: 해당 없음 (ref-notes R 0개)
- 새 후보: 0개

글자 후보
- 헤드라인 ① "오늘 배운 AI 스킬이 / **나의 자산이 되기까지**" (18자) · ② "회의록 정리 스킬 하나가 / **이번 달 수익이 되기까지**" (20자)
- 엔드 슬로건: "배운 만큼, 자산이 되는 곳"
- 주의: 이 안의 길이는 헤드라인이 15자를 넘어 `hold-l`을 쓴다는 전제. 15자 이하로 바꾸면 −24f (426f)가 된다.

길이 계산
- 글자 18 + `hold-l` 54 + 3 = 75
- 스킬 84
- 버튼 `part-in` 9 + `button-press`(앞 `hold-m` 30 + 누름 6 + 돌아옴 9) + `shape-morph` 24 = 78 (button-press 끝의 `transition` 자리를 `shape-morph`로)
- 배지 `badge-pulse` 9(점에서 `scale-from` → 1) + `hold-s` 18 + 3 = 30
- 수익 66 · 엔드 117
- 75 + 84 + 78 + 30 + 66 + 117 = **450f**

빠진 것: mission-card(01·03)는 나오지 않는다. 01은 skill-card-1, 03은 "제출하기" 버튼으로만 대신한다. 앱 화면(폰)도 나오지 않는다.

---

## C안 — 제출 한 번에서 자산까지 (후반 집중, 폰은 03 한 장면)
- 콘셉트: 미션 화면에서 "제출하기"를 누르는 순간부터 승인 → 수익 → 내 자산 목록까지, 결과 쪽 흐름을 천천히 보여 준다.
- 장면 6개 · **450f (15.0초)** · 맞음
- 흐름: 글자 `headline-in` 1줄 → 폰 `03-mission` `screen-reveal`(03 mission에서 `cam-pull`) → `button-press`(제출하기 겹침, video.md 4장 좌표) → badge-approved `badge-pulse` → stat-card `part-in`+`count-up` → asset-card ×3 `asset-list` → 엔드 `end-reveal`
- 반영 R: 해당 없음 (ref-notes R 0개)
- 새 후보: 0개

글자 후보
- 헤드라인 ① "제출 한 번이면, **자산이 돼요**" (11자) · ② "결과물이 곧 **나의 자산**" (9자)
- 엔드 슬로건: "미션 완료, 그다음은 수익"

길이 계산
- 글자 9 + `hold-m` 30 + 3 = 42
- 폰 03 `cam-pull` 15 + 주변 3덩어리(설명·스킬 줄 / 결과물 제출 칸 / 제출하기) 27 + `hold-l` 54 + 누름 6 + 돌아옴 9 → `transition` = 111 (`button-press` 앞 `hold-m`은 화면의 `hold-l`이 맡음, "hold는 한 번" 4장)
- 배지 9 + `hold-s` 18 + 3 = 30 · 수익 66 · 자산 목록 84 · 엔드 117
- 42 + 111 + 30 + 66 + 84 + 117 = **450f**

빠진 것: 01 · 02(스킬 목록)는 03 화면 속 미션 카드 · 스킬 줄로만 보인다. BRIEF "01–05 흐름 전체"보다 좁다.

---

## 추천: B안
450f에 딱 맞고(빈 hold 없이), 스킬 → 제출 → 승인 → 수익으로 02–05를 버튼 하나의 변신으로 끊김 없이 이어 BRIEF 흐름을 가장 많이 담는다.
(앱 화면이 꼭 한 번 보여야 한다면 A안 + BRIEF 길이 504f로 조정을 고른다.)
