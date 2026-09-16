CREATE POLICY "Anyone can upload a document for scanning"
ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (bucket_id = 'scan-uploads');