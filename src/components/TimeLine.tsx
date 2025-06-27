import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
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

export interface TimelineHandle {
  moveTo: (time: Date | number, options?: { animation?: boolean }) => void;
  zoomIn: (percentage?: number) => void;
  zoomOut: (percentage?: number) => void;
}

export const TimelineWrapper = forwardRef<TimelineHandle, TimelineProps>(
  ({ items, groups, options, onSelect, className = "", style = {} }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const timelineRef = useRef<Timeline | null>(null);

    useEffect(() => {
      if (!containerRef.current) return;

      timelineRef.current = new Timeline(
        containerRef.current,
        items,
        groups,
        options
      );

      if (onSelect) {
        timelineRef.current.on("select", onSelect);
      }

      return () => {
        timelineRef.current?.destroy();
      };
    }, []);

    useEffect(() => {
      timelineRef.current?.setItems(items);
      if (groups) timelineRef.current?.setGroups(groups);
      if (options) timelineRef.current?.setOptions(options);
    }, [items, groups, options]);

    useImperativeHandle(ref, () => ({
      moveTo: (time, options) => {
        timelineRef.current?.moveTo(time, options);
      },
      zoomIn: (percentage = 0.1) => {
        timelineRef.current?.zoomIn(percentage);
      },
      zoomOut: (percentage = 0.1) => {
        timelineRef.current?.zoomOut(percentage);
      },
    }));

    return (
      <div
        ref={containerRef}
        style={{ height: "400px", ...style }}
        className={className}
      />
    );
  }
);