
-- Explicit restrictive policies: deny all client-side access.
-- Inserts and reads only happen via service_role inside the server route.
REVOKE SELECT, INSERT ON public.contact_submissions FROM authenticated;

CREATE POLICY "No client reads"
  ON public.contact_submissions
  FOR SELECT
  TO authenticated, anon
  USING (false);

CREATE POLICY "No client writes"
  ON public.contact_submissions
  FOR INSERT
  TO authenticated, anon
  WITH CHECK (false);
