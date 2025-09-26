-- New database schema update for project-skill relationships
-- Run this after your existing schema

-- Create a junction table for project-skill relationships (many-to-many)
CREATE TABLE IF NOT EXISTS public.project_skills (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id uuid REFERENCES public.projects(id) ON DELETE CASCADE,
    skill_id uuid REFERENCES public.skills(id) ON DELETE CASCADE,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(project_id, skill_id)
);

-- Enable RLS on project_skills table
ALTER TABLE public.project_skills ENABLE ROW LEVEL SECURITY;

-- Create policies for project_skills table
CREATE POLICY "Enable read access for all users" ON public.project_skills
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON public.project_skills
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON public.project_skills
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users only" ON public.project_skills
    FOR DELETE USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_project_skills_project_id ON public.project_skills(project_id);
CREATE INDEX IF NOT EXISTS idx_project_skills_skill_id ON public.project_skills(skill_id);

-- Update projects table to remove the single skill field (optional migration)
-- You can keep the skill field for backward compatibility or remove it
-- ALTER TABLE public.projects DROP COLUMN skill;

-- Create a view for easier querying of projects with their skills
CREATE OR REPLACE VIEW public.projects_with_skills AS
SELECT
    p.*,
    COALESCE(
        json_agg(
            json_build_object(
                'id', s.id,
                'name', s.name,
                'image', s.image
            )
        ) FILTER (WHERE s.id IS NOT NULL),
        '[]'::json
    ) as skills
FROM public.projects p
LEFT JOIN public.project_skills ps ON p.id = ps.project_id
LEFT JOIN public.skills s ON ps.skill_id = s.id
GROUP BY p.id, p.name, p.url, p.image_or_video, p.description, p.created_at, p.updated_at, p.skill;

-- Grant permissions on the view
GRANT SELECT ON public.projects_with_skills TO authenticated;
GRANT SELECT ON public.projects_with_skills TO anon;