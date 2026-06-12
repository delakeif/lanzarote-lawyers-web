-- ============================================================
-- IZQUIERDO Y DE LA CUEVA — Supabase Database Schema
-- ============================================================
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- 1. CONSULTATIONS TABLE
-- Stores initial consultation requests from the contact form
CREATE TABLE IF NOT EXISTS consultations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),

  -- Client info
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  preferred_language TEXT DEFAULT 'es' CHECK (preferred_language IN ('es', 'en', 'de')),

  -- Consultation details
  practice_area TEXT NOT NULL,
  description TEXT NOT NULL,
  urgency TEXT DEFAULT 'normal' CHECK (urgency IN ('normal', 'urgent')),
  files_urls TEXT[], -- Array of file URLs if uploaded

  -- Meeting preferences
  meeting_type TEXT DEFAULT 'office' CHECK (meeting_type IN ('office', 'video', 'phone')),
  preferred_office TEXT DEFAULT 'arrecife' CHECK (preferred_office IN ('arrecife', 'playa_blanca')),

  -- Workflow status
  status TEXT DEFAULT 'pending' CHECK (status IN (
    'pending',      -- Just submitted
    'reviewing',    -- Being reviewed by secretary/lawyer
    'accepted',     -- Accepted, awaiting schedule
    'rejected',     -- Rejected (with reason)
    'scheduled',    -- Meeting time proposed
    'confirmed',    -- Client confirmed meeting
    'paid',         -- Client paid consultation fee
    'completed',    -- Meeting completed
    'cancelled'     -- Cancelled by either party
  )),

  -- Assignment
  assigned_lawyer TEXT,
  rejection_reason TEXT,

  -- Scheduling
  proposed_datetime TIMESTAMPTZ,
  proposed_datetime_alt TIMESTAMPTZ, -- Alternative time
  confirmed_datetime TIMESTAMPTZ,
  meeting_link TEXT,                  -- Google Meet link if video
  calendar_event_id TEXT,            -- Google Calendar event ID

  -- Payment
  payment_method TEXT CHECK (payment_method IN ('stripe', 'bizum', 'transfer')),
  payment_amount DECIMAL(10,2),
  payment_status TEXT DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'pending', 'paid', 'refunded')),
  stripe_payment_id TEXT,
  transfer_proof_url TEXT,           -- URL of uploaded transfer receipt

  -- Notifications
  reminder_sent BOOLEAN DEFAULT false,
  last_notification_at TIMESTAMPTZ
);

-- 2. TEAM MEMBERS TABLE
CREATE TABLE IF NOT EXISTS team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,                 -- 'Abogada', 'Abogado', 'Administrativa', etc.
  role_en TEXT,
  role_de TEXT,
  email TEXT,
  photo_url TEXT,
  bio_es TEXT,
  bio_en TEXT,
  bio_de TEXT,
  specialties TEXT[],
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. BLOG POSTS TABLE (supplementary to Decap CMS markdown files)
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title_es TEXT NOT NULL,
  title_en TEXT,
  title_de TEXT,
  excerpt_es TEXT,
  excerpt_en TEXT,
  excerpt_de TEXT,
  content_es TEXT,
  content_en TEXT,
  content_de TEXT,
  featured_image TEXT,
  author TEXT,
  practice_area TEXT,
  published_at TIMESTAMPTZ,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. INDEXES for performance
CREATE INDEX IF NOT EXISTS idx_consultations_status ON consultations(status);
CREATE INDEX IF NOT EXISTS idx_consultations_created ON consultations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultations_lawyer ON consultations(assigned_lawyer);
CREATE INDEX IF NOT EXISTS idx_blog_published ON blog_posts(is_published, published_at DESC);

-- 5. UPDATED_AT TRIGGER
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER update_consultations_modtime
  BEFORE UPDATE ON consultations
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE OR REPLACE TRIGGER update_blog_modtime
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- 6. ROW LEVEL SECURITY
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for consultation form
CREATE POLICY "Allow anonymous consultation inserts"
  ON consultations FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (firm staff) full access
CREATE POLICY "Allow authenticated full access to consultations"
  ON consultations FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Public read for team members
CREATE POLICY "Allow public read on team members"
  ON team_members FOR SELECT
  TO anon
  USING (is_active = true);

-- Public read for published blog posts
CREATE POLICY "Allow public read on published posts"
  ON blog_posts FOR SELECT
  TO anon
  USING (is_published = true);

-- Authenticated full access
CREATE POLICY "Authenticated full access team"
  ON team_members FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated full access blog"
  ON blog_posts FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- 7. SEED TEAM DATA
INSERT INTO team_members (name, role, role_en, role_de, sort_order) VALUES
  ('Eileen Izquierdo', 'Abogada', 'Lawyer', 'Rechtsanwältin', 1),
  ('Jorge de la Cueva', 'Abogado', 'Lawyer', 'Rechtsanwalt', 2),
  ('Mario Izquierdo', 'Abogado', 'Lawyer', 'Rechtsanwalt', 3),
  ('Pablo de la Cueva', 'Abogado colaborador', 'Associate Lawyer', 'Mitarbeitender Anwalt', 4),
  ('Clara Castanedo', 'Abogada colaboradora', 'Associate Lawyer', 'Mitarbeitende Anwältin', 5),
  ('Carola Etter', 'Administrativa', 'Administrator', 'Verwaltungsmitarbeiterin', 6),
  ('Ginny Turner', 'Administrativa', 'Administrator', 'Verwaltungsmitarbeiterin', 7),
  ('Jaqueline Pautz', 'Contable administrativa', 'Administrative Accountant', 'Verwaltungsbuchhalterin', 8)
ON CONFLICT DO NOTHING;
