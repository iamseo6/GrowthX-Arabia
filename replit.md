# GrowthX Arabia - AI Automation Solutions

## Overview

GrowthX Arabia is a full-stack web application for an AI automation consulting company targeting businesses in the Middle East. The platform serves as a marketing website with contact form functionality, newsletter subscriptions, and an admin dashboard for managing submissions. Built with React on the frontend and Express on the backend, it uses PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Build Tool**: Vite with custom plugins for Replit integration

The frontend follows a component-based architecture with:
- `pages/` - Route-level components (Home, Admin, Auth, legal pages, ServiceDetail)
- `components/sections/` - Landing page sections (Hero, Services, Process, etc.)
- `components/layout/` - Shared layout components (Navbar, Footer)
- `components/ui/` - Reusable shadcn/ui components
- `lib/language-context.tsx` - Internationalization context provider with English/Arabic translations
- `lib/services-data.ts` - Service detail page data with full English/Arabic content

### Service Pages
Individual service detail pages accessible at `/services/:slug`:
- Workflow Automation (`/services/workflow-automation`) - n8n, Make integrations
- AI Chatbots & Agents (`/services/ai-chatbots`) - Conversational AI
- CRM Automation (`/services/crm-automation`) - GoHighLevel
- Data Analytics & Insights (`/services/data-analytics`) - Business intelligence
- AI Automated SEO (`/services/ai-seo`) - AI-powered SEO automation
- AI Automated Google Ads (`/services/ai-google-ads`) - PPC campaign management
- AI Automated Local SEO (`/services/ai-local-seo`) - GBP optimization, citations
- AI Social Media Scheduling (`/services/ai-social-scheduling`) - Content automation

### Blog Section
Blog pages accessible at `/blog` and `/blog/:slug`:
- **Main Blog Page** (`/blog`) - Grid of blog post cards with featured images
- **Individual Posts** (`/blog/:slug`) - Full article with markdown-style rendering
- **Data Source**: `lib/blog-data.ts` with full bilingual content
- **Articles**:
  1. How AI Automation is Transforming Business Operations in the Middle East
  2. 5 Workflow Automations Every Business Should Implement in 2024
  3. The Ultimate Guide to AI-Powered SEO for Arabic Markets
- **Features**: Related posts section, category badges, reading time, author info

### Lead Generation Funnel
Multi-step lead capture form at `/get-started`:
- **4 Steps**: Service selection, Company details, Project requirements, Contact info
- **Conversion Elements**: Progress indicators, trust badges, social proof
- **Validation**: Client-side validation with disabled buttons, server-side Zod validation
- **Email Notifications**: Sends lead details to NOTIFICATION_EMAIL via Resend
- **Bilingual**: Full English/Arabic support with RTL layout

### Internationalization (i18n)
- **Languages**: English (en) and Arabic (ar)
- **RTL Support**: Browser-native RTL handling via `dir="rtl"` on the HTML element
- **Translation System**: React Context with `t()` for strings and `tArray()` for arrays
- **Language Toggle**: Globe icon in navbar switches between languages
- **Storage**: Language preference stored in localStorage

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Authentication**: Passport.js with local strategy, bcrypt for password hashing
- **Session Management**: express-session with connect-pg-simple for PostgreSQL session storage
- **API Design**: RESTful endpoints under `/api/*` prefix

Key API endpoints:
- `POST /api/contact` - Submit contact form (public)
- `GET /api/contact` - Retrieve submissions (authenticated)
- `POST /api/newsletter` - Newsletter signup (public)
- `POST /api/leads` - Submit lead funnel form (public)
- `GET /api/leads` - Retrieve leads (authenticated)
- `POST /api/login` / `POST /api/logout` - Authentication

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Drizzle Kit with `db:push` command

Database tables:
- `users` - Admin user accounts with UUID primary keys
- `contact_submissions` - Contact form entries with timestamps
- `newsletter_subscribers` - Email subscriptions
- `leads` - Lead funnel submissions with service interest, company info, and contact details

### Authentication Flow
- Session-based authentication using cookies
- Sessions stored in PostgreSQL via connect-pg-simple
- Protected routes on frontend use `ProtectedRoute` component
- Backend routes protected with `isAuthenticated` middleware

### Build System
- Development: Vite dev server with HMR, proxied through Express
- Production: Vite builds static assets, esbuild bundles server code
- Output: `dist/public` for client, `dist/index.cjs` for server

## External Dependencies

### Database
- **PostgreSQL**: Required, connection via `DATABASE_URL` environment variable
- Session table created automatically by connect-pg-simple

### Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (required)
- `SESSION_SECRET` - Session encryption key (defaults to fallback in dev)
- `NOTIFICATION_EMAIL` - Email address to receive contact form notifications (Iamseoagency@gmail.com)

### Email Notifications
- **Provider**: Resend (via Replit integration)
- **Triggers**: 
  - Contact form submissions send email to NOTIFICATION_EMAIL
  - Lead funnel submissions send detailed lead info to NOTIFICATION_EMAIL
- **Note**: Requires domain verification in Resend dashboard for the "from" email address

### Third-Party Libraries
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm / drizzle-zod**: Database ORM with Zod schema validation
- **framer-motion**: Animation library for UI interactions
- **shadcn/ui (Radix primitives)**: Accessible component primitives
- **passport / passport-local**: Authentication middleware
- **bcryptjs**: Password hashing

### Replit-Specific Integrations
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development environment indicator
- Custom `vite-plugin-meta-images`: OpenGraph image URL handling for deployments