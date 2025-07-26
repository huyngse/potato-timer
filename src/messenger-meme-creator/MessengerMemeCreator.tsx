import { useState } from "react";
import { useCharacters } from "./hooks/useCharacters";
import { useScript } from "./hooks/useScript";
import PreviewView from "./components/PreviewView";
import CharacterEditor from "./components/CharacterEditor";
import ScriptStepEditor from "./components/ScriptStepEditor";

const MessengerMemeCreator = () => {
  const [view, setView] = useState("setup");
  const [currentStep, setCurrentStep] = useState(0);
  const [groupName, setGroupName] = useState("Group Chat");

  const {
    characters,
    addCharacter,
    updateCharacter,
    removeCharacter,
    getCharacter,
  } = useCharacters();

  const {
    script,
    addScriptStep,
    updateScriptStep,
    removeScriptStep,
    getMessagesUpToStep,
    getCurrentGroupName,
  } = useScript(characters);

  if (view === "preview") {
    return (
      <PreviewView
        currentStep={currentStep}
        script={script}
        setView={setView}
        setCurrentStep={setCurrentStep}
        getCharacter={getCharacter}
        getMessagesUpToStep={(step) => getMessagesUpToStep(step, getCharacter)}
        getCurrentGroupName={(step) => getCurrentGroupName(step, groupName)}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Messenger Meme Creator
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <CharacterEditor
            characters={characters}
            addCharacter={addCharacter}
            updateCharacter={updateCharacter}
            removeCharacter={(id) => {
              removeCharacter(id);
              removeScriptStep(id);
            }}
          />
          <ScriptStepEditor
            script={script}
            characters={characters}
            groupName={groupName}
            setGroupName={setGroupName}
            addScriptStep={addScriptStep}
            updateScriptStep={updateScriptStep}
            removeScriptStep={removeScriptStep}
          />
        </div>

        {script.length > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setCurrentStep(0);
                setView("preview");
              }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium"
            >
              Preview Meme
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessengerMemeCreator;
