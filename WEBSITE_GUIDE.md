# David Scotchford - Premium Live Entertainment Website

## Project Overview

This is a premium, cinematic personal business website for David Scotchford, a creative content creator and consultant specializing in premium live entertainment for cruise, theatrical, and experiential performance.

The website features a sophisticated dark editorial aesthetic with elegant typography, smooth animations, and a focus on visual storytelling and artistic excellence.

## Design Philosophy

### Visual Aesthetic
- **Color Palette**: Dark backgrounds (#0a0a0a, #1a1a1a) with warm accents (muted gold #8b7d6b, accent gold #a89968)
- **Typography**: 
  - Headings: Playfair Display (elegant serif)
  - Body: Inter (clean modern sans-serif)
- **Atmosphere**: Cinematic, elegant, modern, atmospheric, movement-driven, highly curated

### Key Design Principles
- **Authorship**: Positions David as more than a choreographer—an artist-creator authoring premium entertainment experiences
- **Theatrical Sophistication**: Refined artistic sensibility throughout
- **Audience-Forward Thinking**: Every design decision considers audience experience
- **Visual Storytelling**: Large visuals, spacious layouts, subtle motion
- **Premium Feel**: High-end creative studio aesthetic, not a résumé site

## Project Structure

```
david-scotchford-website/
├── src/
│   ├── components/
│   │   └── Navigation.tsx          # Main navigation component
│   ├── pages/
│   │   ├── Home.tsx                # Homepage with hero section
│   │   ├── About.tsx               # About page with biography
│   │   ├── Portfolio.tsx           # Portfolio with project filtering
│   │   ├── VideoGallery.tsx        # Video gallery with filtering
│   │   ├── Credits.tsx             # Professional credits and timeline
│   │   ├── Testimonials.tsx        # Client testimonials
│   │   └── Contact.tsx             # Contact form and inquiry page
│   ├── App.tsx                     # Main app component with routing
│   ├── App.css                     # Component styles
│   ├── index.css                   # Global styles and theme
│   └── main.tsx                    # React entry point
├── public/                         # Static assets
├── index.html                      # HTML template
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── vite.config.ts                  # Vite configuration
└── package.json                    # Project dependencies
```

## Pages & Sections

### 1. **Homepage**
- Full-screen hero section with gradient overlay
- Featured projects showcase
- "Authorship in Motion" section
- Services & expertise overview
- Call-to-action sections
- Footer with social links

### 2. **About Page**
- Comprehensive biography
- Core expertise breakdown
- Creative philosophy (Authorship, Audience-Forward Thinking, Theatrical Sophistication, Collaborative Excellence)
- Served industries overview

### 3. **Portfolio Page**
- Project filtering by category (All, Cruise Entertainment, Theatrical, Experiential)
- Project cards with descriptions and years
- Featured project spotlight
- Creative process breakdown
- 6 featured projects with detailed information

### 4. **Video Gallery**
- Video filtering by type (All Videos, Full Shows, Reels & Highlights)
- Video cards with play buttons and durations
- Featured choreography reel section
- Video collections overview
- Behind-the-scenes content

### 5. **Credits Page**
- Comprehensive project credits with roles
- Core competencies grid
- Industry experience breakdown
- Professional timeline
- 6 major projects with detailed role information

### 6. **Testimonials Page**
- 6 client testimonials with featured spotlight
- Client & collaborator types
- Why work together section
- Impact & results metrics
- Call-to-action for collaboration

### 7. **Contact Page**
- Contact form with validation
- Direct email contact
- Response time information
- Social media links
- Frequently asked questions
- Services & collaboration models overview

## Technology Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4 with PostCSS
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Animations**: CSS keyframes and transitions
- **Development**: pnpm package manager

## Getting Started

### Installation
```bash
cd david-scotchford-website
pnpm install
```

### Development
```bash
pnpm dev
```
The site will be available at `http://localhost:5173`

### Production Build
```bash
pnpm build
```
Output will be in the `dist/` directory

### Preview Production Build
```bash
pnpm preview
```

## Customization Guide

### Updating Content

#### Navigation
Edit `src/components/Navigation.tsx` to modify navigation items:
```typescript
const navItems = [
  { id: 'home', label: 'Home' },
  // Add more items here
];
```

#### Color Theme
Update CSS variables in `src/index.css`:
```css
:root {
  --dark-bg: '#0a0a0a';
  --accent-gold: '#a89968';
  /* Update other colors */
}
```

#### Page Content
Each page is a separate component in `src/pages/`. Edit the content directly in the JSX.

### Adding New Pages

1. Create a new file in `src/pages/` (e.g., `NewPage.tsx`)
2. Add the page type to `App.tsx`:
   ```typescript
   type Page = 'home' | 'about' | 'newpage';
   ```
3. Add case to the switch statement in `renderPage()`
4. Add navigation item to `Navigation.tsx`

### Customizing Animations

Animations are defined in `src/App.css`. Key animation classes:
- `.fade-in` - Fade in animation
- `.slide-up` - Slide up animation
- `.subtle-float` - Subtle floating animation
- `.stagger-item` - Staggered entrance animation

## Features

### Navigation
- Fixed header with logo and navigation links
- Active page indicator
- Mobile-responsive hamburger menu
- Smooth scroll to top on page change

### Interactive Elements
- Hover effects on buttons and cards
- Filter buttons for portfolio and video gallery
- Contact form with validation
- Smooth transitions between pages

### Responsive Design
- Mobile-first approach
- Breakpoint at 768px for tablet/mobile
- Optimized layouts for all screen sizes
- Touch-friendly interface

### Performance
- Optimized CSS with Tailwind
- Minimal JavaScript bundle
- Fast page transitions
- Efficient image handling

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential additions for future versions:
- Video embedding (YouTube, Vimeo)
- Image gallery with lightbox
- Blog section for articles
- Client case studies with detailed breakdowns
- Interactive timeline
- Newsletter signup
- Analytics integration
- SEO optimization
- Multi-language support

## Deployment

### Static Hosting (Recommended)
The site can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

### Deployment Steps
1. Run `pnpm build`
2. Upload the `dist/` folder to your hosting service
3. Configure your domain

## Maintenance

### Regular Updates
- Update project information in portfolio
- Add new testimonials
- Update video gallery with new content
- Refresh credits and timeline
- Update contact information

### Performance Monitoring
- Monitor page load times
- Check for broken links
- Test on various devices
- Validate forms regularly

## Support & Questions

For questions about the website structure or customization, refer to:
- React documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite documentation: https://vitejs.dev

## License

This website is custom-built for David Scotchford. All content and design are proprietary.

---

**Last Updated**: April 2024
**Version**: 1.0
