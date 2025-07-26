import MessageBubble from "./MessageBubble";
import { Character, MessageWithReactions, ScriptStep } from "../types";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { LuChevronLeft, LuChevronRight, LuUsers } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";

interface PreviewViewProps {
  currentStep: number;
  script: ScriptStep[];
  getCharacter: (id: number | null) => Character | undefined;
  getMessagesUpToStep: (
    stepIndex: number,
    getCharacter: (id: number | null) => Character | undefined
  ) => MessageWithReactions[];
  getCurrentGroupName: (stepIndex: number, initialGroupName: string) => string;
  setView: Dispatch<SetStateAction<string>>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}
const PreviewView = ({
  currentStep,
  script,
  getCharacter,
  getMessagesUpToStep,
  getCurrentGroupName,
  setView,
  setCurrentStep,
}: PreviewViewProps) => {
  const messages = getMessagesUpToStep(currentStep, getCharacter);
  const currentName = getCurrentGroupName(currentStep, "Group Chat");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentStep]);
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
        <button
          onClick={() => setView("setup")}
          className="text-white hover:bg-blue-600 p-1 rounded"
        >
          <LuChevronLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          <LuUsers size={16} />
          <span className="font-medium">{currentName}</span>
        </div>
        <div className="w-6"></div>
      </div>

      <div className="h-96 overflow-y-auto p-4 bg-gray-50" ref={scrollRef}>
        <AnimatePresence initial={false}>
          {messages.map((message) => {
            const sender = getCharacter(message.senderId);
            if (sender) {
              return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <MessageBubble
                    key={message.id}
                    message={message}
                    character={sender}
                  />
                </motion.div>
              );
            }
          })}
        </AnimatePresence>
        {messages.length === 0 && (
          <div className="text-center text-gray-500 text-sm mt-20">
            No messages yet
          </div>
        )}
      </div>

      <div className="bg-white border-t p-4 flex items-center justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
        >
          <LuChevronLeft size={16} />
          Previous
        </button>

        <span className="text-sm text-gray-600">
          Step {currentStep + 1} of {Math.max(1, script.length)}
        </span>

        <button
          onClick={() =>
            setCurrentStep(Math.min(script.length - 1, currentStep + 1))
          }
          disabled={currentStep >= script.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600"
        >
          Next
          <LuChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default PreviewView;
