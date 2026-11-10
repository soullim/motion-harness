#!/usr/bin/env bash
# src/parts · src/assets 를 고치지 않고 그대로 복사해 온다 (원본은 사람만 고침 · CLAUDE.md 2장).
# parts 안 경로 "../assets/..." 가 그대로 맞도록 video/parts/ · video/assets/ 에 둔다.
set -euo pipefail
HERE="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$HERE/../../../src"
# assets/vendor (gsap 사본)는 src에서 오지 않으므로 남긴다
rm -rf "$HERE/parts"
find "$HERE/assets" -mindepth 1 -maxdepth 1 ! -name vendor -exec rm -rf {} + 2>/dev/null || true
mkdir -p "$HERE/parts" "$HERE/assets"
cp "$SRC"/parts/*.html "$HERE/parts/"
cp -r "$SRC"/assets/* "$HERE/assets/"
echo "synced: $(ls "$HERE/parts" | wc -l) parts, $(ls "$HERE/assets" | wc -l) assets"
