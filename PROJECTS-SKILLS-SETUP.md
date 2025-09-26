# Multi-Skill Project Setup Guide

This guide explains how to set up the new multi-skill project functionality that allows projects to have multiple skills and enables filtering by skill.

## 🎯 Features Added

1. **Multi-Skill Projects**: Projects can now have multiple skills attached
2. **Smart Filtering**: Filter projects by individual skills with project counts
3. **Enhanced Admin Modal**: Select multiple skills when creating/editing projects
4. **Improved Project Cards**: Display all skills for each project
5. **Backward Compatibility**: Existing projects still work with old single skill field

## 📋 Setup Steps

### 1. Update Database Schema

Run the SQL commands from `supabase-schema-update.sql` in your Supabase SQL editor:

```sql
-- Create the junction table for project-skill relationships
CREATE TABLE IF NOT EXISTS public.project_skills (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id uuid REFERENCES public.projects(id) ON DELETE CASCADE,
    skill_id uuid REFERENCES public.skills(id) ON DELETE CASCADE,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(project_id, skill_id)
);

-- Enable RLS and create policies (see full file for details)
```

### 2. Add Skills to Your Database

First, add skills through the admin panel at `/admin` using the existing skill management interface:

**Programming Languages:**
- PHP
- JavaScript
- TypeScript
- Java
- Python

**Frontend:**
- Vue.js
- Angular
- React
- HTML5
- CSS3
- Tailwind CSS
- Bootstrap

**Backend:**
- Symfony
- Laravel
- Node.js

**Databases:**
- MySQL
- MongoDB
- PostgreSQL

**Tools:**
- Docker
- Git
- AWS

### 3. Create Projects with Multiple Skills

When creating or editing projects in the admin panel:

1. Go to `/admin` and sign in
2. Click "Add Project" or edit an existing project
3. Fill in project details
4. **Primary Skill**: Select one skill (for backward compatibility)
5. **Skills**: Check all skills that apply to this project
6. Save the project

### 4. How Filtering Works

The portfolio page now shows:

- **Filter tabs**: "All", and individual skills with project counts
- **Dynamic filtering**: Click any skill to see only projects using that skill
- **Multi-skill display**: Each project card shows all its associated skills
- **Visual feedback**: Active filters are highlighted with coffee theme colors

## 🎨 Components Overview

### ProjectCard.vue
- Displays individual project with all skills
- Handles both new multi-skill format and old single-skill format
- Hover effects and external link handling

### ProjectsSection.vue
- Main portfolio section with filtering
- Dynamic skill filter generation
- Project count tracking per skill
- Responsive filter navigation

### AdminProjectModal.vue
- Multi-skill checkbox selection
- Backward compatible with primary skill field
- Uses new `createProjectWithSkills` and `updateProjectWithSkills` methods

## 🔧 Technical Details

### Database Structure
```
projects (existing table)
├── id
├── name
├── skill (kept for compatibility)
├── url
├── image_or_video
├── description
└── timestamps

project_skills (new junction table)
├── project_id → projects.id
├── skill_id → skills.id
└── timestamps

projects_with_skills (view)
├── All project fields
└── skills (JSON array of associated skills)
```

### Composable Methods

**New methods in `useProjects()`:**
- `createProjectWithSkills(project, skillIds)`: Create project with multiple skills
- `updateProjectWithSkills(id, project, skillIds)`: Update project with skills
- `updateProjectSkills(projectId, skillIds)`: Manage skill relationships

### Data Flow

1. **Loading**: Fetch projects and skills from database
2. **Display**: Show projects with associated skills
3. **Filtering**: Filter by skill ID, checking all project skills
4. **Admin**: Multi-select skills when creating/editing projects

## 🎉 Usage Examples

### Filter by Vue.js Projects
```javascript
// User clicks "Vue.js" filter button
filterProjects('vue-skill-id')
// Shows only projects that include Vue.js skill
```

### Create Project with Multiple Skills
```javascript
// Admin selects: Vue.js, Symfony, MySQL
createProjectWithSkills(projectData, ['vue-id', 'symfony-id', 'mysql-id'])
```

## 🚀 Benefits

1. **Better Organization**: Projects can be tagged with all relevant technologies
2. **Enhanced Discovery**: Users can find projects by any technology used
3. **Professional Display**: Shows full tech stack for each project
4. **Easy Management**: Intuitive admin interface with checkboxes
5. **Backward Compatible**: Existing data continues to work

## 📱 Mobile Responsive

- Filter tabs wrap on mobile devices
- Project cards adapt to different screen sizes
- Touch-friendly filter buttons with proper spacing
- Optimized for coffee theme color scheme

The system is now ready for you to create rich, multi-skill projects that visitors can easily filter and explore!