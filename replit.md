# Creative Portfolio Application

## Overview

This is a modern, interactive creative portfolio application built for a designer named Vedika. The application features a stunning neon-themed design with custom animations, particle effects, and smooth scrolling sections. It's built as a full-stack application with a React frontend and Express backend, designed to showcase creative work and handle contact form submissions.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom neon theme and dark mode design
- **Animations**: Framer Motion for sophisticated animations and transitions
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints with JSON responses
- **Session Management**: PostgreSQL-based session storage
- **Error Handling**: Centralized error handling middleware

### Development Architecture
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reload**: Vite dev server with Express integration
- **Type Safety**: Full TypeScript coverage across the stack
- **Code Quality**: ESLint and Prettier for consistent code formatting

## Key Components

### Frontend Components
- **HeroSection**: Animated landing section with floating profile image
- **AboutSection**: Personal introduction with social media links
- **PortfolioSection**: Interactive project showcase with hover effects
- **SkillsSection**: Animated skill bars and competency display
- **ContactSection**: Form submission with success/error handling
- **CustomCursor**: Interactive cursor that responds to hover states
- **ParticleBackground**: Animated particle system for visual appeal
- **NavigationDots**: Smooth scrolling navigation with active section tracking

### Backend Components
- **Route Handler**: Contact form processing with validation
- **Storage Layer**: Abstracted data access with memory storage fallback
- **Database Schema**: User and contact form data models
- **API Middleware**: Request logging and error handling

## Data Flow

1. **Static Content**: Portfolio content is statically rendered on the client
2. **Contact Form**: User submits contact form → validation → API call → database storage → user feedback
3. **Navigation**: Smooth scrolling between sections with active state tracking
4. **Animations**: Framer Motion triggers based on scroll position and user interactions
5. **Cursor Interactions**: Custom cursor responds to hover states on interactive elements

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **@replit/vite-plugin-***: Replit-specific development plugins

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with Express API integration
- **Hot Reload**: Automatic refresh for both client and server changes
- **Environment Variables**: DATABASE_URL for database connection
- **Session Storage**: PostgreSQL-based session management

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations managed via `drizzle-kit`
- **Serving**: Express serves both API routes and static frontend assets

### Database Management
- **Schema**: Defined in `shared/schema.ts` for type safety
- **Migrations**: Generated and applied using Drizzle Kit
- **Connection**: Serverless connection to Neon Database

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```