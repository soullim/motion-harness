# 이어하기 안내 (2026-11-06 16:30 기준)

회사 컴퓨터에서 하던 허들링 모션 하네스를 다른 컴퓨터에서 이어 가기 위한 메모.

## 1. 집 컴퓨터에서 여는 법

1. 대화에 올린 `huddling-motion-start.zip`을 내려받아 원하는 곳에 푼다 (예: `Documents\Claude\Projects\huddling-motion-start`).
   - 압축본에는 `.claude/agents` · `.claude/skills/make-video`가 이미 제자리에 들어 있다 (회사 컴퓨터의 `_move-to-.claude` 정리 완료본).
2. Claude 데스크톱 앱에서 이 폴더를 연결하거나, 그 폴더에서 Claude Code를 연다.
   - Node.js가 있으면 HyperFrames 스킬이 바로 쓰인다. 렌더할 때 필요한 도구는 스킬 `hyperframes-cli`가 안내한다.
3. Claude에게 "HANDOFF.md 읽고 이어서 하자"라고 말한다.

## 2. 지금까지 만든 것

| 파일 | 상태 |
|---|---|
| `docs/design.md` | 원래 있던 것 (Figma에서 읽은 색 · 폰트 · 간격 · 부품 목록) |
| `docs/motion.md` | 완료 · 성격 **차분한** · 2026-10-25 motion.md 바탕으로 시간 · 곡선 · hold를 차분하게 조정 · 0장 유지 · 149줄 |
| `docs/video.md` | 완료 · 배경 밝은 · 헤드라인 단정하게 · 엔드 카드 밝은 · 1920×1080 · 30fps · 글자 ×2.8 |
| `CLAUDE.md` | 하네스 규칙 (4장 고정 · 참조 · 금지 · 6장 게이트) |
| `.claude/agents/` | art-director · director · builder · critic |
| `.claude/skills/make-video/` | "모션 만들자" 진행 순서 |
| `.claude/skills/hyperframes*` 외 | HeyGen HyperFrames 스킬 9개 (`skills-lock.json`에 기록) |
| `out/claude-m1/` | 첫 영상 작업 폴더 · **비어 있음** |

피그마 (사본 파일 `OnsZRlVgxh37EcZ7bl6kIA`): 변수 컬렉션 **Motion Primitives**(18개) · **Motion Semantic**(8개) 등록 완료. 모드 `Value` 하나.
- 만들지 않은 것: `transition`(0ms 컷), `enter`의 거리(`mask-rise`는 비율), `dim` · `tilt` · `crane-angle` · `flip-turn` · `spin` · `ring-count` · `type-step`.

## 3. 다음에 할 일 (순서대로)

1. **첫 영상 시작** — "모션 만들자" → `out/claude-m1`에서 BRIEF 문답부터. (회사에서 BRIEF 첫 질문 직전에 멈춤)
   - BRIEF 기본값: 무엇을 = screens 01–05 흐름 전체 · 15초 · 레퍼런스 없음.
2. **스냅보드 승인 뒤** — 장면마다 프레임 1개씩 피그마 사본 파일로 옮기고, 움직임은 Motion Semantic 변수에 연결.
3. **확인 필요한 숫자** (video.md에 새로 정함, 첫 영상 전에 확정 권장): 안전 여백 96px · 요소 간격 48px · 폰 화면 ×1.1 · 폰 테 12px · 폰 모서리 52/64px · 헤드라인 한 줄 폭 1400px · 아이콘 옆 간격 글자 ×0.25.
4. **열린 질문**
   - motion.md `transition`이 0ms 컷 [고정]인데 차분한 성격이면 `screen-dissolve`를 기본으로 바꿀지.
   - 레퍼런스 영상 `original.mp4`가 있으면 motion.md 출처 칸에 `mm:ss` 시점을 채울지.
5. **GitHub** — 올릴 곳은 `soullim/motion-harness` (지금 비어 있음). Claude에서 올리려면 claude.ai 설정 → 커넥터에서 GitHub을 다시 연결하거나 레포에 Claude GitHub 앱을 설치해야 한다. 그 전까지는 이 압축본이 최신본.

## 4. 참고

- 원본 레포: `figmatutor-info/huddling-motion-start` (읽기 전용으로 받은 출발점). 압축본에는 `.git`이 없다 — `soullim/motion-harness`에 올릴 때 새로 시작하면 된다.
- 회사 컴퓨터 폴더(`Documents\Claude\Projects\huddling-motion-start`)는 `.claude` 정리 전 상태 (`_move-to-.claude` 남아 있음).
