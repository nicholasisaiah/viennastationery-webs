-- ============================================================
-- Seed article_stats for 11 new Vienna articles
-- Run in Supabase Dashboard > SQL Editor
-- ============================================================

INSERT INTO article_stats (slug, likes, comment_count)
VALUES
  ('macbook-pro-dan-notebook-analog',       0, 0),
  ('fakta-mengejutkan-gta-6',               0, 0),
  ('kiamat-digital-mulai-menulis-di-kertas',0, 0),
  ('ihsg-merah-jangan-panik-jurnal-investasi', 0, 0),
  ('chatgpt-hasil-ketikan-kurang-bernyawa', 0, 0),
  ('cara-membuat-tulisan-ai-lebih-natural', 0, 0),
  ('saldo-mbanking-tipis-tips-keuangan',    0, 0),
  ('bermain-roblox-butuh-strategi',         0, 0),
  ('mengapa-buku-fisik-istimewa',           0, 0),
  ('selesai-baca-laut-bercerita',           0, 0),
  ('kreator-konten-tiktok-fyp',             0, 0)
ON CONFLICT (slug) DO NOTHING;
