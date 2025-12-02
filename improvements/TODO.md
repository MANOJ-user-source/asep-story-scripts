# ASEP Game Scripts - Improvement TODO List

This document outlines all planned improvements for better user comfort and story presentation.

---

## ✅ COMPLETED

### 1. Snow Effect Improvements
- [x] Reduced wind gust frequency (5s → 15s)
- [x] Calmer wind strength (±1000 → ±200)
- [x] Longer gust duration (3s → 8s)
- [x] Slower falling speed (8-18s → 12-24s)
- [x] Added gentle swaying motion
- [x] More subtle wind streaks (opacity 0.05-0.2)
- [x] Smoother transition easing

---

## 🔥 HIGH PRIORITY - Immediate Impact

### 2. Text Readability Improvements ✅ COMPLETED
**File:** `app/scripts/level-1-scene-1-the-heist/page.tsx`
- [x] Add max-width constraint to text (65-75 characters per line)
- [x] Increase line-height to 1.8-2.0 for better readability
- [x] Add more paragraph spacing (mb-6 instead of space-y-4)
- [x] Increase base font size slightly (16px → 18px for body text)
- [x] Add text shadow for better contrast on busy backgrounds

**Implementation Notes:**
```tsx
// In Paragraph component
className="text-ice-300 leading-relaxed max-w-prose mx-auto"
style={{ lineHeight: '1.9' }}
```

### 3. Consolidated FAB Settings Menu ✅ COMPLETED
**New File:** `components/SettingsFAB.tsx`
**New File:** `context/ReadingModeContext.tsx`
**New File:** `hooks/useBookmark.ts`
- [x] Create unified Floating Action Button menu
- [x] Consolidate: Snow, Theme, Font Size, Contrast controls
- [x] Add Reduce Motion toggle
- [x] Position bottom-right, above existing snow button
- [x] Smooth slide-out animation for menu items
- [x] Add Reading Mode toggle (Normal, Immersive, Focus, Theater)
- [x] Add Bookmark functionality (Save/Remove bookmarks)

**Design:**
- Main FAB with gear/settings icon
- Expands upward to show menu items
- Glass morphism styling
- Auto-close on outside click

### 4. Max-Width Content Container
**File:** `app/scripts/level-1-scene-1-the-heist/page.tsx`
- [ ] Wrap main content in max-w-4xl container
- [ ] Center content horizontally
- [ ] Adjust for mobile responsiveness
- [ ] Ensure TOC doesn't overlap

### 5. Reduce Motion Toggle ✅ COMPLETED
**New Files:**
- `hooks/useReducedMotion.ts`
- `context/MotionContext.tsx`
- `components/MotionToggle.tsx`
- `components/MotionAttributeSync.tsx`
- [x] Detect system prefers-reduced-motion
- [x] Add manual toggle in settings
- [x] Disable snow effect when active
- [x] Disable framer-motion animations when active via CSS
- [x] Save preference to localStorage
- [x] Event-based communication
- [x] Apply data-reduce-motion attribute globally

