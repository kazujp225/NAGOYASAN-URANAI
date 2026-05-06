// =============================================================
// 星結びの占い - 共通スクリプト（プロトタイプ用）
// =============================================================

// テーマchipのトグル
document.addEventListener('click', (e) => {
  const chip = e.target.closest('.theme-chip');
  if (!chip) return;
  const group = chip.closest('.theme-row');
  if (!group) return;
  group.querySelectorAll('.theme-chip').forEach(el => el.classList.remove('active'));
  chip.classList.add('active');
});

// アップロードゾーンのファイル選択委譲
document.addEventListener('click', (e) => {
  const zone = e.target.closest('.upload-zone');
  if (!zone) return;
  const input = zone.querySelector('input[type="file"]');
  if (input) input.click();
});

document.addEventListener('change', (e) => {
  const input = e.target;
  if (input.matches('.upload-zone input[type="file"]') && input.files && input.files[0]) {
    const zone = input.closest('.upload-zone');
    const label = zone.querySelector('.upload-text');
    if (label) label.textContent = `選択中: ${input.files[0].name}`;
  }
});

// キャラクター閉じる
document.addEventListener('click', (e) => {
  if (e.target.closest('.character .close')) {
    const c = e.target.closest('.character');
    if (c) c.style.display = 'none';
  }
});

// フォーム送信時、サンプルとして result.html へ遷移（MVP配線想定の演出）
document.addEventListener('submit', (e) => {
  const form = e.target;
  if (form.dataset.demo === 'fortune') {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = '✦ 星々が応えています…';
    }
    setTimeout(() => {
      window.location.href = 'result.html?type=' + (form.dataset.type || 'general');
    }, 1400);
  }
});

// 共有ボタン（クリップボードコピー）
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-share]');
  if (!btn) return;
  const text = btn.dataset.share;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.textContent;
      btn.textContent = '✓ コピーしました';
      setTimeout(() => btn.textContent = orig, 1600);
    });
  }
});
