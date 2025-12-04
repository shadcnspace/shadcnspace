import {
  BookTextIcon,
  ChevronDownIcon,
  ChevronsUpDown,
  CircleDotIcon,
  CircleUserRoundIcon,
  CreditCardIcon,
  Ellipsis,
  GalleryThumbnails,
  InfoIcon,
  LoaderCircleIcon,
  LoaderIcon,
  LucideIcon,
  MousePointerClickIcon,
  NotebookTabsIcon,
  RectangleHorizontalIcon,
  Route,
  Rows3Icon,
  SeparatorHorizontalIcon,
  SlidersHorizontalIcon,
  SquareCheckIcon,
  SquareChevronUpIcon,
  Table2Icon,
  TextCursorInputIcon,
  ToggleRightIcon,
  TriangleAlertIcon,
} from "lucide-react";

interface ComponentDetails {
  title: string;
  url: string;
  icon: LucideIcon;
  blockName: string;
  columns?: number;
  description?: string;
  className?: string;
  isNew?: boolean;
}

type ComponentsMap = Record<string, ComponentDetails>;

export const componentsMap: ComponentsMap = {
  accordion: {
    title: "Accordion",
    url: "/components/accordion",
    icon: SquareChevronUpIcon,
    blockName: "accordion",
    columns: 2,
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
  },
};

export const components = Object.values(componentsMap);

export const groups = [
  {
    label: "Components",
    items: components,
  },
];
