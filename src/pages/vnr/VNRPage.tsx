import { TimelineHandle, TimelineWrapper } from "@/components/TimeLine";
import { DataSet } from "vis-timeline/standalone";
import { ep1 } from "./data/ep1Data";
import { grp } from "./data/groupData";
import { tbt } from "./data/tbtData";
import { ep2 } from "./data/ep2Data";
import { ep3 } from "./data/ep3Data";
import { ep4 } from "./data/ep4Data";
import { ep5 } from "./data/ep5Data";
import { dhd } from "./data/dhdData";
import { ped } from "./data/pedData";
import { useEffect, useRef, useState } from "react";
import GlassButton from "@/components/GlassButton";
import { LuZoomIn, LuZoomOut } from "react-icons/lu";
const VNRPage = () => {
  const [_, setCounter] = useState(0);
  const timelineRef = useRef<TimelineHandle>(null);
  const items = new DataSet([
    ...ep1,
    ...ep2,
    ...ep3,
    ...ep4,
    ...ep5,
    ...tbt,
    ...dhd,
    ...ped,
  ]);

  const groups = new DataSet([...grp]);
  useEffect(() => {
    setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 500);
  }, []);

  return (
    <div className="h-screen">
      <div className="h-[8vh] flex justify-center items-center gap-3 px-2">
        <GlassButton
          size="small"
          onClick={() => {
            timelineRef.current?.moveTo(new Date("1860-01-01"));
          }}
        >
          Năm 1858
        </GlassButton>
        <GlassButton
          size="small"
          onClick={() => {
            timelineRef.current?.moveTo(new Date("1947-01-01"));
          }}
        >
          Năm 1945
        </GlassButton>
        <GlassButton
          size="small"
          onClick={() => {
            timelineRef.current?.moveTo(new Date("1956-01-01"));
          }}
        >
          Năm 1954
        </GlassButton>
        <GlassButton
          size="small"
          onClick={() => {
            timelineRef.current?.moveTo(new Date("1977-01-01"));
          }}
        >
          Năm 1975
        </GlassButton>
        <GlassButton
          size="small"
          onClick={() => {
            timelineRef.current?.moveTo(new Date("1988-01-01"));
          }}
        >
          Năm 1986
        </GlassButton>
        <GlassButton
          size="small"
          variant="accent"
          onClick={() => {
            timelineRef.current?.zoomOut(0.4);
          }}
        >
          <LuZoomOut className="text-lg"/>
        </GlassButton>
        <GlassButton
          size="small"
          variant="accent"
          onClick={() => {
            timelineRef.current?.zoomIn(0.4);
          }}
        >
          <LuZoomIn className="text-lg"/>
        </GlassButton>
      </div>
      <TimelineWrapper
        ref={timelineRef}
        items={items}
        groups={groups}
        onSelect={(e) => {
          console.log(e);
        }}
        options={{
          start: "2020-01-01",
          end: "2025-01-01",
          min: "1850-01-01",
          max: "2030-01-01",
          zoomMax: 315_576_000_000,
          zoomMin: 2_635_200_000,
          orientation: {
            axis: "both",
            item: "top",
          },
          verticalScroll: true,
          zoomKey: "ctrlKey",
          height: "92vh",
        }}
      />
    </div>
  );
};

export default VNRPage;
