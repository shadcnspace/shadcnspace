"use client";

import { DndContext, DragOverlay, PointerSensor, closestCenter, useSensor, useSensors, type DragEndEvent, type DragStartEvent } from "@dnd-kit/core";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { FileText, GripVertical, ImageIcon, Music, Video, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import { useState } from "react";

type AssetType = "image" | "document" | "video" | "audio";

type Asset = {
    id: string;
    title: string;
    description: string;
    type: AssetType;
    size: string;
};

const typeConfig: Record<AssetType, { icon: LucideIcon; badgeClassName: string }> = {
    image: {
        icon: ImageIcon,
        badgeClassName: "bg-muted text-foreground border-border",
    },
    document: {
        icon: FileText,
        badgeClassName: "bg-teal-400/10 text-teal-400 border-teal-400/20",
    },
    video: {
        icon: Video,
        badgeClassName: "bg-sky-400/10 text-sky-400 border-sky-400/20",
    },
    audio: {
        icon: Music,
        badgeClassName: "bg-red-500/10 text-red-400 border-red-500/20",
    },
};

const defaultAssets: Asset[] = [
    {
        id: "asset-1",
        title: "Product Demo",
        description: "Main product image",
        type: "image",
        size: "2.4 MB",
    },
    {
        id: "asset-2",
        title: "Product Specification",
        description: "Technical details document",
        type: "document",
        size: "1.2 MB",
    },
    {
        id: "asset-3",
        title: "Product Demo Video",
        description: "How to use the product",
        type: "video",
        size: "15.7 MB",
    },
    {
        id: "asset-4",
        title: "Product Audio Guide",
        description: "Audio instructions",
        type: "audio",
        size: "8.3 MB",
    },
    {
        id: "asset-5",
        title: "Product Specification",
        description: "Additional product view",
        type: "image",
        size: "3.1 MB",
    },
];

type AssetItemProps = {
    asset: Asset;
    dragHandle?: React.ReactNode;
    className?: string;
};

const AssetItem = ({ asset, dragHandle, className }: AssetItemProps) => {
    const Icon = typeConfig[asset.type].icon;

    return (
        <Item variant="outline" className={cn("bg-card rounded-2xl px-4 py-4", className)}>
            {dragHandle}
            {/* <ItemMedia variant="icon" className="text-muted-foreground">
                <Icon className="size-4" />
            </ItemMedia> */}
            <ItemContent>
                <ItemTitle className="font-semibold">{asset.title}</ItemTitle>
                <ItemDescription>{asset.description}</ItemDescription>
            </ItemContent>
            <ItemActions className="flex-col ">
                <Badge
                    variant="outline"
                    className={cn("rounded-md capitalize", typeConfig[asset.type].badgeClassName)}
                >
                    {asset.type}
                </Badge>
                <span className="text-muted-foreground text-sm">{asset.size}</span>
            </ItemActions>
        </Item>
    );
};

const SortableAssetItem = ({ asset }: { asset: Asset }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
        useSortable({ id: asset.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style}>
            <AssetItem
                asset={asset}
                className={cn(isDragging && "opacity-50")}
                dragHandle={
                    <button
                        type="button"
                        {...attributes}
                        {...listeners}
                        aria-label="Drag to reorder"
                        className="text-muted-foreground hover:text-foreground shrink-0 cursor-grab! touch-none rounded-sm outline-none focus-visible:ring-ring/50 active:cursor-grabbing!"
                    >
                        <GripVertical className="size-4" />
                    </button>
                }
            />
        </div>
    );
};

const SortableListDemo = () => {
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
        <div className="w-full max-w-lg">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={assets.map((asset) => asset.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <div className="flex flex-col gap-3">
                        {assets.map((asset) => (
                            <SortableAssetItem key={asset.id} asset={asset} />
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay>
                    {activeAsset ? (
                        <AssetItem
                            asset={activeAsset}
                            className="shadow-lg"
                            dragHandle={
                                <GripVertical className="text-muted-foreground size-4 shrink-0 cursor-grab" />
                            }
                        />
                    ) : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
};

export default SortableListDemo;
