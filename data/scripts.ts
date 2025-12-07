// ASEP Story Scripts Data
export interface Script {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
}

export const allScripts: Script[] = [
  {
    title: 'Level 1 - Scene 1: The Heist',
    description: 'The MC infiltrates a government building during a city-wide evacuation. A daring escape through collapsing buildings with multiple Quick Time Events leads to an unexpected encounter.',
    slug: 'level-1-scene-1-the-heist',
    date: '2025-11-25',
    tags: ['Level 1', 'Action', 'Cinematic', 'QTE'],
  },
  {
    title: 'Scene 2 - Part 1: The Awakening',
    description: 'MC regains consciousness in the snow after the attack, discovers a mysterious white suitcase, and rides through the devastated City-1 to reach the shelter in City-A where his family awaits.',
    slug: 'scene-2-part-1-the-awakening',
    date: '2025-12-02',
    tags: ['Scene 2', 'Drama', 'Emotional', 'Cinematic', 'Mystery'],
  },
  {
    title: 'Scene 3: Home — The White Suitcase',
    description: 'Back home after the curfew, MC discovers the white suitcase transforms into a mysterious robot. As news of the President\'s upcoming speech spreads, Father leaves urgently for the Farmland with cryptic instructions.',
    slug: 'scene-3-home-the-white-suitcase',
    date: '2025-12-07',
    tags: ['Scene 3', 'Mystery', 'Sci-Fi', 'Drama', 'Robot'],
  },
];

// Helper function to get navigation info for a script
export function getScriptNavigation(currentSlug: string) {
  const currentIndex = allScripts.findIndex(script => script.slug === currentSlug);

  if (currentIndex === -1) return { prev: null, next: null };

  return {
    prev: currentIndex > 0 ? allScripts[currentIndex - 1] : null,
    next: currentIndex < allScripts.length - 1 ? allScripts[currentIndex + 1] : null,
  };
}