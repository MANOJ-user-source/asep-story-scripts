// ASEP Characters Database

export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  firstAppearance: string;
  status: 'alive' | 'deceased' | 'unknown';
  affiliation?: string;
  traits?: string[];
  relationships?: { name: string; relation: string }[];
  imageUrl?: string;
  fullBio?: string;
}

export const allCharacters: Character[] = [
  {
    id: 'mc',
    name: 'MC (Main Character)',
    role: 'Protagonist',
    description: 'A young individual caught in the middle of a city-wide crisis. Resourceful and determined, MC navigates through chaos while uncovering mysteries about a strange white suitcase and the robot within.',
    firstAppearance: 'Level 1 - Scene 1: The Heist',
    status: 'alive',
    traits: ['Resourceful', 'Curious', 'Determined', 'Protective'],
    relationships: [
      { name: 'Mom', relation: 'Mother' },
      { name: 'Father', relation: 'Father' },
    ],
    fullBio: `The main protagonist of ASEP. A young person living in City-1 who gets caught up in extraordinary events following a mysterious attack on the city.

After surviving the initial chaos, MC discovers a white metallic suitcase that fell from a helicopter. This suitcase later transforms into a small, cute robot — though it malfunctions upon first contact.

MC shows a mix of courage and vulnerability, often making sarcastic remarks to cope with stress. Despite getting into trouble, MC deeply cares about family and tries to protect them.

Key moments:
- Survived the attack on City-1
- Discovered the mysterious white suitcase
- Witnessed the suitcase transform into a robot
- Currently grounded at home while mysteries deepen`,
  },
  {
    id: 'mom',
    name: 'Mom',
    role: 'Supporting Character',
    description: 'MC\'s mother. A protective and emotional woman who deeply worries about her child. She alternates between anger and relief when MC returns home safely.',
    firstAppearance: 'Scene 2 - Part 1: The Awakening',
    status: 'alive',
    traits: ['Protective', 'Emotional', 'Firm', 'Caring'],
    relationships: [
      { name: 'MC', relation: 'Child' },
      { name: 'Father', relation: 'Husband' },
    ],
    fullBio: `MC's mother is a central figure in the family dynamic. She demonstrates fierce protectiveness over her child, as shown when she slapped MC upon their return to the shelter — a mixture of relief and fury.

She maintains strict household rules, including grounding MC after the curfew incident. Despite her stern exterior, her actions stem from deep love and fear of losing her family.

She appears to know more about the situation than she lets on, exchanging meaningful glances with Father before his departure to the Farmland.`,
  },
  {
    id: 'father',
    name: 'Father',
    role: 'Supporting Character',
    description: 'MC\'s father. An authoritative figure who works as an emergency coordinator or shelter supervisor. He holds secrets about the ongoing crisis and the Farmland.',
    firstAppearance: 'Scene 2 - Part 1: The Awakening',
    status: 'alive',
    affiliation: 'City Emergency Services',
    traits: ['Authoritative', 'Secretive', 'Protective', 'Professional'],
    relationships: [
      { name: 'MC', relation: 'Child' },
      { name: 'Mom', relation: 'Wife' },
    ],
    fullBio: `MC's father serves as an emergency coordinator or shelter supervisor, wearing an official uniform during crisis situations. He commands respect and maintains order during the evacuation.

He demonstrates a more reserved form of care compared to Mom, shown through actions rather than words. His line "No more bike for you" reflects his concern wrapped in stern authority.

Father holds significant secrets about the current crisis. He departs urgently for the Farmland before the President's scheduled speech, instructing MC and Mom to follow the next day. His cryptic behavior and loaded glances with Mom suggest he knows more than he's revealing.

Key mysteries:
- Why is he going to the Farmland early?
- What is his connection to the President's speech?
- What secrets is he keeping from MC?`,
  },
  {
    id: 'robot',
    name: 'The Robot',
    role: 'Key Character',
    description: 'A mysterious small robot that emerged from the white suitcase. Compact with rounded edges, about the size of a large cat, with a rectangular screen for a face. Currently inactive.',
    firstAppearance: 'Scene 3: Home — The White Suitcase',
    status: 'unknown',
    traits: ['Mysterious', 'Advanced Technology', 'Compact'],
    fullBio: `The Robot is a mysterious piece of advanced technology that emerged from the white metallic suitcase. Its origins are unknown, but it fell from a helicopter during the attack on City-1.

Physical Description:
- Size of a large cat
- Compact with rounded edges
- Stubby limbs
- Smooth white shell
- Rectangular screen for a face
- Seamless construction with no visible screws, ports, or panels

The robot activated briefly when MC placed their finger on a hidden fingerprint sensor. It displayed a loading animation with pulsing blue and white colors. However, when MC touched it during the loading sequence, the robot immediately shut down and became unresponsive.

Current Status: Inactive/Malfunctioning
- No visible way to reactivate
- The fingerprint sensor has vanished into its seamless shell
- A single pixel flickered briefly when MC wasn't watching

The robot's purpose, origin, and connection to the attack remain major mysteries.`,
  },
  {
    id: 'president',
    name: 'The President',
    role: 'Background Character',
    description: 'The nation\'s leader who has remained silent about the attack. Scheduled to give a public speech at the Farmland in two days.',
    firstAppearance: 'Scene 3: Home — The White Suitcase (Mentioned)',
    status: 'alive',
    affiliation: 'Government',
    traits: ['Mysterious', 'Distant', 'Authoritative'],
    fullBio: `The President is the nation's leader, though they have yet to appear directly in the story. They are described as a stern, distant figure.

Despite the catastrophic attack on City-1 and growing public concern, the President's Office has released no official statement about the incident. This silence has only increased anxiety among citizens.

The only confirmed information is that the President will address the nation in a public speech at the Farmland, scheduled for two days after the attack. The significance of this location and timing remains unclear.

Father's urgent departure to the Farmland ahead of this speech suggests a deeper connection to these events.`,
  },
  {
    id: 'news-anchor',
    name: 'AEN News Anchor',
    role: 'Minor Character',
    description: 'A composed female news anchor who delivers emergency broadcasts on the ASEP Emergency Network (AEN).',
    firstAppearance: 'Scene 3: Home — The White Suitcase',
    status: 'alive',
    affiliation: 'ASEP Emergency Network (AEN)',
    traits: ['Professional', 'Composed', 'Informative'],
    fullBio: `The AEN News Anchor is a professional broadcaster who delivers critical information during the crisis. She works for the ASEP Emergency Network and maintains a composed demeanor even when reporting tense news.

She provides key exposition about:
- The Critical Assessment Protocol in City-1
- Sector scanning for damage and radiation
- The order to stay indoors
- The President's silence and upcoming speech at the Farmland`,
  },
  {
    id: 'shelter-family',
    name: 'The Shelter Family',
    role: 'Minor Characters',
    description: 'A family (mother, father, and young daughter) at the shelter who lost their cat "Mittens" during the evacuation from City-1.',
    firstAppearance: 'Scene 2 - Part 1: The Awakening',
    status: 'alive',
    traits: ['Grieving', 'Hopeful'],
    relationships: [
      { name: 'Mittens', relation: 'Pet Cat (Missing)' },
    ],
    fullBio: `A small family encountered at the City-A Emergency Shelter. They consist of a mother, father, and young daughter who are grieving the loss of their cat Mittens, who was left behind in City-1 during the evacuation.

The young daughter asks MC if they saw their cat, creating an emotional moment that varies based on player choice:
- If MC saved a cat earlier: MC can offer hope that Mittens might be safe
- If MC didn't save the cat: MC lies about not being in City-1, causing Mom to become suspicious

This family adds emotional depth to the story, showing the personal cost of the disaster beyond the main characters.`,
  },
];

// Helper function to get a character by ID
export function getCharacterById(id: string): Character | undefined {
  return allCharacters.find(char => char.id === id);
}

// Helper function to get characters by role
export function getCharactersByRole(role: string): Character[] {
  return allCharacters.filter(char => char.role === role);
}

// Helper function to get characters by first appearance
export function getCharactersByAppearance(scene: string): Character[] {
  return allCharacters.filter(char => char.firstAppearance.includes(scene));
}
