# Loading States Implementation Guide

Complete guide for using the loading states system in the ASEP Game Scripts blog.

---

## 📦 Components Overview

### 1. ContentLoader
Main component for displaying skeleton screens and smooth content reveals.

### 2. ProgressiveLoader
Loads multiple items progressively with stagger animations.

### 3. LazyLoadWrapper
Loads content when it enters the viewport.

### 4. BatchLoader
Loads content in batches with "Load More" functionality.

### 5. SectionLoader
Perfect for loading story scenes progressively.

---

## 🎯 Basic Usage

### ContentLoader - Skeleton Screens

```tsx
import ContentLoader from '@/components/ContentLoader';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ContentLoader isLoading={isLoading} variant="text">
      <p>Your content here</p>
    </ContentLoader>
  );
}
```

**Available Variants:**
- `text` - Simple text skeleton
- `card` - Card with header and content
- `hero` - Hero section skeleton
- `list` - List of items
- `scene` - Story scene skeleton
- `qte` - QTE prompt skeleton
- `custom` - Provide your own skeleton

### Example with Custom Skeleton

```tsx
<ContentLoader
  isLoading={isLoading}
  variant="custom"
  customSkeleton={
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-ice-500/20 rounded w-1/2" />
      <div className="h-4 bg-ice-500/20 rounded w-full" />
    </div>
  }
>
  <YourContent />
</ContentLoader>
```

---

## 🔄 Progressive Loading

### ProgressiveLoader - Stagger Animation

```tsx
import ProgressiveLoader from '@/components/ProgressiveLoader';

function StoryScene() {
  const paragraphs = [
    <p key="1">First paragraph...</p>,
    <p key="2">Second paragraph...</p>,
    <p key="3">Third paragraph...</p>,
  ];

  return (
    <ProgressiveLoader
      delay={300}
      staggerDelay={100}
      showSkeleton={true}
      skeletonVariant="text"
    >
      {paragraphs}
    </ProgressiveLoader>
  );
}
```

**Props:**
- `delay` - Initial delay before loading starts (ms)
- `staggerDelay` - Delay between each item (ms)
- `showSkeleton` - Show skeleton while loading
- `skeletonVariant` - Type of skeleton to show

---

## 👁️ Lazy Loading

### LazyLoadWrapper - Viewport-based Loading

```tsx
import { LazyLoadWrapper } from '@/components/ProgressiveLoader';

function HeavyComponent() {
  return (
    <LazyLoadWrapper
      threshold={0.1}
      rootMargin="100px"
      placeholder={<div className="h-64 bg-ice-500/10 animate-pulse" />}
    >
      <YourHeavyComponent />
    </LazyLoadWrapper>
  );
}
```

**Perfect for:**
- Images
- Heavy components
- Below-the-fold content
- Videos/embeds

---

## 📚 Batch Loading

### BatchLoader - Load More Functionality

```tsx
import { BatchLoader } from '@/components/ProgressiveLoader';

function CommentsList() {
  const comments = [...]; // Array of comment components

  return (
    <BatchLoader
      batchSize={10}
      batchDelay={0}
      showLoadMoreButton={true}
      loadMoreText="Load More Comments"
    >
      {comments}
    </BatchLoader>
  );
}
```

---

## 📖 Story Scene Loading

### SectionLoader - Perfect for Long Stories

```tsx
import { SectionLoader } from '@/components/ProgressiveLoader';

function LevelScene() {
  const sections = [
    {
      id: 'intro',
      content: <IntroSection />
    },
    {
      id: 'chase',
      content: <ChaseSection />
    },
    {
      id: 'qte-1',
      content: <QTESection />
    },
  ];

  return (
    <SectionLoader
      sections={sections}
      autoLoad={true}
      threshold={0.1}
    />
  );
}
```

---

## 🎨 Loading UI Components

### Spinner

```tsx
import { Spinner } from '@/components/ContentLoader';

<Spinner size="md" label="Loading..." />
```

**Sizes:** `sm`, `md`, `lg`

### Dots Loader

```tsx
import { DotsLoader } from '@/components/ContentLoader';

<DotsLoader label="Processing..." />
```

### Pulse Loader

```tsx
import { PulseLoader } from '@/components/ContentLoader';

<PulseLoader label="Fetching data..." />
```

