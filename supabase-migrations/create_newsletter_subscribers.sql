-- ============================================================
-- Newsletter Subscribers Table for Vienna Stationery
-- Run this in Supabase Dashboard > SQL Editor
-- ============================================================

-- 1. Drop old table if exists (re-run safe)
DROP TABLE IF EXISTS newsletter_subscribers;

-- 2. Create the newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  email       TEXT        NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  source      TEXT        DEFAULT 'journal' NOT NULL,
  is_active   BOOLEAN     DEFAULT true NOT NULL,
  -- Enforce uniqueness on lowercase email at column level
  CONSTRAINT uq_newsletter_email UNIQUE (email)
);

-- 3. Index for active subscribers
CREATE INDEX idx_newsletter_active
  ON newsletter_subscribers (is_active)
  WHERE is_active = true;

-- 4. Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 5. Allow INSERT for everyone (anon + authenticated)
--    This is needed because the API route uses the anon key
CREATE POLICY "Allow public insert"
  ON newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

-- 6. Only service_role (server-side) can SELECT all rows
CREATE POLICY "Service role reads all"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- 7. Service role can update (for unsubscribe flows)
CREATE POLICY "Service role updates"
  ON newsletter_subscribers
  FOR UPDATE
  TO authenticated
  USING (true);
