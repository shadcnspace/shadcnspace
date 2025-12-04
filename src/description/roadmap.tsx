import { Task } from "@/app/roadmap/page";
import { CircleCheck, Clock, GoalIcon } from "lucide-react";

export const roadmap: Task[] = [
  {
    title: "More customized Shadcn UI Components",
    description:
      "Addition of new components and blocks, including a new set of cards.",
    expectedCompletionDate: "2025-01-15",
    completionDate: "2025-01-15",
    status: "upcoming",
  },
  {
    title: "20+ Premium Shadcn Space",
    description:
      "Addition of new blocks, including hero section, testimonials section, FAQ section, and more.",
    expectedCompletionDate: "2025-01-07",
    completionDate: "2025-01-07",
    status: "inProgress",
  },
  {
    title: "Features section Shadcn Space",
    description:
      "Addition of new fully responsive blocks for features section.",
    expectedCompletionDate: "2025-12-29",
    completionDate: "2025-12-29",
    status: "completed",
  },
  {
    title: "Categories & Search Filter",
    description:
      "Added a comprehensive category and search filter in the third milestone, improving navigation and usability for users exploring components.",
    expectedCompletionDate: "2024-12-15",
    completionDate: "2024-12-15",
    status: "completed",
  },
  {
    title: "30+ Premium Shadcn Space",
    description:
      "Over 30 new premium blocks, featuring a fresh set of cards and enhanced design flexibility.",
    expectedCompletionDate: "2024-12-15",
    completionDate: "2024-12-15",
    status: "completed",
  },
  {
    title: "19 Customized Shadcn UI Components",
    description:
      "19 new customized components with numerous variants and extensive customization options to elevate your projects.",
    expectedCompletionDate: "2024-11-12",
    completionDate: "2024-11-12",
    status: "completed",
  },
  {
    title: "Initial Release: Core Components & Blocks",
    description:
      "A launch of essential components and blocks to get you started with Shadcn Space.",
    expectedCompletionDate: "2024-11-01",
    completionDate: "2024-11-01",
    status: "completed",
  },
];

export const statuses = [
  { name: "upcoming", label: "Upcoming", icon: GoalIcon },
  { name: "inProgress", label: "In Progress", icon: Clock },
  { name: "completed", label: "Completed", icon: CircleCheck },
];
