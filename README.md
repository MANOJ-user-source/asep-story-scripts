# ASEP - Game Story Scripts Documentation

A modern, high-performance documentation website for ASEP game story scripts, built with Next.js featuring a beautiful snowy theme inspired by the frozen planet Estra.

## About ASEP

ASEP is an action-adventure game set on the frozen planet of Estra. This website serves as comprehensive documentation for the game's story scripts, cinematics, gameplay mechanics, and design philosophy.

## Features

- ❄️ **Animated Snow Effect** - Beautiful falling snow particles matching Estra's frozen aesthetic
- 📖 **Documentation-Style Layout** - Clean, readable format inspired by modern documentation sites
- 📑 **Table of Contents** - Sticky sidebar navigation for easy browsing
- 🎬 **Screenplay Formatting** - Professional story script presentation
- 🎮 **QTE Visualizations** - Visual representations of Quick Time Events
- 📊 **Interactive Tables** - Player interaction summaries and technical notes
- 🚀 **Fast Performance** - Optimized with lazy loading and code splitting
- 🎨 **Smooth Animations** - Framer Motion powered transitions
- 📱 **Responsive Design** - Works perfectly on all devices
- 🌙 **Dark Snowy Theme** - Eye-catching icy blue aesthetic matching the game's atmosphere

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling with custom icy color palette
- **Framer Motion** - Smooth animations and transitions
- **React Intersection Observer** - Lazy loading and scroll detection

## Getting Started

### Installation

```bash
# Navigate to project directory
cd game-scripts-blog

# Install dependencies (already done)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
game-scripts-blog/
├── app/                           # Next.js app directory
│   ├── layout.tsx                # Root layout with nav and snow
│   ├── page.tsx                  # Home page
│   ├── scripts/                  # Story scripts section
│   │   ├── page.tsx             # Scripts listing page
│   │   └── level-1-scene-1-the-heist/
│   │       └── page.tsx         # Full story script
│   ├── about/                   # About ASEP page
│   └── globals.css              # Global styles & theme
├── components/                   # React components
│   ├── Navigation.tsx           # Header navigation
│   ├── SnowEffect.tsx          # Animated snow particles
│   ├── ScriptCard.tsx          # Story script preview cards
│   ├── TableOfContents.tsx     # Sticky TOC sidebar
│   └── CodeBlock.tsx           # Syntax highlighted code
└── public/                      # Static assets
```

## Current Content

### Level 1 - Scene 1: The Heist

The website currently includes the complete story script for:
- Opening cinematic sequence
- Government building infiltration
- Quick Time Events (QTE) system
- Building collapse survival sequence
- Player interaction summary
- Technical notes and mechanics

## Adding New Story Scripts

### Step 1: Add to Scripts List

Edit `app/scripts/page.tsx` and add to the `allScripts` array:

```typescript
{
  title: 'Level X - Scene Y: Scene Name',
  description: 'Brief description of the scene',
  slug: 'level-x-scene-y-slug',
  date: '2024-11-26',
  tags: ['Level X', 'Tag1', 'Tag2'],
}
```

### Step 2: Create Script Page

Create a new folder and page:
```
app/scripts/level-x-scene-y-slug/page.tsx
```

Use the existing scene as a template with components:
- `Section` - Main content sections
- `SubSection` - Subsections with indentation
- `Paragraph` - Text paragraphs
- `DialogueBox` - Character dialogue
- `QTEPrompt` - Quick Time Event displays
- `InfoBox` / `InfoRow` - Structured information
- `ScreenEffect` - Screen effects like [SLOW MOTION]
- `TableOfContents` - Auto-generated navigation

### Step 3: Update Home Page

Edit `app/page.tsx` to update featured scripts if needed.

## Customization

### Changing Colors

Edit `tailwind.config.ts` to customize the ice/snow color palette:

```typescript
colors: {
  ice: {
    50: '#f0f9ff',  // Lightest ice blue
    // ... modify as needed
  }
}
```

### Adjusting Snow Effect

Modify `components/SnowEffect.tsx`:
- `numberOfFlakes` - Amount of snowflakes (default: 50)
- `size` range - Snowflake size (default: 2-5px)
- `animationDuration` - Fall speed (default: 10-20s)

### Custom Animations

Edit animation keyframes in `tailwind.config.ts`:
- `float` - Floating motion
- `snowfall` - Snow falling animation
- `shimmer` - Shimmer effect

## Performance Features

- **Lazy Loading** - Components load only when visible
- **Code Splitting** - Automatic route-based splitting
- **Intersection Observer** - Efficient scroll animations
- **Optimized Fonts** - Next.js font optimization
- **Static Generation** - Pre-rendered pages for fast loading

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Docker containers

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All content and game design © Manoj Tiwari Ramchandra

## Credits

**Game Design & Story:** Manoj Tiwari Ramchandra
**Website Theme:** Inspired by the frozen planet Estra
**Built with:** Next.js, React, Tailwind CSS, Framer Motion

---

**Current Status:** Development server running at http://localhost:3000


**Take a look:**https://manoj-user-source.github.io/asep-story-scripts/scripts/level-1-scene-1-the-heist

Last Updated: 25/11/2025 • Version 1.0
