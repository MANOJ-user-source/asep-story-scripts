# 🎨 Futuristic Font Showcase for ASEP

## Currently Implemented

✅ **Orbitron** - All headings (h1-h6)
✅ **Exo 2** - Body text

## Font Examples & Use Cases

### 1. Orbitron (Currently Active for Headings)
```
ASEP - GAME STORY SCRIPTS
Level 1 – Scene 1: The Heist
```
- **Style**: Geometric, bold, sci-fi
- **Best for**: Main titles, headings, logo
- **Vibe**: Tron, cyberpunk, tech
- **Readability**: ⭐⭐⭐⭐ (4/5)

### 2. Exo 2 (Currently Active for Body)
```
The MC crouches before a terminal, fingers dancing across
a holographic interface. Data streams flicker across his visor.
```
- **Style**: Modern, clean, tech-focused
- **Best for**: Body text, descriptions, dialogue
- **Vibe**: Sleek, professional, readable
- **Readability**: ⭐⭐⭐⭐⭐ (5/5)

## Alternative Options (Easy to Switch)

### 3. Rajdhani
```
THE FROZEN PLANET OF ESTRA
SURVEILLANCE DRONES DETECTED
```
- **Style**: Bold, condensed, futuristic
- **Best for**: Action headings, alerts, UI elements
- **Vibe**: Military tech, angular
- **Readability**: ⭐⭐⭐⭐ (4/5)

### 4. Space Grotesk
```
Mission Briefing: Infiltration Protocol
Target: Government Database Server
```
- **Style**: Space-age, modern, rounded
- **Best for**: Subtitles, mission text
- **Vibe**: NASA, space exploration
- **Readability**: ⭐⭐⭐⭐⭐ (5/5)

### 5. Michroma
```
A S E P
CLASSIFIED INTEL
```
- **Style**: Wide, unique, ultra-futuristic
- **Best for**: Logo, special titles
- **Vibe**: Alien tech, experimental
- **Readability**: ⭐⭐⭐ (3/5) - Very stylized

### 6. Audiowide
```
INCOMING TRANSMISSION
ALERT: SYSTEM BREACH
```
- **Style**: Wide, tech-inspired
- **Best for**: Alerts, warnings, UI
- **Vibe**: Digital, arcade
- **Readability**: ⭐⭐⭐⭐ (4/5)

### 7. Tomorrow
```
Planet: Estra
Environment: Snow-covered cities
```
- **Style**: Clean, modern, sci-fi
- **Best for**: Labels, metadata
- **Vibe**: Minimalist future
- **Readability**: ⭐⭐⭐⭐⭐ (5/5)

### 8. Electrolize
```
>>DOWNLOADING... 91%
>>ACCESS GRANTED
```
- **Style**: Circuit-board, digital
- **Best for**: Code blocks, system messages
- **Vibe**: Matrix, digital
- **Readability**: ⭐⭐⭐ (3/5)

## Recommended Combinations

### Option A (Current - Balanced)
- Headings: **Orbitron** (futuristic but readable)
- Body: **Exo 2** (clean, modern)
- Accent: Keep current

### Option B (Maximum Futuristic)
- Headings: **Michroma** (ultra sci-fi)
- Body: **Space Grotesk** (readable but futuristic)
- Alerts/UI: **Rajdhani**

### Option C (Clean & Professional)
- Headings: **Space Grotesk**
- Body: **Exo 2**
- Accent: **Tomorrow**

### Option D (Cyberpunk)
- Headings: **Rajdhani**
- Body: **Exo 2**
- Code/Tech: **Electrolize**

## How to Change Fonts

Edit `app/layout.tsx`:

```typescript
// Replace this:
import { Orbitron, Exo_2 } from 'next/font/google';

// With your choice:
import { Space_Grotesk, Michroma } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});
```

Then update `app/globals.css`:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}
```

## Current Font Setup

✅ Orbitron for all headings with letter-spacing
✅ Exo 2 for body text
✅ Uppercase cyber-text class for special elements
✅ Neon-text class for glowing effects

## Want to Try Different Fonts?

Let me know which combination you prefer:
- A (Current)
- B (Maximum Futuristic)
- C (Clean Professional)
- D (Cyberpunk)

Or suggest your own combination!
