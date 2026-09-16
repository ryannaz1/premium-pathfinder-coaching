CREATE TABLE public.scan_submissions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  email text NOT NULL,
  whatsapp text,
  university text,
  academic_level text,
  document_type text,
  notes text,
  file_path text NOT NULL,
  file_name text NOT NULL,
  file_size integer NOT NULL,
  status text NOT NULL DEFAULT 'received',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.scan_submissions TO anon, authenticated;
GRANT ALL ON public.scan_submissions TO service_role;

ALTER TABLE public.scan_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a document for scanning"
ON public.scan_submissions FOR INSERT TO anon, authenticated
WITH CHECK (true);