### Progress Bar

```tsx
import { LoadingProgress } from '@/components/ContentLoader';

<LoadingProgress
  progress={75}
  label="Loading scene"
  showPercentage={true}
/>
```

---

## 🪝 Custom Hooks

### useContentLoader

```tsx
import { useContentLoader } from '@/hooks/useContentLoader';

function MyComponent() {
  const {
    isLoading,
    progress,
    startLoading,
    stopLoading,
    withLoading,
  } = useContentLoader({
    minLoadingTime: 300,
    enableProgressTracking: true,
  });

  const fetchData = async () => {
    await withLoading(async () => {
      const data = await api.fetchStory();
      return data;
    });
  };

  return (
    <div>
      {isLoading && <LoadingProgress progress={progress} />}
      <button onClick={fetchData}>Load</button>
    </div>
  );
}
```

### useProgressiveLoad

```tsx
import { useProgressiveLoad } from '@/hooks/useContentLoader';

function ImageGallery() {
  const { items, progress, loadItem, isComplete } = useProgressiveLoad([
    'image1',
    'image2',
    'image3',
  ]);

  const handleImageLoad = (id: string) => {
    loadItem(id);
  };

  return (
    <div>
      <p>Progress: {Math.round(progress)}%</p>
      {items.map(item => (
        <img
          key={item.id}
          src={`/images/${item.id}.jpg`}
          onLoad={() => handleImageLoad(item.id)}
          className={item.loaded ? 'opacity-100' : 'opacity-0'}
        />
      ))}
    </div>
  );
}
```

### useLazyLoad

```tsx
import { useLazyLoad } from '@/hooks/useContentLoader';

function LazyImage({ src, alt }: { src: string; alt: string }) {
  const { ref, isVisible, hasBeenVisible } = useLazyLoad({
    threshold: 0.1,
    rootMargin: '50px',
    once: true,
  });

  return (
    <div ref={ref}>
      {hasBeenVisible && <img src={src} alt={alt} />}
    </div>
  );
}
```

### usePreload

```tsx
import { usePreload } from '@/hooks/useContentLoader';

function CriticalResources() {
  usePreload([
    '/images/hero-bg.jpg',
    '/fonts/custom-font.woff2',
  ], {
    priority: 'high',
    as: 'image',
  });

  return <YourComponent />;
}
```

---

## 🎭 Real-World Examples

### Example 1: Loading a Story Scene

```tsx
'use client';

import { useState, useEffect } from 'react';
import ContentLoader from '@/components/ContentLoader';
import { useContentLoader } from '@/hooks/useContentLoader';

export default function ScenePage() {
  const { isLoading, withLoading } = useContentLoader({
    minLoadingTime: 500,
  });
  const [sceneData, setSceneData] = useState(null);

  useEffect(() => {
    withLoading(async () => {
      const data = await fetchSceneData();
      setSceneData(data);
    });
  }, []);

  return (
    <ContentLoader isLoading={isLoading} variant="scene">
      <div className="space-y-6">
        <h1>{sceneData?.title}</h1>
        <div>{sceneData?.content}</div>
      </div>
    </ContentLoader>
  );
}
```

### Example 2: Progressive Paragraph Loading

```tsx
import ProgressiveLoader from '@/components/ProgressiveLoader';

function NarrativeSection() {
  const paragraphs = [
    "The MC sprints toward the glass pyramid...",
    "Behind him, footsteps echo in the marble hall...",
    "He slides under a closing door...",
  ];

  return (
    <ProgressiveLoader
      delay={200}
      staggerDelay={150}
      showSkeleton={true}
      skeletonVariant="text"
    >
      {paragraphs.map((text, i) => (
        <p key={i} className="story-paragraph">
          {text}
        </p>
      ))}
    </ProgressiveLoader>
  );
}
```

### Example 3: QTE with Loading State

```tsx
import { useState } from 'react';
import ContentLoader from '@/components/ContentLoader';

function QTEPrompt() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsRevealed(true), 1000);
  }, []);

  return (
    <ContentLoader isLoading={!isRevealed} variant="qte">
      <div className="qte-prompt glass p-6 rounded-xl">
        <h3>Quick! What do you do?</h3>
        <div className="grid grid-cols-2 gap-4">
          <button>Jump</button>
          <button>Slide</button>
        </div>
      </div>
    </ContentLoader>
  );
}
```

