import { LuPlus, LuX } from "react-icons/lu";
import { Character } from "../types";
interface CharacterEditorProps {
  characters: Character[];
  addCharacter: () => void;
  updateCharacter: (id: number, field: string, value: string) => void;
  removeCharacter: (id: number) => void;
}

const CharacterEditor = ({
  characters,
  addCharacter,
  updateCharacter,
  removeCharacter,
}: CharacterEditorProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Characters</h2>
        <button
          onClick={addCharacter}
          className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <LuPlus size={16} />
          Add Character
        </button>
      </div>

      <div className="space-y-4">
        {characters.map((character) => (
          <div key={character.id} className="border rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={character.profilePic}
                alt={character.username}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={character.username}
                  onChange={(e) =>
                    updateCharacter(character.id, "username", e.target.value)
                  }
                  className="w-full px-2 py-1 border rounded"
                  placeholder="Username"
                />
              </div>
              <button
                onClick={() => removeCharacter(character.id)}
                className="text-red-500 hover:bg-red-50 p-1 rounded"
              >
                <LuX size={16} />
              </button>
            </div>
            <input
              type="text"
              value={character.profilePic}
              onChange={(e) =>
                updateCharacter(character.id, "profilePic", e.target.value)
              }
              className="w-full px-2 py-1 border rounded text-sm"
              placeholder="Profile picture URL"
            />
          </div>
        ))}
        {characters.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            Add characters to get started
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterEditor;
