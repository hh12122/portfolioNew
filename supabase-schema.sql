-- Enable RLS (Row Level Security)
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create skills table
CREATE TABLE IF NOT EXISTS public.skills (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    image text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create projects table
CREATE TABLE IF NOT EXISTS public.projects (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    skill text NOT NULL,
    url text,
    image_or_video text,
    description text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on tables
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policies for skills table
CREATE POLICY "Enable read access for all users" ON public.skills
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON public.skills
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON public.skills
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users only" ON public.skills
    FOR DELETE USING (auth.role() = 'authenticated');

-- Create policies for projects table
CREATE POLICY "Enable read access for all users" ON public.projects
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON public.projects
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON public.projects
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users only" ON public.projects
    FOR DELETE USING (auth.role() = 'authenticated');

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public) VALUES ('portfolio-media', 'portfolio-media', true);

-- Create policy for storage bucket
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'portfolio-media');
CREATE POLICY "Authenticated users can upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'portfolio-media' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete" ON storage.objects FOR DELETE USING (bucket_id = 'portfolio-media' AND auth.role() = 'authenticated');