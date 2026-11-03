-- ============================================================
-- Seed article_stats for ALL 23 Vienna articles
-- Run in Supabase Dashboard > SQL Editor
-- Safe to re-run (ON CONFLICT DO NOTHING)
-- ============================================================

INSERT INTO article_stats (slug, likes, comment_count)
VALUES
  -- === Original 12 articles (articles 1-12) ===
  ('how-to-make-your-study-desk-feel-more-like-you',     0, 0),
  ('the-art-of-the-intentional-pause',                   0, 0),
  ('functional-beauty-minimalist-planning-101',          0, 0),
  ('5-prompts-to-clear-your-mind-tonight',               0, 0),
  ('palette-swatching-tips',                             0, 0),
  ('a-cozy-morning-routine-for-focus',                   0, 0),
  ('ring-binder-customization-guide',                    0, 0),
  ('the-quiet-joy-of-morning-pages',                     0, 0),
  ('curating-your-workspace-color-palette',              0, 0),
  ('paper-weight-and-ink-bleed-guide',                   0, 0),
  ('weekly-habit-tracking-that-actually-works',          0, 0),
  ('creating-a-cozy-reading-nook',                       0, 0),

  -- === 11 New Indonesian marketing articles (articles 13-23) ===
  ('macbook-pro-dan-notebook-analog',                    0, 0),
  ('fakta-mengejutkan-gta-6',                            0, 0),
  ('kiamat-digital-mulai-menulis-di-kertas',             0, 0),
  ('ihsg-merah-jangan-panik-jurnal-investasi',           0, 0),
  ('chatgpt-hasil-ketikan-kurang-bernyawa',              0, 0),
  ('cara-membuat-tulisan-ai-lebih-natural',              0, 0),
  ('saldo-mbanking-tipis-tips-keuangan',                 0, 0),
  ('bermain-roblox-butuh-strategi',                      0, 0),
  ('mengapa-buku-fisik-istimewa',                        0, 0),
  ('selesai-baca-laut-bercerita',                        0, 0),
  ('kreator-konten-tiktok-fyp',                         0, 0)
ON CONFLICT (slug) DO NOTHING;
