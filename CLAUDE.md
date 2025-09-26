# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nuxt 3 portfolio application with Supabase backend, featuring public portfolio frontend and admin dashboard for content management.

## Key Commands

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Build for production
npm run generate   # Generate static site
npm run preview    # Preview production build
npm install        # Install dependencies
```

## Architecture

### Core Stack
- **Framework**: Nuxt 3 with Vue 3, TypeScript
- **Database/Auth**: Supabase (PostgreSQL + Auth)
- **Styling**: Tailwind CSS with shadcn-vue components
- **Forms**: VeeValidate with Yup validation
- **Modules**: @nuxtjs/supabase, @nuxtjs/tailwindcss, @vueuse/nuxt

### High-Level Architecture

**Authentication Flow**:
- Middleware (`/middleware/auth.ts`) protects admin routes by checking `useSupabaseUser()`
- Public routes (`/`, `/contact`) excluded via Supabase redirect config
- Admin authentication handled through composable (`useAuth.ts`) wrapping Supabase Auth

**Data Management**:
- Composables (`useSkills.ts`, `useProjects.ts`) encapsulate CRUD operations
- Direct Supabase client interaction for database operations
- File uploads to Supabase Storage bucket with public URL generation
- TypeScript interfaces define data models (Skill, Project)

**Component Structure**:
- UI components follow shadcn-vue patterns using class-variance-authority
- Modal components (`AdminSkillModal.vue`, `AdminProjectModal.vue`) handle forms
- Utility function `cn()` in `/lib/utils.ts` merges Tailwind classes

### Database Schema

Tables with RLS policies (from `supabase-schema.sql`):
- `skills`: id (uuid), name, image, created_at, updated_at
- `projects`: id (uuid), name, skill, url, image_or_video, description, created_at, updated_at
- Storage bucket: `portfolio-media` (public access for read, authenticated for write/delete)

### Environment Configuration
Required in `.env`:
- `SUPABASE_URL`: Supabase project URL
- `SUPABASE_ANON_KEY`: Supabase anonymous key

### Routing Structure
- `/` - Public portfolio
- `/admin` - Dashboard (requires auth)
- `/admin/login` - Admin login
- `/admin/signup` - Admin signup