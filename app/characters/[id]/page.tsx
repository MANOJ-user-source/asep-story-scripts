import { allCharacters } from '@/data/characters';
import CharacterPageClient from './CharacterPageClient';

// Generate static params for all characters
export function generateStaticParams() {
  return allCharacters.map((character) => ({
    id: character.id,
  }));
}

export default function CharacterPage({ params }: { params: { id: string } }) {
  return <CharacterPageClient id={params.id} />;
}
