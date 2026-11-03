-- ============================================================
-- Newsletter Subscribers Table for Vienna Stationery
-- Run this in Supabase Dashboard > SQL Editor
-- ============================================================

-- 1. Create the newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  source TEXT DEFAULT 'journal' NOT NULL,       -- where the user subscribed from
  is_active BOOLEAN DEFAULT true NOT NULL       -- for unsubscribe support
);

-- 2. Unique constraint on email (prevents duplicate subscriptions)
CREATE UNIQUE INDEX IF NOT EXISTS idx_newsletter_email_unique
  ON newsletter_subscribers (LOWER(email));

-- 3. Index for querying active subscribers
CREATE INDEX IF NOT EXISTS idx_newsletter_active
  ON newsletter_subscribers (is_active)
  WHERE is_active = true;

-- 4. Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 5. Policy: Allow anyone to INSERT (subscribe) — anon key
CREATE POLICY "Anyone can subscribe"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 6. Policy: Only authenticated/service role can SELECT (read subscribers)
--    This prevents random users from listing all emails
CREATE POLICY "Service role can read subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- 7. Policy: Only service role can UPDATE (for unsubscribe)
CREATE POLICY "Service role can update subscribers"
  ON newsletter_subscribers
  FOR UPDATE
  TO authenticated
  USING (true);

