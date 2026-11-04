"use client";

import { DndContext, DragOverlay, PointerSensor, closestCenter, useSensor, useSensors, type DragEndEvent, type DraggableAttributes, type DraggableSyntheticListeners, type DragStartEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { GripVertical } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Step = {
    id: string;
    label: string;
};

const defaultSteps: Step[] = [
    { id: "step-1", label: "Draft the release notes" },
    { id: "step-2", label: "Review open pull requests" },
    { id: "step-3", label: "Update the changelog" },
    { id: "step-4", label: "Cut the release tag" },
    { id: "step-5", label: "Announce on the blog" },
];

type StepRowProps = {
    step: Step;
    index: number;
    className?: string;
    style?: React.CSSProperties;
    setNodeRef?: (node: HTMLElement | null) => void;
    attributes?: DraggableAttributes;
    listeners?: DraggableSyntheticListeners;
};

const StepRow = ({ step, index, className, style, setNodeRef, attributes, listeners }: StepRowProps) => {
    return (
        <div
            ref={setNodeRef}
            style={style}
            className={cn(
                "bg-card border-border flex items-center gap-3 rounded-xl border px-4 py-3",
                className
            )}
        >
            <button
                type="button"
                {...attributes}
                {...listeners}
                aria-label="Drag to reorder"
                className="text-muted-foreground hover:text-foreground shrink-0 cursor-grab! touch-none rounded-sm outline-none focus-visible:ring-ring/50 active:cursor-grabbing!"
            >
                <GripVertical className="size-4" />
            </button>
            <span className="bg-muted text-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                {index + 1}
            </span>
            <span className="text-foreground text-sm font-medium">{step.label}</span>
        </div>
    );
};

const SortableStepRow = ({ step, index }: { step: Step; index: number }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
        useSortable({ id: step.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <StepRow
            step={step}
            index={index}
            setNodeRef={setNodeRef}
            style={style}
            attributes={attributes}
            listeners={listeners}
            className={cn(isDragging && "opacity-50")}
        />
    );
};

const SortableChecklistDemo = () => {
    const [steps, setSteps] = useState<Step[]>(defaultSteps);
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 6 } })
    );

    const activeIndex = steps.findIndex((step) => step.id === activeId);
    const activeStep = activeIndex >= 0 ? steps[activeIndex] : null;

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);
        if (!over || active.id === over.id) return;

        setSteps((prev) => {
            const oldIndex = prev.findIndex((step) => step.id === active.id);
            const newIndex = prev.findIndex((step) => step.id === over.id);
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
                <SortableContext items={steps.map((step) => step.id)} strategy={verticalListSortingStrategy}>
                    <div className="flex flex-col gap-3">
                        {steps.map((step, index) => (
                            <SortableStepRow key={step.id} step={step} index={index} />
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay>
                    {activeStep ? (
                        <StepRow step={activeStep} index={activeIndex} className="shadow-lg" />
                    ) : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
};

export default SortableChecklistDemo;
