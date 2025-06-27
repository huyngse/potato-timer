import React, { useEffect, useRef } from "react";
import { Timeline } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";

interface TimelineProps {
  items: any;
  groups?: any;
  options?: any;
  onSelect?: (event: any) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const TimelineWrapper: React.FC<TimelineProps> = ({
  items,
  groups,
  options,
  onSelect,
  className = "",
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize
    timelineRef.current = new Timeline(
      containerRef.current,
      items,
      groups,
      options
    );

    // Bind events
    if (onSelect) {
      timelineRef.current.on("select", onSelect);
    }

    // Cleanup
    return () => {
      timelineRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    // Update items or options dynamically
    timelineRef.current?.setItems(items);
    if (groups) timelineRef.current?.setGroups(groups);
    if (options) timelineRef.current?.setOptions(options);
  }, [items, groups, options]);

  return (
    <div
      ref={containerRef}
      style={{ height: "400px", ...style }}
      className={className}
    />
  );
};
