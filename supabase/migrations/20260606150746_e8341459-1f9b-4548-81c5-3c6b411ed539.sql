
CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (length(name) BETWEEN 1 AND 200),
  email text NOT NULL CHECK (length(email) BETWEEN 3 AND 320),
  subject text NOT NULL CHECK (length(subject) BETWEEN 1 AND 300),
  message text NOT NULL CHECK (length(message) BETWEEN 1 AND 5000),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.contact_submissions TO authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- No public policies: inserts happen via service_role from a public server route.
-- Reads are admin-only via service_role for now.
