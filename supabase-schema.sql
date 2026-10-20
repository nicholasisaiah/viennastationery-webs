-- =====================================================
-- VIENNA STATIONERY — SUPABASE SCHEMA
-- Jalankan di: Supabase Dashboard → SQL Editor → New query
-- =====================================================

-- 1. Article stats (likes & comment count per artikel)
CREATE TABLE IF NOT EXISTS article_stats (
  slug TEXT PRIMARY KEY,
  likes INT NOT NULL DEFAULT 0,
  comment_count INT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Comments table
CREATE TABLE IF NOT EXISTS comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_slug TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Anonymous Reader',
  content TEXT NOT NULL,
  likes INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT content_length CHECK (char_length(content) BETWEEN 1 AND 1000),
  CONSTRAINT author_length CHECK (char_length(author) <= 60)
);

-- Index untuk query komentar per artikel lebih cepat
CREATE INDEX IF NOT EXISTS comments_slug_created_idx 
  ON comments(article_slug, created_at DESC);

-- =====================================================
-- ROW LEVEL SECURITY
-- =====================================================
ALTER TABLE article_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Article stats: siapa pun bisa baca & update (likes)
CREATE POLICY "public_read_article_stats"
  ON article_stats FOR SELECT USING (true);

CREATE POLICY "public_insert_article_stats"
  ON article_stats FOR INSERT WITH CHECK (true);

CREATE POLICY "public_update_article_stats"
  ON article_stats FOR UPDATE USING (true);

-- Comments: siapa pun bisa baca & tulis komentar
CREATE POLICY "public_read_comments"
  ON comments FOR SELECT USING (true);

CREATE POLICY "public_insert_comments"
  ON comments FOR INSERT WITH CHECK (
    char_length(content) BETWEEN 1 AND 1000 AND
    char_length(author) <= 60
  );

CREATE POLICY "public_update_comment_likes"
  ON comments FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- FUNCTIONS: atomic increment (anti race condition)
-- =====================================================

-- Fungsi increment likes artikel
CREATE OR REPLACE FUNCTION increment_article_likes(p_slug TEXT, p_amount INT)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO article_stats (slug, likes)
    VALUES (p_slug, GREATEST(0, p_amount))
  ON CONFLICT (slug)
  DO UPDATE SET
    likes = GREATEST(0, article_stats.likes + p_amount),
    updated_at = NOW();
END;
$$;

-- Fungsi increment likes komentar
CREATE OR REPLACE FUNCTION increment_comment_likes(p_id UUID, p_amount INT)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE comments
    SET likes = GREATEST(0, likes + p_amount)
  WHERE id = p_id;
END;
$$;

-- Trigger: otomatis update comment_count di article_stats
CREATE OR REPLACE FUNCTION handle_new_comment()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO article_stats (slug, comment_count)
    VALUES (NEW.article_slug, 1)
  ON CONFLICT (slug)
  DO UPDATE SET
    comment_count = article_stats.comment_count + 1,
    updated_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_comment_insert ON comments;
CREATE TRIGGER on_comment_insert
  AFTER INSERT ON comments
  FOR EACH ROW EXECUTE FUNCTION handle_new_comment();

-- =====================================================
-- REALTIME: aktifkan untuk comments & article_stats
-- =====================================================
ALTER PUBLICATION supabase_realtime ADD TABLE comments;
ALTER PUBLICATION supabase_realtime ADD TABLE article_stats;
