# ByDezin NYFW S/S 2026 — Showroom Landing Page

A modern, high-performance landing page for ByDezin's New York Fashion Week Spring/Summer 2026 showroom event. This invite-only fashion experience showcases emerging designers and provides a platform for brand applications, partner collaborations, and event RSVPs.

## 🌐 Live Site

**URL**: [https://bydezin.apollowrldx.com/](https://bydezin.apollowrldx.com/)

## 📋 Project Overview

ByDezin is an exclusive fashion showroom experience returning to New York City for Fashion Week. This website serves as the primary digital presence for the event, featuring:

- **Hero Video Section**: Full-screen video background with event details and primary CTA
- **Gallery**: Auto-scrolling showcase of past events and collections
- **Experience Highlights**: Key features and benefits of participating
- **Featured Alumni**: Showcase of previous participants and success stories
- **Vision 2025**: Event goals and mission statement
- **Collaborate Section**: Partnership opportunities
- **FAQ**: Common questions and answers
- **Interactive Modals**: Brand application forms, partner inquiries, and RSVP functionality

## 🚀 Tech Stack

### Core Framework & Build Tools
- **[React 18.3.1](https://react.dev/)** - UI library for building component-based interfaces
- **[TypeScript 5.5.3](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 5.4.1](https://vitejs.dev/)** - Next-generation frontend build tool with fast HMR
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)** - React plugin using SWC for faster builds

### Routing & State Management
- **[React Router DOM 6.26.2](https://reactrouter.com/)** - Client-side routing with pages for:
  - `/` - Main landing page
  - `/showcase` - Showcase page
  - `*` - 404 Not Found page
- **[@tanstack/react-query 5.56.2](https://tanstack.com/query/latest)** - Powerful data fetching and state management

### Styling & UI Components
- **[Tailwind CSS 3.4.11](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@tailwindcss/typography 0.5.15](https://tailwindcss.com/docs/typography-plugin)** - Beautiful typographic defaults
- **[tailwindcss-animate 1.0.7](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality, accessible component library built on Radix UI

### UI Component Libraries
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components:
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu
  - Hover Card, Label, Navigation Menu, Popover, Progress, Radio Group
  - Scroll Area, Select, Separator, Slider, Switch, Tabs, Toast, Tooltip
  - And more...
- **[Lucide React 0.462.0](https://lucide.dev/)** - Beautiful, consistent icon set
- **[Embla Carousel 8.3.0](https://www.embla-carousel.com/)** - Lightweight carousel library
- **[Recharts 2.12.7](https://recharts.org/)** - Composable charting library (if needed for analytics)
- **[Sonner 1.5.0](https://sonner.emilkowal.ski/)** - Elegant toast notifications
- **[Vaul 0.9.3](https://vaul.emilkowal.ski/)** - Drawer component for mobile

### Form Handling & Validation
- **[React Hook Form 7.53.0](https://react-hook-form.com/)** - Performant form validation
- **[@hookform/resolvers 3.9.0](https://github.com/react-hook-form/resolvers)** - Validation schema resolvers
- **[Zod 3.23.8](https://zod.dev/)** - TypeScript-first schema validation

### Utilities
- **[clsx 2.1.1](https://github.com/lukeed/clsx)** - Utility for constructing className strings
- **[class-variance-authority 0.7.1](https://cva.style/)** - Component variant API
- **[tailwind-merge 2.5.2](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes without conflicts
- **[date-fns 3.6.0](https://date-fns.org/)** - Modern date utility library
- **[next-themes 0.3.0](https://github.com/pacocoursey/next-themes)** - Theme management (dark/light mode support)

### Development Tools
- **[ESLint 9.9.0](https://eslint.org/)** - JavaScript/TypeScript linting
- **[PostCSS 8.4.47](https://postcss.org/)** - CSS transformation
- **[Autoprefixer 10.4.20](https://github.com/postcss/autoprefixer)** - Automatic vendor prefixes
- **[lovable-tagger 1.1.7](https://lovable.dev/)** - Development tooling for Lovable integration

## 📁 Project Structure

```
by-dezin-2025/
├── public/                          # Static assets
│   ├── hero-video-latest.mov       # Hero section video
│   ├── lovable-uploads/            # Image assets
│   ├── favicon.ico                 # Site favicon
│   └── robots.txt                  # SEO robots file
├── src/
│   ├── components/                  # React components
│   │   ├── ui/                     # shadcn/ui components (30+ components)
│   │   ├── BrandApplicationModal.tsx    # Brand application form
│   │   ├── Button.tsx              # Custom button component
│   │   ├── CollaborateSection.tsx  # Partnership section
│   │   ├── ExperienceHighlights.tsx # Event highlights
│   │   ├── FAQ.tsx                 # FAQ accordion
│   │   ├── FeaturedAlumni.tsx      # Alumni showcase
│   │   ├── FinalCTA.tsx            # Final call-to-action
│   │   ├── Footer.tsx              # Site footer
│   │   ├── Gallery.tsx             # Image gallery
│   │   ├── GalleryItem.tsx         # Individual gallery items
│   │   ├── GalleryNavigation.tsx   # Gallery navigation controls
│   │   ├── Grid.tsx                # Grid layout system
│   │   ├── Header.tsx              # Site header/navigation
│   │   ├── HeroSection.tsx         # Hero with video background
│   │   ├── MetaTags.tsx            # SEO & social media meta tags
│   │   ├── PartnerModal.tsx        # Partnership inquiry modal
│   │   ├── RSVPModal.tsx           # Event RSVP modal
│   │   ├── ScriptDivider.tsx       # Decorative section dividers
│   │   ├── Typography.tsx          # Typography components
│   │   └── Vision2025.tsx          # Vision statement section
│   ├── data/
│   │   └── galleryData.ts          # Gallery image data
│   ├── hooks/                       # Custom React hooks
│   │   ├── use-mobile.tsx          # Mobile detection hook
│   │   ├── use-toast.ts            # Toast notification hook
│   │   ├── useAutoLoadRSVP.ts      # Auto-load RSVP functionality
│   │   └── useGalleryAutoScroll.ts # Gallery auto-scroll logic
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   ├── pages/                       # Page components
│   │   ├── Index.tsx               # Main landing page
│   │   ├── NotFound.tsx            # 404 page
│   │   └── ShowcasePage.tsx        # Showcase page
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # App entry point
│   ├── index.css                    # Global styles
│   └── vite-env.d.ts               # Vite TypeScript definitions
├── index.html                       # HTML entry point
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts              # Tailwind configuration
├── vite.config.ts                  # Vite configuration
├── eslint.config.js                # ESLint configuration
├── postcss.config.js               # PostCSS configuration
└── components.json                  # shadcn/ui configuration
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** (or **bun**) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
git clone <YOUR_GIT_URL>
   cd by-dezin-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
npm run dev
   # or
   bun run dev
   ```

   The app will be available at `http://localhost:8080`

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload (port 8080)

# Building
npm run build        # Production build
npm run build:dev    # Development build

# Linting & Preview
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

## 🎨 Features & Components

### Landing Page Sections

1. **Hero Section** (`HeroSection.tsx`)
   - Full-screen video background with fallback poster
   - Elegant loading states
   - Auto-opens brand application modal with query parameter support
   - Responsive video display (cover on mobile, contain on desktop)
   - Custom CTA button

2. **Gallery** (`Gallery.tsx`)
   - Auto-scrolling image carousel
   - Manual navigation controls
   - Smooth transitions and animations
   - Responsive grid layout

3. **Experience Highlights** (`ExperienceHighlights.tsx`)
   - Key benefits and features
   - Icon-based presentation
   - Responsive cards

4. **Featured Alumni** (`FeaturedAlumni.tsx`)
   - Success stories and testimonials
   - Alumni showcase
   - Application CTA

5. **Vision 2025** (`Vision2025.tsx`)
   - Mission statement
   - Event goals and objectives
   - Engaging visual design

6. **Collaborate Section** (`CollaborateSection.tsx`)
   - Partnership opportunities
   - Sponsor information
   - Partner inquiry modal trigger

7. **FAQ** (`FAQ.tsx`)
   - Accordion-style Q&A
   - Common questions about the event
   - Smooth expand/collapse animations

### Interactive Modals

- **Brand Application Modal**: Multi-step form for designer applications
- **Partner Modal**: Partnership and sponsorship inquiries
- **RSVP Modal**: Event attendance confirmation

### SEO & Social Media Optimization

The `MetaTags.tsx` component provides comprehensive meta tag management:
- Open Graph tags (Facebook, LinkedIn, WhatsApp)
- Twitter Card optimization
- Pinterest Rich Pins
- LinkedIn-specific tags
- Schema.org structured data (Event type)
- Canonical URLs
- Optimized social sharing images

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations
- **Performance Optimized**: Fast loading with Vite and SWC
- **Accessible**: Built on Radix UI primitives with ARIA support
- **SEO Ready**: Comprehensive meta tags and structured data
- **Type Safe**: Full TypeScript coverage
- **Modern UI**: Clean, elegant design with smooth animations
- **Form Validation**: Robust form handling with React Hook Form + Zod
- **Auto-scroll Gallery**: Engaging image showcase with manual controls

## 🌐 Deployment

This project is configured for easy deployment on various platforms:

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Deployment Platforms

- **Vercel**: Zero-config deployment for Vite projects
- **Netlify**: Automatic builds from Git
- **GitHub Pages**: Static hosting with GitHub Actions
- **Any static host**: Serve the `dist/` folder

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a private project for ByDezin's NYFW event. If you're working on this codebase:

1. Create a feature branch from `main`
2. Make your changes with clear commit messages
3. Test thoroughly across devices
4. Submit a pull request for review

## 📄 License

This project is proprietary and confidential to ByDezin.

## 🔗 Links

- **Live Site**: [https://bydezin.apollowrldx.com/](https://bydezin.apollowrldx.com/)
- **Event Date**: September 13, 2025
- **Location**: New York City

## 🙏 Acknowledgments

Built with:
- [Lovable](https://lovable.dev/) - AI-powered development platform
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

**ByDezin** — Showcasing the next generation of fashion voices at NYFW S/S 2026
