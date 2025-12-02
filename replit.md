# ProjetoCel - Animal Adoption NGO Landing Page

## Overview

ProjetoCel is a nonprofit animal protection organization landing page built as a modern, responsive web application. The project focuses on promoting animal adoption (especially adult animals), sponsorship programs, and connecting visitors with the NGO through WhatsApp and Instagram. The site emphasizes emotional connection, trust-building through transparency, and clear calls-to-action for donations and adoptions.

**Core Purpose:**
- Showcase animals available for adoption with filtering capabilities
- Promote adult animal adoption campaign
- Enable monthly sponsorship program (200 sponsors × R$50/month goal)
- Facilitate direct communication via WhatsApp
- Provide smooth, engaging user experience with modern design principles

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools:**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- React Query (@tanstack/react-query) for data fetching and state management

**UI Component System:**
- Shadcn/ui component library (New York style preset)
- Radix UI primitives for accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management
- Custom CSS animations and transitions for smooth interactions

**Design System:**
- Mobile-first responsive approach
- Custom color palette: #0266C9 (primary blue), #02B2FF (accent blue), #DDEBFF (light blue), #ffee80 (highlight yellow), #ffffff
- Highlight yellow (#ffee80) used for accent details: important text, icons, card borders
- Minimalist aesthetic with generous spacing, rounded corners, subtle shadows
- Typography: Modern sans-serif fonts (Inter, Poppins, DM Sans, Geist Mono)
- Comprehensive animation system: fade-ins, slide-ups, scale effects, hover states
- Glass morphism effects and gradient accents for visual interest

**Key Features:**
- Sticky navigation with scroll-based styling changes
- Smooth scroll anchor navigation between sections
- Animal gallery with filterable views (all animals vs. adult animals only)
- Floating WhatsApp button for persistent contact access
- Sponsorship progress tracking with visual indicators
- Form submissions redirect to WhatsApp with pre-filled messages
- Responsive image handling with WebP format

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for type-safe API development
- Custom middleware for request logging and JSON body parsing
- Modular route registration system

**Development Environment:**
- Vite integration for HMR (Hot Module Replacement) during development
- Custom error handling and logging utilities
- Production build process with esbuild bundling

**Current Implementation:**
- In-memory storage implementation (MemStorage class)
- User CRUD operations interface defined but not actively used
- Placeholder for future API routes (prefixed with /api)

### Data Storage Solutions

**Database Configuration:**
- PostgreSQL as the target database (via Drizzle configuration)
- Neon serverless PostgreSQL driver (@neondatabase/serverless)
- Drizzle ORM for type-safe database operations
- Schema-first approach with migrations support

**Current Schema:**
- Users table with UUID primary keys, username, and password fields
- Zod validation schemas generated from Drizzle schemas
- Migration files stored in `/migrations` directory

**Storage Interface:**
- Abstract IStorage interface defining CRUD operations
- MemStorage class as fallback/development implementation
- Designed for easy swapping to database-backed storage

### External Dependencies

**Third-Party Services:**
- WhatsApp Business API integration via deep links (wa.me)
- Instagram social media linking
- Google Fonts CDN for typography (Architects Daughter, DM Sans, Fira Code, Geist Mono, Inter, Poppins)

**Asset Management:**
- Static assets stored in `/attached_assets` directory
- WebP image format for optimized performance
- Logo and animal photos served through Vite's asset pipeline

**Development Tools:**
- Replit-specific plugins for runtime error overlay and development banners
- PostCSS with Tailwind CSS and Autoprefixer
- TypeScript for type checking across the entire codebase

**Key Libraries:**
- React Hook Form with Zod resolvers for form validation
- Lucide React for iconography
- React Icons for social media icons (Instagram, WhatsApp)
- Date-fns for date manipulation
- Embla Carousel for image carousels
- CMDK for command menu interfaces

**SEO & Meta:**
- Semantic HTML with proper meta tags
- Open Graph protocol support
- Descriptive alt texts for accessibility
- Portuguese language (pt-BR) as primary locale