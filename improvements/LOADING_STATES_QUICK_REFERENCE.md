# Loading States - Quick Reference Card

## 🚀 Quick Start

### 1. Basic Skeleton Screen
```tsx
import ContentLoader from '@/components/ContentLoader';

<ContentLoader isLoading={loading} variant="text">
  <YourContent />
</ContentLoader>
```

### 2. Progressive Loading
```tsx
import ProgressiveLoader from '@/components/ProgressiveLoader';

<ProgressiveLoader staggerDelay={100}>
  {items.map(item => <Item key={item.id} />)}
</ProgressiveLoader>
```

### 3. Lazy Load
```tsx
import { LazyLoadWrapper } from '@/components/ProgressiveLoader';

<LazyLoadWrapper>
  <HeavyComponent />
</LazyLoadWrapper>
```

### 4. With Hook
```tsx
import { useContentLoader } from '@/hooks/useContentLoader';

const { isLoading, withLoading } = useContentLoader();
await withLoading(() => fetchData());
```

---

## 📦 All Components

| Component | Purpose | Import |
|-----------|---------|--------|
| `ContentLoader` | Skeleton screens | `@/components/ContentLoader` |
| `ProgressiveLoader` | Stagger animation | `@/components/ProgressiveLoader` |
| `LazyLoadWrapper` | Viewport loading | `@/components/ProgressiveLoader` |
| `BatchLoader` | Batch + Load More | `@/components/ProgressiveLoader` |
| `SectionLoader` | Story scenes | `@/components/ProgressiveLoader` |
| `Spinner` | Loading spinner | `@/components/ContentLoader` |
| `DotsLoader` | Dots animation | `@/components/ContentLoader` |
| `PulseLoader` | Pulse animation | `@/components/ContentLoader` |
| `LoadingProgress` | Progress bar | `@/components/ContentLoader` |

---

## 🪝 All Hooks

| Hook | Purpose | Import |
|------|---------|--------|
| `useContentLoader` | Loading state mgmt | `@/hooks/useContentLoader` |
| `useProgressiveLoad` | Track multiple items | `@/hooks/useContentLoader` |
| `useLazyLoad` | Viewport detection | `@/hooks/useContentLoader` |
| `usePreload` | Preload resources | `@/hooks/useContentLoader` |

---

## 🎨 Skeleton Variants

```tsx
variant="text"    // Simple text lines
variant="card"    // Card with header
variant="hero"    // Hero section
variant="list"    // List items
variant="scene"   // Story scene
variant="qte"     // QTE prompt
variant="custom"  // Custom skeleton
```

---

## 💫 Animation Classes

```css
.animate-pulse           /* Pulsing */
.animate-spin            /* Rotation */
.animate-bounce          /* Bounce */
.animate-fadeIn          /* Fade in */
.animate-slideUpFadeIn   /* Slide + fade */
.stagger-item            /* Auto-stagger */
```

---

## 📋 Cheat Sheet

### ContentLoader Props
```tsx
{
  isLoading: boolean;
  children: ReactNode;
  variant?: 'text' | 'card' | 'hero' | 'list' | 'scene' | 'qte' | 'custom';
  customSkeleton?: ReactNode;
  delay?: number;
  fadeInDuration?: number;
}
```

### ProgressiveLoader Props
```tsx
{
  children: ReactNode[];
  delay?: number;
  staggerDelay?: number;
  showSkeleton?: boolean;
  skeletonVariant?: string;
}
```

### useContentLoader Return
```tsx
{
  isLoading: boolean;
  progress: number;
  startLoading: () => void;
  stopLoading: () => void;
  setProgress: (n: number) => void;
  withLoading: <T>(fn: () => Promise<T>) => Promise<T>;
}
```

---

## 🎯 Common Patterns

### Pattern 1: Story Scene
```tsx
<SectionLoader
  sections={[
    { id: 'intro', content: <Intro /> },
    { id: 'action', content: <Action /> },
  ]}
  autoLoad={true}
/>
```

### Pattern 2: Image Gallery
```tsx
{images.map(src => (
  <LazyLoadWrapper
    key={src}
    placeholder={<Skeleton />}
  >
    <img src={src} />
  </LazyLoadWrapper>
))}
```

### Pattern 3: Load More
```tsx
<BatchLoader
  batchSize={10}
  showLoadMoreButton={true}
>
  {items}
</BatchLoader>
```

### Pattern 4: Async Data
```tsx
const { isLoading, withLoading } = useContentLoader();

useEffect(() => {
  withLoading(async () => {
    const data = await fetch('/api/data');
    setData(data);
  });
}, []);

<ContentLoader isLoading={isLoading} variant="card">
  <DataDisplay />
</ContentLoader>
```

---

## ⚡ Performance Tips

1. **Prevent Flash:** Use `delay` prop
   ```tsx
   <ContentLoader isLoading={loading} delay={200}>
   ```

2. **Lazy Load Heavy:** Use LazyLoadWrapper
   ```tsx
   <LazyLoadWrapper rootMargin="100px">
   ```

3. **Batch Long Lists:** Use BatchLoader
   ```tsx
   <BatchLoader batchSize={20}>
   ```

4. **Min Loading Time:** Prevent jarring quick loads
   ```tsx
   useContentLoader({ minLoadingTime: 300 })
   ```

---

## 🎨 Styling

### Custom Skeleton
```tsx
<ContentLoader
  variant="custom"
  customSkeleton={
    <div className="animate-pulse">
      <div className="h-8 bg-ice-500/20 rounded" />
    </div>
  }
>
```

### Override Animations
```css
.my-loader {
  animation-duration: 1s !important;
}
```

---

## ♿ Accessibility

```tsx
// Automatically respects:
// - prefers-reduced-motion
// - data-reduce-motion attribute

// All animations disabled when:
@media (prefers-reduced-motion: reduce) { }
[data-reduce-motion='true'] { }
```

---

## 🐛 Debug

### Loading Never Ends
```tsx
// Always use finally or withLoading
try {
  await fetch();
} finally {
  stopLoading(); // ✅ Always called
}

// OR
await withLoading(() => fetch()); // ✅ Auto-handles
```

### No Animation
```tsx
// Check reduced motion setting
console.log(matchMedia('(prefers-reduced-motion)').matches);

// Check element has class
<div className="stagger-item"> {/* ✅ */}
```

---

## 📚 Full Docs

See [LOADING_STATES_GUIDE.md](LOADING_STATES_GUIDE.md)

---

**Version:** 1.0
**Last Updated:** 2025-11-28
