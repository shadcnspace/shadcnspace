"use client";

import { DndContext, DragOverlay, PointerSensor, closestCenter, useSensor, useSensors, type DragEndEvent, type DraggableAttributes, type DraggableSyntheticListeners, type DragStartEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { ListMusic, Music2, Equal } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Track = {
    id: string;
    title: string;
    artist: string;
    album: string;
    duration: string;
    isPlaying?: boolean;
};

const defaultTracks: Track[] = [
    { id: "track-1", title: "Digital Love", artist: "Daft Punk", album: "Discovery", duration: "4:58" },
    { id: "track-2", title: "Starlight", artist: "Muse", album: "Black Holes", duration: "3:59" },
    { id: "track-3", title: "Midnight City", artist: "M83", album: "Hurry Up, We're Dreaming", duration: "4:03", isPlaying: true },
    { id: "track-4", title: "Take On Me", artist: "a-ha", album: "Hunting High and Low", duration: "3:48" },
    { id: "track-5", title: "Blue Monday", artist: "New Order", album: "Power, Corruption", duration: "7:29" },
];

type TrackRowProps = {
    track: Track;
    className?: string;
    style?: React.CSSProperties;
    setNodeRef?: (node: HTMLElement | null) => void;
    attributes?: DraggableAttributes;
    listeners?: DraggableSyntheticListeners;
};

const TrackRow = ({ track, className, style, setNodeRef, attributes, listeners }: TrackRowProps) => {
    return (
        <div
            ref={setNodeRef}
            style={style}
            className={cn(
                "bg-card border-border flex items-center gap-3 rounded-2xl border px-4 py-3",
                className
            )}
        >
            <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-lg">
                <Music2 className="text-muted-foreground size-4" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-center gap-2">
                    <span className="text-foreground truncate text-sm font-medium">{track.title}</span>
                    {track.isPlaying ? (
                        <span className="bg-muted text-muted-foreground shrink-0 rounded-full px-2 py-0.5 text-xs font-medium">
                            Playing
                        </span>
                    ) : null}
                </div>
                <span className="text-muted-foreground truncate text-sm">
                    {track.artist} · {track.album}
                </span>
            </div>
            <div className="text-muted-foreground flex shrink-0 items-center gap-4 text-sm">
                <span className="w-10 text-right tabular-nums">{track.duration}</span>
            </div>
            <button
                type="button"
                {...attributes}
                {...listeners}
                aria-label="Drag to reorder"
                className="text-muted-foreground hover:text-foreground shrink-0 cursor-grab! touch-none rounded-sm outline-none focus-visible:ring-ring/50 active:cursor-grabbing!"
            >
                <Equal className="size-4" />
            </button>
        </div>
    );
};

const SortableTrackRow = ({ track }: { track: Track }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
        useSortable({ id: track.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <TrackRow
            track={track}
            setNodeRef={setNodeRef}
            style={style}
            attributes={attributes}
            listeners={listeners}
            className={cn(isDragging && "opacity-50")}
        />
    );
};

const SortableQueueDemo = () => {
    const [tracks, setTracks] = useState<Track[]>(defaultTracks);
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 6 } })
    );

    const activeTrack = tracks.find((track) => track.id === activeId) ?? null;

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);
        if (!over || active.id === over.id) return;

        setTracks((prev) => {
            const oldIndex = prev.findIndex((track) => track.id === active.id);
            const newIndex = prev.findIndex((track) => track.id === over.id);
            return arrayMove(prev, oldIndex, newIndex);
        });
    };

    return (
        <div className="bg-card border-border w-full max-w-lg rounded-3xl border p-5">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <span className="text-foreground text-sm font-semibold">Queue</span>
                    <span className="text-muted-foreground text-sm">{tracks.length} tracks</span>
                </div>
                <span className="bg-muted text-foreground flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium">
                    <ListMusic className="size-3.5" />
                    Playlist
                </span>
            </div>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={tracks.map((track) => track.id)} strategy={verticalListSortingStrategy}>
                    <div className="flex flex-col gap-2">
                        {tracks.map((track) => (
                            <SortableTrackRow key={track.id} track={track} />
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay>
                    {activeTrack ? <TrackRow track={activeTrack} className="shadow-lg" /> : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
};

export default SortableQueueDemo;
