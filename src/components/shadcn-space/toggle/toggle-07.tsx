"use client";

import { useState } from "react";
import {
  Hand,
  Mic,
  MicOff,
  MonitorUp,
  Video,
  VideoOff,
} from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

const ToggleDemo = () => {
  const [mic, setMic] = useState(true);
  const [camera, setCamera] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [hand, setHand] = useState(false);

  const status = [
    mic ? "Mic on" : "Muted",
    camera ? "Camera on" : "Camera off",
    sharing && "Sharing screen",
    hand && "Hand raised",
  ].filter(Boolean);

  // Mic and camera are "on" when pressed; turning them off is the state to flag.
  const deviceClass = (on: boolean) =>
    cn(
      "size-11 rounded-full border",
      on
        ? "border-border bg-background aria-pressed:bg-background hover:bg-muted"
        : "border-orange-400/40 bg-orange-400/15 hover:bg-orange-400/25",
    );

  const extraClass =
    "size-11 rounded-full border border-border bg-background hover:bg-muted";

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 rounded-full border border-border bg-muted/40 p-2">
        <Toggle
          pressed={mic}
          onPressedChange={setMic}
          aria-label={mic ? "Mute microphone" : "Unmute microphone"}
          className={deviceClass(mic)}
        >
          {mic ? <Mic /> : <MicOff />}
        </Toggle>
        <Toggle
          pressed={camera}
          onPressedChange={setCamera}
          aria-label={camera ? "Turn camera off" : "Turn camera on"}
          className={deviceClass(camera)}
        >
          {camera ? <Video /> : <VideoOff />}
        </Toggle>
        <Toggle
          pressed={sharing}
          onPressedChange={setSharing}
          aria-label={sharing ? "Stop sharing screen" : "Share screen"}
          className={cn(
            extraClass,
            "aria-pressed:border-blue-500 aria-pressed:bg-blue-500 aria-pressed:text-white aria-pressed:hover:bg-blue-500/90",
          )}
        >
          <MonitorUp />
        </Toggle>
        <Toggle
          pressed={hand}
          onPressedChange={setHand}
          aria-label={hand ? "Lower hand" : "Raise hand"}
          className={cn(
            extraClass,
            "aria-pressed:border-amber-300 aria-pressed:bg-amber-300 aria-pressed:text-gray-950 aria-pressed:hover:bg-amber-300/90",
          )}
        >
          <Hand />
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {status.join(", ")}
      </p>
    </div>
  );
};

export default ToggleDemo;
