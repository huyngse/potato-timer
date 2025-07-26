import { useEffect, useState } from 'react';
import { Character } from '../types';

const LOCAL_STORAGE_KEY = 'mmc-characters';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(characters));
  }, [characters]);

  const addCharacter = () => {
    const newCharacter = {
      id: Date.now(),
      username: `User${characters.length + 1}`,
      profilePic: `https://ui-avatars.com/api/?name=User${characters.length + 1}&background=random`
    };
    setCharacters([...characters, newCharacter]);
  };

  const updateCharacter = (id: number, field: string, value: string) => {
    setCharacters(chars =>
      chars.map(char => (char.id === id ? { ...char, [field]: value } : char))
    );
  };

  const removeCharacter = (id: number) => {
    setCharacters(chars => chars.filter(char => char.id !== id));
  };

  const getCharacter = (id: number | null) => characters.find(c => c.id === id);

  return {
    characters,
    addCharacter,
    updateCharacter,
    removeCharacter,
    getCharacter
  };
};
