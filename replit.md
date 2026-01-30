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
- `pages/` - Route-level components (Home, Admin, Auth, legal pages)
- `components/sections/` - Landing page sections (Hero, Services, Process, etc.)
- `components/layout/` - Shared layout components (Navbar, Footer)
- `components/ui/` - Reusable shadcn/ui components
- `lib/language-context.tsx` - Internationalization context provider with English/Arabic translations

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
- `POST /api/login` / `POST /api/logout` - Authentication

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Drizzle Kit with `db:push` command

Database tables:
- `users` - Admin user accounts with UUID primary keys
- `contact_submissions` - Contact form entries with timestamps
- `newsletter_subscribers` - Email subscriptions

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
- **Trigger**: Contact form submissions send email notification to NOTIFICATION_EMAIL
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