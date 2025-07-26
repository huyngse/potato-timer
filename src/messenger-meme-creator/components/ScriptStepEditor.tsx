import { LuCamera, LuHeart, LuMessageCircle, LuPen, LuX } from "react-icons/lu";
import { Character, ScriptStep, ScriptStepType } from "../types";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
interface ScriptStepEditorProps {
  script: ScriptStep[];
  characters: Character[];
  groupName: string;
  setGroupName: Dispatch<SetStateAction<string>>;
  addScriptStep: (type: ScriptStepType) => void;
  updateScriptStep: (id: number, field: keyof ScriptStep, value: any) => void;
  removeScriptStep: (id: number) => void;
}

const ScriptStepEditor = ({
  script,
  characters,
  groupName,
  setGroupName,
  addScriptStep,
  updateScriptStep,
  removeScriptStep,
}: ScriptStepEditorProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [script.length]);
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Initial Group Name:
        </label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Group Chat"
        />
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto" ref={scrollRef}>
        {script.map((step, index) => (
          <div key={step.id} className="border rounded-lg p-3 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {index + 1}:{" "}
                {step.type.charAt(0).toUpperCase() + step.type.slice(1)}
              </span>
              <button
                onClick={() => removeScriptStep(step.id)}
                className="text-red-500 hover:bg-red-50 p-1 rounded"
              >
                <LuX size={14} />
              </button>
            </div>

            {step.type !== "groupName" && (
              <select
                value={step.senderId || ""}
                onChange={(e) =>
                  updateScriptStep(step.id, "senderId", Number(e.target.value))
                }
                className="w-full px-2 py-1 border rounded mb-2 text-sm"
              >
                <option value="">Select character...</option>
                {characters.map((char) => (
                  <option key={char.id} value={char.id}>
                    {char.username}
                  </option>
                ))}
              </select>
            )}

            {step.type === "reaction" ? (
              <div className="space-y-2">
                {step.reaction && (
                  <input
                    type="text"
                    value={step.reaction}
                    onChange={(e) =>
                      updateScriptStep(step.id, "reaction", e.target.value)
                    }
                    className="w-full px-2 py-1 border rounded text-sm"
                    placeholder="Reaction emoji"
                  />
                )}

                <select
                  value={step.targetMessageId || ""}
                  onChange={(e) =>
                    updateScriptStep(step.id, "targetMessageId", e.target.value)
                  }
                  className="w-full px-2 py-1 border rounded text-sm"
                >
                  <option value="">React to message...</option>
                  {script
                    .filter((s) => s.type === "message" || s.type === "image")
                    .map((msg, idx) => (
                      <option key={msg.id} value={msg.id}>
                        Message {idx + 1}: {msg.content.substring(0, 30)}...
                      </option>
                    ))}
                </select>
              </div>
            ) : (
              <textarea
                value={step.content}
                onChange={(e) =>
                  updateScriptStep(step.id, "content", e.target.value)
                }
                className="w-full px-2 py-1 border rounded text-sm resize-none"
                rows={2}
                placeholder={
                  step.type === "message"
                    ? "Message content..."
                    : step.type === "image"
                    ? "Image URL..."
                    : "New group name..."
                }
              />
            )}
          </div>
        ))}
        {script.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            Add script steps to create your meme
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-4">
        <h2 className="text-lg font-semibold">Script</h2>
        <div className="flex gap-2">
          <button
            onClick={() => addScriptStep("message")}
            disabled={characters.length === 0}
            className="flex items-center gap-1 px-2 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-50"
          >
            <LuMessageCircle size={14} />
            Message
          </button>
          <button
            onClick={() => addScriptStep("image")}
            disabled={characters.length === 0}
            className="flex items-center gap-1 px-2 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 disabled:opacity-50"
          >
            <LuCamera size={14} />
            Image
          </button>
          <button
            onClick={() => addScriptStep("reaction")}
            disabled={characters.length === 0 || script.length === 0}
            className="flex items-center gap-1 px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 disabled:opacity-50"
          >
            <LuHeart size={14} />
            React
          </button>
          <button
            onClick={() => addScriptStep("groupName")}
            disabled={characters.length === 0}
            className="flex items-center gap-1 px-2 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 disabled:opacity-50"
          >
            <LuPen size={14} />
            Group Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScriptStepEditor;
