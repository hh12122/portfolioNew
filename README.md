# Portfolio Nuxt 3 - Personal Portfolio with Supabase

A modern personal portfolio website built with Nuxt 3, Supabase, and Tailwind CSS featuring an admin dashboard for content management.

## 🚀 Features

- **Public Portfolio Frontend**: Hero, Skills, Projects, and Contact sections
- **Admin Dashboard**: Full CRUD operations for skills and projects
- **Authentication**: Secure login with Supabase Auth
- **File Uploads**: Image/video uploads to Supabase Storage
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean components using shadcn-vue style
- **TypeScript**: Full type safety throughout the application

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings → API to get your project URL and anon key
3. Copy `.env.example` to `.env` and fill in your Supabase credentials:

```bash
cp .env.example .env
```

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Setup Database

Run the SQL commands in `supabase-schema.sql` in your Supabase SQL editor:

1. Go to your Supabase dashboard
2. Click on "SQL Editor"
3. Copy and paste the contents of `supabase-schema.sql`
4. Click "RUN"

This will create:
- `skills` table with RLS policies
- `projects` table with RLS policies
- Storage bucket for media files
- Proper security policies

### 4. Create Admin User

1. Go to Authentication → Users in your Supabase dashboard
2. Click "Add user"
3. Enter email and password for your admin account
4. Confirm the user (disable email confirmation in Auth settings for testing)

### 5. Development

```bash
npm run dev
```

Your app will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
portfolio-nuxt/
├── assets/css/           # Global styles
├── components/           # Vue components
│   ├── ui/              # Reusable UI components
│   ├── AdminSkillModal.vue
│   └── AdminProjectModal.vue
├── composables/          # Vue composables
│   ├── useAuth.ts       # Authentication logic
│   ├── useSkills.ts     # Skills CRUD operations
│   └── useProjects.ts   # Projects CRUD operations
├── middleware/           # Route middleware
│   └── auth.ts          # Authentication middleware
├── pages/               # File-based routing
│   ├── index.vue        # Public portfolio page
│   └── admin/           # Admin dashboard pages
│       ├── index.vue    # Dashboard home
│       └── login.vue    # Admin login
├── lib/                 # Utility functions
│   └── utils.ts         # Tailwind class utilities
├── nuxt.config.ts       # Nuxt configuration
├── tailwind.config.js   # Tailwind configuration
└── supabase-schema.sql  # Database schema
```

## 🔧 Key Components

### Authentication (`composables/useAuth.ts`)
- Sign in/out functionality
- User state management
- Route protection

### Skills Management (`composables/useSkills.ts`)
- CRUD operations for skills
- Image upload to Supabase Storage
- TypeScript interfaces

### Projects Management (`composables/useProjects.ts`)
- CRUD operations for projects
- Media upload (images/videos)
- Project categorization

### UI Components (`components/ui/`)
- Button, Input, Card components
- Styled with Tailwind CSS
- shadcn-vue inspired design

## 🎨 Styling

The project uses:
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn-vue**: Component styling system
- **Custom CSS Variables**: For theme consistency
- **Responsive Design**: Mobile-first approach

## 🔐 Security Features

- Row Level Security (RLS) on all tables
- Authenticated-only access to admin routes
- File upload restrictions
- Protected API endpoints

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repo in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.output/public`
5. Add environment variables
6. Deploy

## 📝 Usage

### Admin Dashboard

1. Visit `/admin/login`
2. Sign in with your admin credentials
3. Manage skills and projects from the dashboard

### Public Portfolio

- View at root `/`
- Responsive design works on all devices
- Contact form (implement email service as needed)

## 🔧 Customization

### Personal Information

Edit `pages/index.vue` to update:
- Your name and tagline
- Contact information
- About section content

### Styling

Modify `tailwind.config.js` and `assets/css/main.css` for:
- Color schemes
- Typography
- Component styling

### Database Schema

Extend `supabase-schema.sql` to add:
- Additional fields to existing tables
- New tables for blog posts, testimonials, etc.
- Custom business logic

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own portfolio!