### Example 4: Image Gallery with Lazy Load

```tsx
import { LazyLoadWrapper } from '@/components/ProgressiveLoader';

function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((src, i) => (
        <LazyLoadWrapper
          key={i}
          threshold={0.1}
          rootMargin="200px"
          placeholder={
            <div className="aspect-square bg-ice-500/10 animate-pulse rounded-lg" />
          }
        >
          <img
            src={src}
            alt={`Gallery ${i + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </LazyLoadWrapper>
      ))}
    </div>
  );
}
```

---

## 🎨 CSS Classes Available

### Animation Classes
- `.animate-pulse` - Pulsing opacity
- `.animate-spin` - Rotation
- `.animate-bounce` - Bounce effect
- `.animate-fadeIn` - Fade in
- `.animate-slideUpFadeIn` - Slide up and fade
- `.stagger-item` - Stagger animation (auto-delays)

### Skeleton Classes
- `.skeleton` - Shimmer animation
- `.skeleton-text` - Text line skeleton
- `.skeleton-heading` - Heading skeleton
- `.skeleton-card` - Card skeleton
- `.skeleton-circle` - Avatar/circle skeleton

### Utility Classes
- `.loading-overlay` - Full-screen loading overlay

---

## ⚙️ Performance Tips

### 1. Minimum Loading Time
Prevent flash of loading state for quick loads:

```tsx
const loader = useContentLoader({
  minLoadingTime: 300, // Show loader for at least 300ms
});
```

### 2. Progressive Enhancement
Load critical content first:

```tsx
<SectionLoader
  sections={[
    { id: 'critical', content: <CriticalContent /> },
    { id: 'secondary', content: <SecondaryContent /> },
  ]}
  autoLoad={true}
/>
```

### 3. Lazy Load Heavy Components
Only load when needed:

```tsx
<LazyLoadWrapper
  rootMargin="100px" // Start loading 100px before visible
  threshold={0.1}
>
  <HeavyComponent />
</LazyLoadWrapper>
```

### 4. Batch Loading for Long Lists
Don't render everything at once:

```tsx
<BatchLoader batchSize={20}>
  {longList}
</BatchLoader>
```

---

## ♿ Accessibility

All loading components respect reduced motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  .skeleton,
  .animate-pulse,
  .stagger-item {
    animation: none !important;
  }
}
```

Manual setting also supported via `data-reduce-motion` attribute.

---

## 🎯 Best Practices

### ✅ DO
- Use skeleton screens for perceived performance
- Respect user's reduced motion settings
- Show progress for long operations
- Lazy load below-the-fold content
- Use progressive loading for long stories

### ❌ DON'T
- Show loading state for < 200ms operations
- Animate everything (causes visual fatigue)
- Load all content at once (performance)
- Use generic spinners everywhere (use skeletons)
- Ignore loading states (bad UX)

---

## 🐛 Troubleshooting

### Loading Never Completes
```tsx
// Make sure to call stopLoading() or withLoading() handles it
const { stopLoading, withLoading } = useContentLoader();

// Option 1: Manual
try {
  await fetchData();
} finally {
  stopLoading(); // Always called
}

// Option 2: Automatic
await withLoading(() => fetchData()); // Handles automatically
```

### Skeleton Doesn't Match Content
```tsx
// Use custom skeleton that matches your layout
<ContentLoader
  variant="custom"
  customSkeleton={<YourMatchingSkeleton />}
>
  <YourContent />
</ContentLoader>
```

### Stagger Animation Not Working
```tsx
// Make sure children are in an array
<ProgressiveLoader>
  {items.map(item => <Item key={item.id} />)} {/* ✅ */}
</ProgressiveLoader>

// Not this:
<ProgressiveLoader>
  <Item /> {/* ❌ Single child */}
</ProgressiveLoader>
```

---

## 📚 API Reference

See the component files for full TypeScript definitions:
- [ContentLoader.tsx](../components/ContentLoader.tsx)
- [ProgressiveLoader.tsx](../components/ProgressiveLoader.tsx)
- [useContentLoader.ts](../hooks/useContentLoader.ts)

---

**Last Updated:** 2025-11-28
**Status:** Complete
**Version:** 1.0
