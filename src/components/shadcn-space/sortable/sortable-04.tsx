"use client";

import { DndContext, DragOverlay, PointerSensor, closestCenter, useSensor, useSensors, type DragEndEvent, type DraggableAttributes, type DraggableSyntheticListeners, type DragStartEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, rectSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { ImageIcon } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import { useState } from "react";

type MediaAsset = {
    id: string;
    filename: string;
    dimensions: string;
    size: string;
};

const defaultAssets: MediaAsset[] = [
    { id: "media-1", filename: "hero-banner.jpg", dimensions: "1920x1080", size: "2.4 MB" },
    { id: "media-2", filename: "product-shot.png", dimensions: "800x600", size: "1.8 MB" },
    { id: "media-3", filename: "team-photo.jpg", dimensions: "1200x800", size: "3.2 MB" },
    { id: "media-4", filename: "logo-dark.svg", dimensions: "240x60", size: "12 KB" },
    { id: "media-5", filename: "og-image.png", dimensions: "1200x630", size: "890 KB" },
    { id: "media-6", filename: "favicon.ico", dimensions: "32x32", size: "4 KB" },
];

type MediaCardProps = {
    asset: MediaAsset;
    className?: string;
    style?: React.CSSProperties;
    setNodeRef?: (node: HTMLElement | null) => void;
    attributes?: DraggableAttributes;
    listeners?: DraggableSyntheticListeners;
};

const MediaCard = ({ asset, className, style, setNodeRef, attributes, listeners }: MediaCardProps) => {
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={cn(
                "bg-muted/40 border-border flex touch-none cursor-grab flex-col items-center gap-3 rounded-xl border py-4 text-center hover:bg-muted active:cursor-grabbing h-auto",
                className
            )}
        >
            <div className="bg-background border-border flex size-10 items-center justify-center rounded-lg border">
                <ImageIcon className="text-muted-foreground size-4" />
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-foreground text-sm font-medium">{asset.filename}</span>
                <span className="text-muted-foreground text-xs">
                    {asset.dimensions} · {asset.size}
                </span>
            </div>
        </div>
    );
};

const SortableMediaCard = ({ asset }: { asset: MediaAsset }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
        useSortable({ id: asset.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <MediaCard
            asset={asset}
            setNodeRef={setNodeRef}
            style={style}
            attributes={attributes}
            listeners={listeners}
            className={cn(isDragging && "opacity-50")}
        />
    );
};

const SortableMediaLibraryDemo = () => {
    const [assets, setAssets] = useState<MediaAsset[]>(defaultAssets);
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 6 } })
    );

    const activeAsset = assets.find((asset) => asset.id === activeId) ?? null;

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);
        if (!over || active.id === over.id) return;

        setAssets((prev) => {
            const oldIndex = prev.findIndex((asset) => asset.id === active.id);
            const newIndex = prev.findIndex((asset) => asset.id === over.id);
            return arrayMove(prev, oldIndex, newIndex);
        });
    };

    return (
        <div className="bg-card border-border w-full max-w-lg rounded-3xl border p-5">
            <div className="mb-4 flex flex-col gap-1">
                <span className="text-foreground text-sm font-medium">Media Library</span>
                <span className="text-muted-foreground text-sm">Drag to reorder display priority</span>
            </div>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={assets.map((asset) => asset.id)} strategy={rectSortingStrategy}>
                    <div className="grid grid-cols-3 gap-3">
                        {assets.map((asset) => (
                            <SortableMediaCard key={asset.id} asset={asset} />
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay>
                    {activeAsset ? <MediaCard asset={activeAsset} className="shadow-lg" /> : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
};

export default SortableMediaLibraryDemo;