import {
  LucideIcon,
  SquareChevronUp,
  HouseWifi,
  ListVideo,
  Webhook,
  Radius,
  MousePointerClick,
  CircleUserRound,
  IdCard,
  CalendarDays,
  Tag,
  TextCursorInput,
  ToggleRight,
  AppWindowMac,
} from "lucide-react";
import React from "react";

interface ComponentDetails {
  title: string;
  headingTitle?: string;
  url: string;
  icon?: string | LucideIcon;
  blockName: string;
  columns?: number;
  description?: string;
  image?: any;
  className?: string;
  isNew?: boolean;
  component?: any;
  metaKeyword?: string;
  metaTitle?: string;
  metaDescription?: string;
}

type ComponentsMap = Record<string, ComponentDetails>;

export const componentsMap: ComponentsMap = {
  accordion: {
    title: "Accordion",
    url: "/components/accordion",
    headingTitle: "Shadcn Accordion",
    icon: SquareChevronUp,
    blockName: "accordion",
    columns: 1,
    description:
      "Discover a curated collection of Shadcn Accordion components with 4+ customizable and interactive accordion variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/accordian.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/accordion"),
    ),
  },
  avatar: {
    title: "Avatar",
    url: "/components/avatar",
    headingTitle: "Shadcn Avatar",
    blockName: "avatar",
    icon: CircleUserRound,
    columns: 3,
    description:
      "Browse and use our 6+ Shadcn Avatar components built with React, Tailwind CSS, and shadcn/ui. They are ready to copy, customize, and use in real web projects.",
    image: "https://images.shadcnspace.com/assets/components/avatar.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/avatar"),
    ),
  },
  marquee: {
    title: "Marquee",
    headingTitle: "Shadcn Marquee",
    url: "/components/marquee",
    icon: HouseWifi,
    blockName: "marquee",
    columns: 1,
    description:
      "Explore our Shadcn Marquee component built using React, Tailwind CSS, and shadcn/ui. Copy the code, tweak it as needed, and use it in real projects.",
    image: "https://images.shadcnspace.com/assets/components/marquee.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/marquee"),
    ),
  },
  "animated-list": {
    title: "Animated List",
    headingTitle: "Shadcn Animated List",
    url: "/components/animated-list",
    icon: ListVideo,
    blockName: "animated-list",
    columns: 1,
    description:
      "Discover our Shadcn Animated List component built with React and Tailwind CSS. Add simple fade, slide, or stagger effects to notifications, menus, dashboards, and content lists.",
    image:
      "https://images.shadcnspace.com/assets/components/list-animation.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/animated-list"),
    ),
  },
  "apple-dock": {
    title: "Apple Dock",
    headingTitle: "Apple Dock",
    url: "/components/apple-dock",
    icon: Webhook,
    blockName: "apple-dock",
    columns: 1,
    description:
      "Discover Our Apple Dock component, a floating and interactive navigation bar inspired by macOS. Built with Shadcn, Nextjs, React and Tailwind CSS, it’s customizable, accessible, and perfect for dashboards, SaaS apps, and modern web interfaces.",
    image: "/images/components/accordion.png",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/apple-dock"),
    ),
  },
  "animated-text": {
    title: "Animated Text",
    headingTitle: "Shadcn Animated Text",
    url: "/components/animated-text",
    icon: Webhook,
    blockName: "animated-text",
    columns: 2,
    description:
      "Discover five animated text components built with React and Tailwind CSS. Add smooth, eye-catching text animations that are easy to customize and fully accessible.",
    image:
      "https://images.shadcnspace.com/assets/components/animated-text.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/animated-text"),
    ),
  },
  button: {
    headingTitle: "Shadcn Button",
    title: "Button",
    url: "/components/button",
    blockName: "button",
    icon: MousePointerClick,
    columns: 3,
    description:
      "Browse a collection of Shadcn Button components featuring 11+ responsive and customizable button variants built with React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/button.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/button"),
    ),
  },
  badge: {
    headingTitle: "Shadcn Badge",
    title: "Badge",
    url: "/components/badge",
    blockName: "badge",
    icon: IdCard,
    columns: 3,
    description:
      "Discover a curated collection of Shadcn Badge components with 11+ customizable and interactive badge variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/badge.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/badge"),
    ),
  },
  calendar: {
    title: "Calendar",
    headingTitle: "Shadcn Calendar",
    url: "/components/calendar",
    blockName: "calendar",
    columns: 4,
    icon: CalendarDays,
    description:
      "Discover a curated collection of Shadcn Calendar components with 4+ customizable and interactive calendar variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/calender.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/calendar"),
    ),
  },
  "orbiting-circles": {
    headingTitle: "Orbiting Circles",
    title: "Orbiting Circles",
    url: "/components/orbiting-circles",
    icon: Radius,
    blockName: "orbiting-circles",
    columns: 1,
    description:
      "Explore our Shadcn Orbiting Circles component, built using React, Tailwind CSS, and shadcn/ui. Works well for dashboards, landing pages, and small visual highlights where static UI feels boring.",
    image:
      "https://images.shadcnspace.com/assets/components/circular-icons.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/orbiting-circles"),
    ),
  },
  tooltip: {
    title: "Tooltip",
    headingTitle: "Shadcn Tooltip",
    url: "/components/tooltip",
    blockName: "tooltip",
    icon: Tag,
    columns: 3,
    description:
      "Explore the collection of awesome Shadcn Tooltip components, featuring 11+ tooltip variants designed for customizable and interactive UI elements built with React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/tooltip.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/tooltip"),
    ),
  },
  input: {
    title: "Input",
    headingTitle: "Shadcn Input",
    url: "/components/input",
    blockName: "input",
    icon: TextCursorInput,
    columns: 3,
    description:
      "Discover a curated collection of Shadcn Input components with 17+ customizable and interactive input variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/input.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/input"),
    ),
  },
  textarea: {
    title: "Textarea",
    headingTitle: "Shadcn Textarea",
    url: "/components/textarea",
    blockName: "textarea",
    icon: TextCursorInput,
    columns: 3,
    description:
      "Browse Our 9+ Shadcn UI textarea components built with Nextjs, React, Tailwind CSS, and shadcn/ui. Ready to copy, customize, and use in real web projects.",
    image: "https://images.shadcnspace.com/assets/components/text-area.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/textarea"),
    ),
  },
  switch: {
    title: "Switch",
    headingTitle: "Shadcn Switch",
    url: "/components/switch",
    blockName: "switch",
    icon: ToggleRight,
    columns: 3,
    description:
      "Explore a set of 6+ Shadcn Switch components for Next.js and React apps, styled with Tailwind CSS and shadcn/ui. Ready to copy, customize, and use in real web projects.",
    image: "https://images.shadcnspace.com/assets/components/switch.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/switch"),
    ),
  },
  tabs: {
    title: "Tabs",
    headingTitle: "Shadcn Tabs",
    url: "/components/tabs",
    blockName: "tabs",
    icon: AppWindowMac,
    columns: 1,
    description:
      "Discover a curated collection of Shadcn Tabs components with 4+ customizable and interactive tab variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/tabs.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/tabs"),
    ),
  },
  select: {
    title: "Select",
    headingTitle: "Shadcn Select",
    url: "/components/select",
    blockName: "select",
    icon: TextCursorInput,
    columns: 3,
    description:
      "Discover a curated collection of Shadcn Select components with 9+ customizable and interactive select variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/select.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/select"),
    ),
  },
  checkbox: {
    title: "Checkbox",
    headingTitle: "Shadcn Checkbox",
    url: "/components/checkbox",
    blockName: "checkbox",
    icon: TextCursorInput,
    columns: 3,
    description:
      "Discover a curated collection of Shadcn Checkbox components with 9+ customizable and interactive checkbox variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/checkbox.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/checkbox"),
    ),
  },
  "radio-group": {
    title: "Radio Group",
    headingTitle: "Shadcn Radio Group",
    url: "/components/radio-group",
    blockName: "radio-group",
    icon: TextCursorInput,
    columns: 2,
    description:
      "Explore 6+ Shadcn Radio Group components built with React, Tailwind CSS, and shadcn/ui. Ready to copy, customize, and use in real web projects.",
    image: "https://images.shadcnspace.com/assets/components/radio-group.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/radio-group"),
    ),
  },
  card: {
    title: "Card",
    headingTitle: "Shadcn Card",
    url: "/components/card",
    blockName: "card",
    icon: AppWindowMac,
    columns: 1,
    description:
      "Explore a collection of awesome Shadcn Card components featuring multiple customizable and interactive card variants built with React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/card.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/card"),
    ),
  },
};

export const components = Object.values(componentsMap);

export const groups = [
  {
    label: "Components",
    items: components,
  },
];
