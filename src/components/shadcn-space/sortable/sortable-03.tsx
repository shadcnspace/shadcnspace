"use client";

import { DndContext, DragOverlay, PointerSensor, closestCenter, useSensor, useSensors, type DragEndEvent, type DragStartEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { GripVertical } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import { useState } from "react";

type OptionItem = {
    id: string;
    label: string;
};

type OptionGroup = {
    id: string;
    title: string;
    items: OptionItem[];
};

type ActiveType = "group" | "item";

type DragData =
    | { type: "group" }
    | { type: "item"; groupId: string };

const defaultGroups: OptionGroup[] = [
    {
        id: "group-getting-started",
        title: "Getting Started",
        items: [
            { id: "lesson-introduction", label: "Introduction" },
            { id: "lesson-installation", label: "Installation" },
            { id: "lesson-project-setup", label: "Project Setup" },
        ],
    },
    {
        id: "group-components",
        title: "Components",
        items: [
            { id: "lesson-buttons", label: "Buttons" },
            { id: "lesson-forms", label: "Forms" },
            { id: "lesson-tables", label: "Tables" },
            { id: "lesson-modals", label: "Modals" },
        ],
    },
    {
        id: "group-advanced",
        title: "Advanced",
        items: [
            { id: "lesson-theming", label: "Theming" },
            { id: "lesson-animations", label: "Animations" },
            { id: "lesson-performance", label: "Performance" },
        ],
    },
];

type OptionRowProps = {
    label: string;
    dragHandle?: React.ReactNode;
    className?: string;
};

const OptionRow = ({ label, dragHandle, className }: OptionRowProps) => (
    <div
        className={cn(
            "bg-background/40 border-border flex items-center gap-3 rounded-xl border px-4 py-3",
            className
        )}
    >
        {dragHandle}
        <span className="text-foreground text-sm">{label}</span>
    </div>
);

type GroupHeaderProps = {
    title: string;
    dragHandle?: React.ReactNode;
};

const GroupHeader = ({ title, dragHandle }: GroupHeaderProps) => (
    <div className="flex items-center gap-3 px-1 pb-3">
        {dragHandle}
        <span className="text-foreground text-sm font-semibold">{title}</span>
    </div>
);

const dragHandleClassName =
    "text-muted-foreground hover:text-foreground shrink-0 cursor-grab! touch-none rounded-sm outline-none focus-visible:ring-ring/50 active:cursor-grabbing!";

const SortableOptionRow = ({ groupId, item }: { groupId: string; item: OptionItem }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: item.id,
        data: { type: "item", groupId } satisfies DragData,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style}>
            <OptionRow
                label={item.label}
                className={cn(isDragging && "opacity-50")}
                dragHandle={
                    <button
                        type="button"
                        {...attributes}
                        {...listeners}
                        aria-label="Drag to reorder"
                        className={dragHandleClassName}
                    >
                        <GripVertical className="size-4" />
                    </button>
                }
            />
        </div>
    );
};

const SortableGroupCard = ({ group }: { group: OptionGroup }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: group.id,
        data: { type: "group" } satisfies DragData,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={cn(
                "bg-card border-border rounded-2xl border p-4",
                isDragging && "opacity-50"
            )}
        >
            <GroupHeader
                title={group.title}
                dragHandle={
                    <button
                        type="button"
                        {...attributes}
                        {...listeners}
                        aria-label="Drag to reorder group"
                        className={dragHandleClassName}
                    >
                        <GripVertical className="size-4" />
                    </button>
                }
            />
            <SortableContext items={group.items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
                <div className="flex flex-col gap-2">
                    {group.items.map((item) => (
                        <SortableOptionRow key={item.id} groupId={group.id} item={item} />
                    ))}
                </div>
            </SortableContext>
        </div>
    );
};

const SortableGroupedListDemo = () => {
    const [groups, setGroups] = useState<OptionGroup[]>(defaultGroups);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [activeType, setActiveType] = useState<ActiveType | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 6 } })
    );

    const activeGroup =
        activeType === "group" ? groups.find((group) => group.id === activeId) ?? null : null;
    const activeItem =
        activeType === "item"
            ? groups.flatMap((group) => group.items).find((item) => item.id === activeId) ?? null
            : null;

    const handleDragStart = (event: DragStartEvent) => {
        const data = event.active.data.current as DragData | undefined;
        setActiveId(event.active.id as string);
        setActiveType(data?.type ?? null);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);
        setActiveType(null);
        if (!over || active.id === over.id) return;

        const activeData = active.data.current as DragData | undefined;
        const overData = over.data.current as DragData | undefined;

        if (activeData?.type === "group") {
            setGroups((prev) => {
                const oldIndex = prev.findIndex((group) => group.id === active.id);
                const newIndex = prev.findIndex((group) => group.id === over.id);
                if (oldIndex === -1 || newIndex === -1) return prev;
                return arrayMove(prev, oldIndex, newIndex);
            });
            return;
        }

        if (activeData?.type === "item") {
            const targetGroupId = overData?.type === "item" ? overData.groupId : undefined;
            if (targetGroupId !== activeData.groupId) return;

            setGroups((prev) =>
                prev.map((group) => {
                    if (group.id !== activeData.groupId) return group;
                    const oldIndex = group.items.findIndex((item) => item.id === active.id);
                    const newIndex = group.items.findIndex((item) => item.id === over.id);
                    if (oldIndex === -1 || newIndex === -1) return group;
                    return { ...group, items: arrayMove(group.items, oldIndex, newIndex) };
                })
            );
        }
    };

    return (
        <div className="w-full max-w-md">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={groups.map((group) => group.id)} strategy={verticalListSortingStrategy}>
                    <div className="flex flex-col gap-6">
                        {groups.map((group) => (
                            <SortableGroupCard key={group.id} group={group} />
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay>
                    {activeGroup ? (
                        <div className="bg-card border-border rounded-2xl border p-4 shadow-lg">
                            <GroupHeader
                                title={activeGroup.title}
                                dragHandle={
                                    <GripVertical className="text-muted-foreground size-4 shrink-0" />
                                }
                            />
                            <div className="flex flex-col gap-2">
                                {activeGroup.items.map((item) => (
                                    <OptionRow
                                        key={item.id}
                                        label={item.label}
                                        dragHandle={
                                            <GripVertical className="text-muted-foreground size-4 shrink-0" />
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    ) : activeItem ? (
                        <OptionRow
                            label={activeItem.label}
                            className="shadow-lg"
                            dragHandle={
                                <GripVertical className="text-muted-foreground size-4 shrink-0" />
                            }
                        />
                    ) : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
};

export default SortableGroupedListDemo;