-- ============================================================
-- NEWSLETTER FIX: Reset table & policies from scratch
-- Run this in Supabase Dashboard > SQL Editor
-- ============================================================

-- Step 1: Drop existing table completely (removes all old policies)
DROP TABLE IF EXISTS newsletter_subscribers CASCADE;

-- Step 2: Recreate table
CREATE TABLE newsletter_subscribers (
  id            UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  email         TEXT        NOT NULL UNIQUE,
  subscribed_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  source        TEXT        DEFAULT 'journal' NOT NULL,
  is_active     BOOLEAN     DEFAULT true NOT NULL
);

-- Step 3: Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Step 4: Drop ANY leftover policies (safety)
DROP POLICY IF EXISTS "Allow public insert" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Service role reads all" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Service role updates" ON newsletter_subscribers;
DROP POLICY IF EXISTS "anon_insert" ON newsletter_subscribers;

-- Step 5: Single clean INSERT policy for anon role
CREATE POLICY "anon_insert"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Step 6: Verify
SELECT schemaname, tablename, policyname, roles, cmd
FROM pg_policies
WHERE tablename = 'newsletter_subscribers';
