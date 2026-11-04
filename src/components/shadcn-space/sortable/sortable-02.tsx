"use client";

import { DndContext, DragOverlay, PointerSensor, closestCenter, useSensor, useSensors, type DragEndEvent, type DraggableAttributes, type DraggableSyntheticListeners, type DragStartEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, rectSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { Badge } from "@/components/ui/badge";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import { useState } from "react";

type AssetType = "image" | "document" | "video" | "audio" | "featured";

type Asset = {
    id: string;
    title: string;
    description: string;
    type: AssetType;
    size?: string;
};

const typeConfig: Record<AssetType, { label: string; badgeClassName: string }> = {
    image: {
        label: "image",
        badgeClassName: "bg-muted text-foreground border-border",
    },
    document: {
        label: "document",
        badgeClassName: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    video: {
        label: "video",
        badgeClassName: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    },
    audio: {
        label: "audio",
        badgeClassName: "bg-red-500/10 text-red-400 border-red-500/20",
    },
    featured: {
        label: "featured",
        badgeClassName: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
};

const defaultAssets: Asset[] = [
    {
        id: "asset-1",
        title: "Hero Image",
        description: "Main banner image",
        type: "image",
        size: "2.4 MB",
    },
    {
        id: "asset-2",
        title: "Product Specs",
        description: "Technical documentation",
        type: "document",
        size: "1.2 MB",
    },
    {
        id: "asset-3",
        title: "Demo Video",
        description: "Product demonstration",
        type: "video",
        size: "15.7 MB",
    },
    {
        id: "asset-4",
        title: "Audio Guide",
        description: "Voice instructions",
        type: "audio",
        size: "8.3 MB",
    },
    {
        id: "asset-5",
        title: "Gallery Photo 1",
        description: "Product view 1",
        type: "image",
        size: "3.1 MB",
    },
    {
        id: "asset-6",
        title: "Gallery Photo 2",
        description: "Product view 2",
        type: "image",
        size: "2.8 MB",
    },
    {
        id: "asset-7",
        title: "User Manual",
        description: "Installation guide",
        type: "document",
        size: "4.2 MB",
    },
    {
        id: "asset-8",
        title: "Background Music",
        description: "Ambient soundtrack",
        type: "audio",
        size: "12.1 MB",
    },
    {
        id: "asset-9",
        title: "Feature Highlight",
        description: "Key product features",
        type: "featured",
    },
];

type AssetCardProps = {
    asset: Asset;
    className?: string;
    style?: React.CSSProperties;
    setNodeRef?: (node: HTMLElement | null) => void;
    attributes?: DraggableAttributes;
    listeners?: DraggableSyntheticListeners;
};

const AssetCard = ({ asset, className, style, setNodeRef, attributes, listeners }: AssetCardProps) => {
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={cn(
                "bg-card border-border flex cursor-grab flex-col gap-6 rounded-2xl border p-4 touch-none hover:bg-muted active:cursor-grabbing",
                className
            )}
        >
            <div className="flex flex-col gap-1">
                <span className="text-foreground text-sm font-semibold">{asset.title}</span>
                <span className="text-muted-foreground text-sm">{asset.description}</span>
            </div>
            <div className="flex items-center justify-between">
                <Badge
                    variant="outline"
                    className={cn("rounded-full", typeConfig[asset.type].badgeClassName)}
                >
                    {typeConfig[asset.type].label}
                </Badge>
                {asset.size ? (
                    <span className="text-muted-foreground text-sm">{asset.size}</span>
                ) : null}
            </div>
        </div>
    );
};

const SortableAssetCard = ({ asset }: { asset: Asset }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
        useSortable({ id: asset.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <AssetCard
            asset={asset}
            setNodeRef={setNodeRef}
            style={style}
            attributes={attributes}
            listeners={listeners}
            className={cn(isDragging && "opacity-50")}
        />
    );
};

const SortableGridDemo = () => {
    const [assets, setAssets] = useState<Asset[]>(defaultAssets);
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
        <div className="w-full max-w-3xl">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={assets.map((asset) => asset.id)} strategy={rectSortingStrategy}>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {assets.map((asset) => (
                            <SortableAssetCard key={asset.id} asset={asset} />
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay>
                    {activeAsset ? <AssetCard asset={activeAsset} className="shadow-lg" /> : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
};

export default SortableGridDemo;
