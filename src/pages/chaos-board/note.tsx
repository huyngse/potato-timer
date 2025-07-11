import { useRef } from "react";

export type NoteProps = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  content: string;
  color: string;
  zIndex?: number;
  onUpdate: (id: string, updates: Partial<NoteProps>) => void;
  onDelete: (id: string) => void;
};

const Note = ({
  id,
  x,
  y,
  width,
  height,
  content,
  color,
  zIndex,
  onUpdate,
  onDelete,
}: NoteProps) => {
  const noteRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent) => {
    const startX = e.pageX;
    const startY = e.pageY;
    const offsetX = startX - x;
    const offsetY = startY - y;

    const onMouseMove = (moveEvent: MouseEvent) => {
      onUpdate(id, {
        x: moveEvent.pageX - offsetX,
        y: moveEvent.pageY - offsetY,
      });
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleResize = (e: React.MouseEvent) => {
    e.stopPropagation();
    const startX = e.pageX;
    const startY = e.pageY;
    const startWidth = width;
    const startHeight = height;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = startWidth + (moveEvent.pageX - startX);
      const newHeight = startHeight + (moveEvent.pageY - startY);
      onUpdate(id, {
        width: Math.max(150, newWidth),
        height: Math.max(100, newHeight),
      });
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      ref={noteRef}
      className="absolute shadow-xl rounded overflow-hidden"
      style={{
        top: y,
        left: x,
        width,
        height,
        backgroundColor: color,
        zIndex: zIndex ?? 1,
      }}
    >
      <div className="flex justify-between items-center bg-black/20 px-2 text-sm text-black select-none">
        <div
          onMouseDown={handleDrag}
          className="cursor-move py-1 font-semibold"
        >
          Drag Me 🖐️
        </div>
        <button
          onClick={() => onDelete(id)}
          className="text-red-600 hover:text-red-800 font-bold"
        >
          ✖️
        </button>
      </div>

      {content.startsWith("data:image") ? (
        <img
          src={content}
          alt="clipboard"
          className="w-full h-[calc(100%-2rem)] object-contain"
        />
      ) : (
        <textarea
          className="w-full h-[calc(100%-2rem)] resize-none bg-transparent focus:outline-none p-2"
          value={content}
          onChange={(e) => onUpdate(id, { content: e.target.value })}
        />
      )}

      {/* Resize handle */}
      <div
        onMouseDown={handleResize}
        className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize bg-black/10"
      ></div>
    </div>
  );
};

export default Note;
