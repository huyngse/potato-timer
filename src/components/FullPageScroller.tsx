import { ReactNode, useEffect, useRef, useState } from "react";

const FullPageScroller = ({ slides }: { slides: ReactNode[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll event handler to track current slide
  const onScroll = () => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const slideHeight = window.innerHeight;
    const newSlideIndex = Math.round(scrollTop / slideHeight);
    setCurrentSlide(newSlideIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
    >
      {slides.map((slideContent, index) => {
        const shouldRender =
          index >= currentSlide - 1 && index <= currentSlide + 1;
        return (
          <section
            key={index}
            className="h-screen snap-start snap-always overflow-auto"
          >
            {shouldRender ? slideContent : null}
          </section>
        );
      })}
    </div>
  );
};

export default FullPageScroller;
