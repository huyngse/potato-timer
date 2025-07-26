import { Character, MessageWithReactions } from "../types";

interface MessageBubbleProps {
  message: MessageWithReactions;
  character: Character;
}
const MessageBubble = ({ message, character }: MessageBubbleProps) => {
  if (!character) return null;

  return (
    <div className="flex items-start gap-2 mb-4">
      <img
        src={character.profilePic}
        alt={character.username}
        className="w-8 h-8 rounded-full flex-shrink-0"
      />
      <div className="flex-1">
        <div className="text-xs text-gray-500 mb-1">{character.username}</div>
        <div className="bg-gray-200 rounded-2xl px-4 py-2 inline-block max-w-xs">
          {message.type === "image" ? (
            <img
              src={message.content}
              alt="Shared image"
              className="rounded-lg max-w-full"
            />
          ) : (
            <div className="text-sm">{message.content}</div>
          )}
        </div>
        {message.reactions.length > 0 && (
          <div className="flex gap-1 mt-1">
            {message.reactions.map((reaction, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-full px-2 py-1 text-xs flex items-center gap-1 shadow-sm"
              >
                <span>{reaction.reaction}</span>
                <span className="text-gray-600">{reaction.user.username}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
