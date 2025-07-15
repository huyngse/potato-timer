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
  rotation?: number;
  decorMode?: boolean;
  onUpdate: (id: string, updates: Partial<NoteProps>) => void;
  onDelete: (id: string) => void;
};

const Note = ({
  id,
  x = 100,
  y = 100,
  width = 200,
  height = 150,
  content = "",
  color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`,
  zIndex = 1,
  rotation = 0,
  decorMode = false,
  onUpdate = () => {},
  onDelete = () => {},
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
        height: Math.max(60, newHeight),
      });
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleRotate = (e: React.MouseEvent) => {
    e.stopPropagation();

    const noteElement = noteRef.current;
    if (!noteElement) return;

    const rect = noteElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const initialDx = e.clientX - centerX;
    const initialDy = e.clientY - centerY;
    const initialAngle = Math.atan2(initialDy, initialDx) * (180 / Math.PI);
    const startRotation = rotation || 0;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.clientX - centerX;
      const dy = moveEvent.clientY - centerY;
      const currentAngle = Math.atan2(dy, dx) * (180 / Math.PI);

      const angleDiff = currentAngle - initialAngle;
      const newRotation = startRotation + angleDiff;

      onUpdate(id, { rotation: newRotation });
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleDoubleClick = () => {
    onUpdate(id, { decorMode: !decorMode });
  };

  return (
    <div
      ref={noteRef}
      className={`absolute rounded overflow-hidden ${
        decorMode ? "" : "shadow-xl"
      }`}
      style={{
        top: y,
        left: x,
        width,
        height,
        backgroundColor: decorMode ? "transparent" : color,
        zIndex: zIndex ?? 1,
        transform: `rotate(${rotation ?? 0}deg)`,
        transformOrigin: "center center",
      }}
    >
      {decorMode ? (
        <div className="opacity-0 select-none py-1">Invisible</div>
      ) : (
        <div className="flex justify-between items-center py-1 bg-black/20 px-2 text-sm text-black select-none">
          <button
            onMouseDown={(e) => handleRotate(e)}
            className="cursor-pointer"
            title="Rotate me ♻️"
          >
            ♻️
          </button>
          <button
            onMouseDown={handleDrag}
            className="cursor-grab active:cursor-grabbing font-semibold flex-1 text-right px-2"
            title="Drag me 🖐️"
          >
            ⋮⋮
          </button>
          <button
            className="cursor-pointer"
            onClick={() => {
              onUpdate(id, { decorMode: true });
            }}
          >
            🌿
          </button>
          <button
            onClick={() => onDelete(id)}
            className="text-red-600 hover:text-red-800 font-bold"
          >
            ✖️
          </button>
        </div>
      )}

      {content.startsWith("data:image") ? (
        <img
          src={content}
          alt="clipboard"
          className="w-full h-[calc(100%-2rem)] object-contain"
          onDoubleClick={decorMode ? handleDoubleClick : () => {}}
        />
      ) : (
        <textarea
          readOnly={decorMode}
          tabIndex={decorMode ? -1 : 0}
          className="w-full h-[calc(100%-2rem)] resize-none bg-transparent focus:outline-none p-2"
          value={content}
          onChange={(e) => onUpdate(id, { content: e.target.value })}
          onDoubleClick={decorMode ? handleDoubleClick : () => {}}
        />
      )}

      {/* Resize handle */}
      {!decorMode && (
        <div
          onMouseDown={handleResize}
          className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize bg-black/10"
        ></div>
      )}
    </div>
  );
};

export default Note;