**Implementation:**
```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

---

## 📊 MEDIUM PRIORITY - Enhanced Experience

### 6. Reading Position Auto-Save
**New File:** `hooks/useReadingProgress.ts`
- [ ] Save scroll position to localStorage on scroll
- [ ] Debounce saves (every 2 seconds)
- [ ] Key by page URL
- [ ] Show "Continue Reading" button on return
- [ ] Smooth scroll to saved position
- [ ] Add visual indicator (bookmark icon)

**Data Structure:**
```typescript
{
  "level-1-scene-1-the-heist": {
    scrollPosition: 1234,
    sectionId: "qte-1",
    timestamp: "2025-11-28T..."
  }
}
```

### 7. Enhanced Section Transitions
**File:** `app/scripts/level-1-scene-1-the-heist/page.tsx`
- [ ] Add intersection observer for sections
- [ ] Fade-in animation as sections enter viewport
- [ ] Subtle slide-up effect
- [ ] Active section highlight
- [ ] Smooth scroll behavior improvements

**Animation:**
```tsx
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
/>
```

### 8. Reading Mode Toggle
**New File:** `components/ReadingModeToggle.tsx`
- [ ] Immersive Mode: Hide nav, TOC, footer
- [ ] Focus Mode: Dim non-active sections
- [ ] Theater Mode: Narrow centered column
- [ ] Save preference to localStorage
- [ ] Keyboard shortcut (F11 or R key)

**Modes:**
- **Normal:** All UI visible
- **Immersive:** Hide chrome, keep content
- **Focus:** Spotlight current section
- **Theater:** Max-width 800px, centered

### 9. Progress Indicator with Section Markers
**File:** `components/ReadingProgress.tsx`
- [ ] Add section markers to progress bar
- [ ] Show tooltips on hover (section names)
- [ ] Click markers to jump to sections
- [ ] Display estimated time remaining
- [ ] Show current section name

**Visual:**
```
[====●====●====●====●========] 45% - "QTE #1" - 8 min left
```

### 10. Mobile Tap Target Improvements
**Files:** Multiple component files
- [ ] Increase button sizes on mobile (min 44px)
- [ ] Add more padding to QTE prompts
- [ ] Larger touch targets for TOC items
- [ ] Better spacing between interactive elements
- [ ] Add haptic feedback hints

---

## ⭐ NICE TO HAVE - Advanced Features

### 11. Story Highlights Feature
**New File:** `components/HighlightManager.tsx`
- [ ] Allow text selection and highlighting
- [ ] Save highlights to localStorage
- [ ] Color-coded highlight options
- [ ] View all highlights panel
- [ ] Export highlights as markdown
- [ ] Share highlights functionality

**Data Structure:**
```typescript
{
  text: "The MC sprints toward the glass...",
  sectionId: "chase-begins",
  color: "yellow",
  timestamp: "2024-11-28T..."
}
```

### 12. Reading Statistics Dashboard
**New File:** `components/ReadingStats.tsx`
- [ ] Track total reading time
- [ ] Completion percentage per scene
- [ ] Reading streak tracker
- [ ] Average reading speed
- [ ] Favorite sections (most time spent)
- [ ] Achievement badges

**Stats Display:**
- Total time reading
- Pages completed
- Current streak
- WPM reading speed

### 13. Decision Path Visualization
**New File:** `components/DecisionTree.tsx`
- [ ] Interactive flowchart of QTE choices
- [ ] Show alternate outcomes
- [ ] "What if" explorer
- [ ] Choice impact indicators
- [ ] Save decision history
- [ ] Compare paths with friends

**Features:**
- Visual tree diagram
- Branch indicators
- Outcome previews
- Path comparison

### 14. Atmospheric Effects
**New File:** `components/AtmosphericEffects.tsx`
- [ ] Subtle vignette effect option
- [ ] Scene-based color grading
- [ ] Ambient light shifts per mood
- [ ] Particle effects for dramatic moments
- [ ] Screen shake for explosions
- [ ] Blur effects for impact

**Scene Moods:**
- Tense: Red/orange tint
- Calm: Blue/cool tint
- Action: Desaturated, high contrast
- Emotional: Warm, soft focus

### 15. Parallax Scrolling
**Files:** Section components
- [ ] Background elements move slower
- [ ] Create depth illusion
- [ ] Subtle, not distracting
- [ ] Disable in reduced motion mode
- [ ] Snow layer parallax

---

## 🎨 VISUAL POLISH

### 16. Enhanced QTE Presentation
**File:** `app/scripts/level-1-scene-1-the-heist/page.tsx`
- [ ] Add animated pulse/glow to QTE prompts
- [ ] Sound toggle for audio cues
- [ ] Visual countdown animations
- [ ] Success/failure animations
- [ ] More dramatic styling

**Effects:**
- Pulsing border
- Glow animation
- Countdown timer ring
- Impact particles on success

### 17. Cinematic Typography
**File:** `app/scripts/level-1-scene-1-the-heist/page.tsx`
- [ ] Different weights for dialogue vs narration
- [ ] Character name styling
- [ ] Screen effect animations (shake, fade, blur)
- [ ] Typewriter effect option
- [ ] Dramatic pause indicators

### 18. Section Entry Animations
**File:** `app/scripts/level-1-scene-1-the-heist/page.tsx`
- [ ] Sections fade/slide in on scroll
- [ ] Active section subtle highlight
- [ ] Stagger child element animations
- [ ] Exit animations when scrolling away

### 19. Micro-interactions
**Files:** All interactive components
- [ ] Button hover states more pronounced
- [ ] Link previews on hover
- [ ] Smooth color transitions
- [ ] Ripple effects on click
- [ ] Loading state animations

### 20. Scene Break Animations
**New Component:** `components/SceneBreak.tsx`
- [ ] Animated dividers between scenes
- [ ] Fade transitions
- [ ] Decorative elements
- [ ] Chapter end animations
- [ ] "To be continued" effects

---

## 🔧 TECHNICAL IMPROVEMENTS

### 21. Performance Optimizations
- [ ] Lazy load components below fold
- [ ] Optimize framer-motion animations
- [ ] Reduce snow particle count on low-end devices
- [ ] Use CSS transforms instead of layout props
- [ ] Memoize expensive calculations

### 22. Accessibility Enhancements
- [ ] Better ARIA labels
- [ ] Screen reader announcements for QTEs
- [ ] Keyboard navigation improvements
- [ ] Focus indicators
- [ ] Skip links for navigation

### 23. Loading States ✅ COMPLETED
**New Files:**
- `components/ContentLoader.tsx`
- `components/ProgressiveLoader.tsx`
- `hooks/useContentLoader.ts`
- `improvements/LOADING_STATES_GUIDE.md`
- [x] Skeleton screens for content (6 variants: text, card, hero, list, scene, qte)
- [x] Smooth reveal animations (fade-in, slide-up, stagger)
- [x] Progressive content loading (ProgressiveLoader, LazyLoadWrapper, BatchLoader, SectionLoader)
- [x] Loading progress indicator (LoadingProgress component)
- [x] Multiple loader types (Spinner, DotsLoader, PulseLoader)
- [x] Custom hooks (useContentLoader, useProgressiveLoad, useLazyLoad, usePreload)
- [x] CSS animations added to globals.css
- [x] Safari compatibility (webkit prefixes)
- [x] Reduced motion support
- [x] Comprehensive documentation with examples

---

## 📱 MOBILE OPTIMIZATIONS

### 24. Touch Gestures
- [ ] Swipe left/right for section navigation
- [ ] Pull-to-refresh
- [ ] Pinch to zoom text
- [ ] Long-press for highlights

### 25. Mobile Menu Improvements
**File:** `components/TableOfContents.tsx`
- [ ] Better slide-in animation
- [ ] Faster close on selection
- [ ] Gesture-based dismiss
- [ ] Preview section on hover/long-press

---

## 🎮 ENGAGEMENT FEATURES

### 26. Keyboard Shortcuts Panel
**New File:** `components/KeyboardShortcuts.tsx`
- [ ] Press '?' to show shortcuts
- [ ] Visual overlay with all shortcuts
- [ ] Customizable shortcuts
- [ ] Quick reference card

**Default Shortcuts:**
- `J/K`: Next/Previous section
- `R`: Toggle reading mode
- `S`: Toggle snow
- `H`: Toggle highlights
- `?`: Show help

### 27. Social Sharing Enhancements
**File:** `components/ShareButtons.tsx`
- [ ] Share specific sections
- [ ] Generate preview cards
- [ ] Copy link with timestamp
- [ ] Share highlighted text
- [ ] Twitter/Reddit/Discord integration

### 28. Easter Eggs
- [ ] Secret keyboard combinations
- [ ] Hidden achievements
- [ ] Special snow patterns
- [ ] Developer commentary mode
- [ ] Konami code surprise

---

## 📝 IMPLEMENTATION NOTES

### Priority Order for Development:
1. **Week 1:** Items #2, #3, #4, #5 (Foundation)
2. **Week 2:** Items #6, #7, #8, #9 (Experience)
3. **Week 3:** Items #10, #16, #17, #18 (Polish)
4. **Week 4:** Items #11, #12, #13 (Advanced)
5. **Ongoing:** Items #14, #15, #19-28 (Nice to have)

### Testing Checklist:
- [ ] Test on mobile (iOS/Android)
- [ ] Test on tablet
- [ ] Test on desktop (various resolutions)
- [ ] Test with reduced motion enabled
- [ ] Test with screen readers
- [ ] Test keyboard-only navigation
- [ ] Test in different browsers
- [ ] Performance benchmarks

### Dependencies Needed:
```json
{
  "react-intersection-observer": "^9.x",
  "react-use": "^17.x", // for useLocalStorage
  "framer-motion": "^10.x" // (already installed)
}
```

---

## 📊 METRICS TO TRACK

Post-implementation, measure:
- Average session duration
- Completion rate per scene
- Bounce rate
- Reading speed (WPM)
- Feature usage (which toggles are most used)
- Mobile vs Desktop engagement
- Accessibility compliance score

---

**Last Updated:** 2025-11-28
**Status:** Planning Phase
**Next Action:** Implement High Priority items #2-#5
