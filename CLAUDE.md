# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 portfolio application with Supabase backend integration, featuring a public portfolio frontend and admin dashboard for content management. Built with Vue 3, TypeScript, Tailwind CSS, and shadcn-vue components.

## Key Commands

### Development
```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build for production
npm run generate   # Generate static site
npm run preview    # Preview production build
```

### Installation
```bash
npm install        # Install dependencies
```

## Architecture

### Core Stack
- **Framework**: Nuxt 3 with Vue 3
- **Database/Auth**: Supabase (PostgreSQL + Auth)
- **Styling**: Tailwind CSS with shadcn-vue components
- **Forms**: VeeValidate with Yup validation

### Project Structure
- `/pages` - File-based routing
  - `/admin` - Protected admin dashboard pages (login, signup, index)
  - `index.vue` - Public portfolio homepage
- `/components` - Vue components
  - `/ui` - Reusable UI components (shadcn-vue style)
  - `AdminSkillModal.vue`, `AdminProjectModal.vue` - Admin modals
- `/composables` - Business logic
  - `useAuth.ts` - Authentication handling
  - `useSkills.ts` - Skills CRUD operations
  - `useProjects.ts` - Projects CRUD operations
- `/middleware/auth.ts` - Route protection
- `/lib/utils.ts` - Tailwind utility functions

### Key Modules & Configuration
- **nuxt.config.ts**: Configures Supabase module, Tailwind CSS, VueUse
- **Environment Variables**: SUPABASE_URL, SUPABASE_ANON_KEY required
- **Auth Flow**: Redirects configured for `/admin/login` (login) and `/admin` (callback)
- **Public Routes**: `/` and `/contact` excluded from auth

### Database Schema
Tables created via `supabase-schema.sql`:
- `skills` - Portfolio skills with image URLs
- `projects` - Portfolio projects with media support
- Storage bucket for file uploads
- RLS policies for secure access

### State Management
- Supabase client accessed via `useSupabaseClient()`
- User state via `useSupabaseUser()`
- Data operations through composables (useSkills, useProjects)

## Development Notes

### Authentication
Admin users must be created manually in Supabase dashboard. The middleware protects `/admin` routes except login/signup.

### File Uploads
Images and videos uploaded to Supabase Storage with automatic URL generation. File size limits and type restrictions apply.

### Styling Approach
Uses Tailwind utility classes with custom CSS variables defined in `/assets/css/main.css`. Components follow shadcn-vue patterns with class-variance-authority for variants.

### No Testing/Linting
Currently no test runner or linting configured. Consider adding Vitest for testing and ESLint for code quality if needed.