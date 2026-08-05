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
  PanelRight,
  CircleStar,
} from "lucide-react";
import React from "react";

interface ComponentDetails {
  title: string;
  headingTitle?: string;
  url: string;
  icon?: string | LucideIcon;
  blockName?: string;
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
    image: "https://images.shadcnspace.com/assets/components/apple-dock.webp",
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
  "shine-border": {
    title: "Shine Border",
    headingTitle: "Shadcn Shine Border",
    url: "/components/shine-border",
    blockName: "shine-border",
    icon: AppWindowMac,
    columns: 1,
    description:"Explore a collection of awesome Shadcn Shine Border components featuring multiple customizable and interactive shine border variants built with React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/shine-border.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/shine-border"),
    ),
  },
  "number-ticker": {
    title: "Number Ticker",
    headingTitle: "Shadcn Number Ticker",
    url: "/components/number-ticker",
    blockName: "number-ticker",
    icon: AppWindowMac,
    columns: 1,
    description:"Explore a collection of awesome Shadcn Number Ticker components featuring multiple customizable and interactive number ticker variants built with React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/number-ticker.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/number-ticker"),
    ),
  },
  "spinning-text": {
    title: "Spinning Text",
    headingTitle: "Shadcn Spinning Text",
    url: "/components/spinning-text",
    blockName: "spinning-text",
    icon: AppWindowMac,
    columns: 1,
    description:"Explore a collection of awesome Shadcn Spinning Text components featuring multiple customizable and interactive spinning text variants built with React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/spinning-text.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/spinning-text"),
    ),
  },
  "date-picker": {
    title: "Date Picker",
    headingTitle: "Shadcn Date Picker",
    url: "/components/date-picker",
    blockName: "date-picker",
    icon: CalendarDays,
    columns: 2,
    description:
      "Discover a curated collection of Shadcn Date Picker components with 2 customizable and interactive date picker variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/date-picker.webp",
    component: React.lazy(
      () => import('@/app/(site)/docs/component-info/date-picker')
    ),
  },
  "file-upload": {
    title: "File Upload",
    headingTitle: "Shadcn File Upload",
    url: "/components/file-upload",
    blockName: "file-upload",
    icon: AppWindowMac,
    columns: 1,
    description:
      "Discover a curated collection of Shadcn File Upload components with 2 customizable and interactive file upload variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/file-upload.webp",
    component: React.lazy(
      () => import('@/app/(site)/docs/component-info/file-upload')
    ),
  },
  "button-group": {
    title: "Button Group",
    headingTitle: "Shadcn Button Group",
    url: "/components/button-group",
    blockName: "button-group",
    icon: AppWindowMac,
    columns: 2,
    description:
      "Discover a curated collection of Shadcn Button Group components with 6+ customizable and interactive button group variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/button-group.webp",
    component: React.lazy(
      () => import('@/app/(site)/docs/component-info/button-group')
    ),
  },
  "combobox": {
    title: "Combobox",
    headingTitle: "Shadcn Combobox",
    url: "/components/combobox",
    blockName: "combobox",
    icon: AppWindowMac,
    columns: 3,
    description:
      "Discover our Shadcn Combobox component designed for customizable and interactive selection interfaces built with React, Next.js, and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/combobox.webp",
    component: React.lazy(
      () => import('@/app/(site)/docs/component-info/combobox')
    ),
  },
  "carousel": {
    title: "Carousel",
    headingTitle: "Shadcn Carousel",
    url: "/components/carousel",
    blockName: "carousel",
    icon: AppWindowMac,
    columns: 2,
    description:
      "Discover our Shadcn Carousel component, designed for customizable and interactive UI sections built with React, Next.js, and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/carousel.webp",
    component: React.lazy(
      () => import('@/app/(site)/docs/component-info/carousel')
    ),
  },
  "alert": {
    title: "Alert",
    headingTitle: "Shadcn Alert",
    url: "/components/alert",
    blockName: "alert",
    icon: AppWindowMac,
    columns: 2,
    description: "Discover our Shadcn Alert component, designed to show important messages clearly in your interface.It is built using React, Next.js, and Tailwind CSS, making it a good fit for websites, forms, dashboards, and admin panels.",
    image: "https://images.shadcnspace.com/assets/components/alert.webp",
    component: React.lazy(
      () => import('@/app/(site)/docs/component-info/alert')
    ),
  },
  "breadcrumb": {
    title: "Breadcrumb",
    headingTitle: "Shadcn Breadcrumb",
    url: "/components/breadcrumb",
    blockName: "breadcrumb",
    icon: AppWindowMac,
    columns: 2,
    description: "Discover our Shadcn Breadcrumb component designed to help users understand where they are on a website.",
    image: "https://images.shadcnspace.com/assets/components/breadcrumb.webp",
    component: React.lazy(
      () => import('@/app/(site)/docs/component-info/breadcrumb')
    ),
  },
  "dialog": {
    title: "Dialog",
    headingTitle: "Shadcn Dialog",
    url: "/components/dialog",
    blockName: "dialog",
    icon: AppWindowMac,
    columns: 2,
    description: "Explore our Shadcn Dialog components with slide and zoom animations. Clean, accessible modal dialogs for confirmations, forms, notifications, and more.",
    image: "https://images.shadcnspace.com/assets/components/dialog.webp",
    component: React.lazy(
      () => import('@/app/(site)/docs/component-info/dialog')
    ),
  },
  "popover": {
    title: "Popover",
    headingTitle: "Shadcn Popover",
    url: "/components/popover",
    blockName: "popover",
    icon: AppWindowMac,
    columns: 3,
    description: "Explore our Shadcn Popover components designed for real-world use. Copy the code, customize it in your way, and use it in dashboards, forms, or any modern web project.",
    image: "https://images.shadcnspace.com/assets/components/popover.webp",
    component: React.lazy(
      () => import('@/app/(site)/docs/component-info/popover')
    ),
  },
  slider: {
    title: "Slider",
    url: "/components/slider",
    headingTitle: "Shadcn Slider",
    icon: SquareChevronUp,
    blockName: "slider",
    columns: 3,
    description:
      "Discover our collection of Shadcn Slider components with customizable and interactive slider variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/slider.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/slider"),
    ),
  },
  skeleton: {
    title: "Skeleton",
    url: "/components/skeleton",
    headingTitle: "Shadcn Skeleton",
    icon: SquareChevronUp,
    blockName: "skeleton",
    columns: 1,
    description:
      "Discover our collection of Shadcn Skeleton components with fully customizable and interactive skeleton variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/skeleton.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/skeleton"),
    ),
  },
  spinner: {
    title: "Spinner",
    url: "/components/spinner",
    headingTitle: "Shadcn Spinner",
    icon: SquareChevronUp,
    blockName: "spinner",
    columns: 3,
    description:
      "Discover a curated collection of Shadcn Spinner components with fully customizable and interactive spinner variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/spinner.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/spinner"),
    ),
  },
  sonner: {
    title: "Sonner",
    url: "/components/sonner",
    headingTitle: "Shadcn Sonner",
    icon: SquareChevronUp,
    blockName: "sonner",
    columns: 3,
    description:
      "Discover a curated collection of Shadcn Sonner components with 3+ customizable and interactive sonner variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/sonner.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/sonner"),
    ),
  },
  pagination: {
    title: "Pagination",
    url: "/components/pagination",
    headingTitle: "Shadcn Pagination",
    icon: SquareChevronUp,
    blockName: "pagination",
    columns: 2,
    description:
      "Discover a curated collection of Shadcn Pagination components with fully customizable and interactive pagination variants built using React and Tailwind CSS.",
    image: "https://images.shadcnspace.com/assets/components/pagination.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/pagination"),
    ),
  },
  "scroll-area": {
    title: "Scroll Area",
    url: "/components/scroll-area",
    headingTitle: "Shadcn Scroll Area",
    icon: SquareChevronUp,
    blockName: "scroll-area",
    columns: 1,
    description:
      "Explore our Shadcn Scroll Area components built using React and Tailwind CSS, made to create clean, customizable scrollable sections in your UI.",
    image: "https://images.shadcnspace.com/assets/components/scroll-area.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/scroll-area"),
    ),
  },
  "input-mask": {
    title: "Input Mask",
    url: "/components/input-mask",
    headingTitle: "Shadcn Input Mask",
    icon: TextCursorInput,
    blockName: "input-mask",
    columns: 3,
    description:
      "Explore customizable Shadcn Input Mask components built with React and Tailwind CSS for smooth and guided data entry.",
    image: "https://images.shadcnspace.com/assets/components/input-mask.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/input-mask"),
    ),
  },
  "collapsible": {
    title: "Collapsible",
    url: "/components/collapsible",
    headingTitle: "Shadcn Collapsible",
    icon: SquareChevronUp,
    blockName: "collapsible",
    columns: 1,
    description:
      "Carefully designed Shadcn Collapsible components using React and Tailwind CSS to create clean, interactive, and easy-to-use content sections.",
    image: "https://images.shadcnspace.com/assets/components/collapsible.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/collapsible"),
    ),
  },
  "progress": {
    title: "Progress",
    url: "/components/progress",
    headingTitle: "Shadcn Progress",
    icon: SquareChevronUp,
    blockName: "progress",
    columns: 1,
    description:
      "Carefully designed Shadcn Progress components using React and Tailwind CSS to create smooth and customizable progress experiences.",
    image: "https://images.shadcnspace.com/assets/components/progress.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/progress"),
    ),
  },
  "dropdown-menu": {
    title: "Dropdown Menu",
    url: "/components/dropdown-menu",
    headingTitle: "Shadcn Dropdown Menu",
    icon: SquareChevronUp,
    blockName: "dropdown-menu",
    columns: 1,
    description:
      "Explore Shadcn Dropdown Menu examples, variants, and interactive menu components built with React, Tailwind CSS, and shadcn/ui.",
    image: "https://images.shadcnspace.com/assets/blocks-images/dashboard/dropdown-blocks.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/dropdown-menu"),
    ),
  },
  "input-otp": {
    title: "Input OTP",
    url: "/components/input-otp",
    headingTitle: "Shadcn Input OTP",
    icon: SquareChevronUp,
    blockName: "input-otp",
    columns: 2,
    description:
      "Explore clean and easy-to-use Shadcn Input OTP components built with React, Tailwind CSS, and shadcn/ui for secure login and verification flows.",
    image: "https://images.shadcnspace.com/assets/components/input-otp.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/input-otp"),
    ),
  },
  "autocomplete": {
    title: "Autocomplete",
    url: "/components/autocomplete",
    headingTitle: "Shadcn Autocomplete",
    icon: SquareChevronUp,
    blockName: "autocomplete",
    columns: 2,
    description: "Ready-to-use Shadcn Autocomplete components with async search, team member search, icons, and smart suggestions. Built with React, Next.js, Tailwind CSS, Base UI.",
    image: "https://images.shadcnspace.com/assets/components/autocomplete.webp",
    component: React.lazy(() => import("@/app/(site)/docs/component-info/autocomplete")),
  },
  "context-menu": {
    title: "Context Menu",
    url: "/components/context-menu",
    headingTitle: "Shadcn Context Menu",
    icon: SquareChevronUp,
    blockName: "context-menu",
    columns: 2,
    description: "Ready-to-use Shadcn Context Menu components featuring right-click actions and animated menus, built with React, Tailwind CSS, Base UI.",
    image: "https://images.shadcnspace.com/assets/components/context-menu.webp",
    component: React.lazy(() => import("@/app/(site)/docs/component-info/context-menu")),
  },
  "command": {
    title: "Command",
    url: "/components/command",
    headingTitle: "Shadcn Command",
    icon: SquareChevronUp,
    blockName: "command",
    columns: 2,
    description: "Discover our Shadcn UI Command components and command palette variants built with React, Next.js, and Tailwind CSS, featuring Base UI implementations.",
    image: "https://images.shadcnspace.com/assets/components/command.webp",
    component: React.lazy(() => import("@/app/(site)/docs/component-info/command")),
  },
  "code-block": {
    title: "Code Block",
    url: "/components/code-block",
    headingTitle: "Shadcn Code Block",
    icon: SquareChevronUp,
    blockName: "code-block",
    columns: 2,
    description: "Discover our Shadcn Code Block components, built for displaying code snippets in a clean, readable, and developer-friendly way using React, Next.js, and Tailwind CSS. Available for both Base UI setups.",
    image: "https://images.shadcnspace.com/assets/components/code-block.webp",
    component: React.lazy(() => import("@/app/(site)/docs/component-info/code-block")),
  },
  "kbd": {
    title: "KBD",
    url: "/components/kbd",
    headingTitle: "Shadcn KBD Component",
    icon: SquareChevronUp,
    blockName: "kbd",
    columns: 2,
    description: "Our Shadcn KBD components make it simple to showcase keyboard shortcuts across modern applications. From simple key hints to grouped shortcut combinations, these examples are ready to use in your projects.",
    image: "https://images.shadcnspace.com/assets/components/kbd.webp",
    component: React.lazy(() => import("@/app/(site)/docs/component-info/kbd")),
  },
  "label": {
    title: "Label",
    url: "/components/label",
    headingTitle: "Shadcn Label",
    icon: SquareChevronUp,
    blockName: "label",
    columns: 3,
    description: "Our Shadcn Label components help users understand what each field is for without confusion. Whether you're building a login page, settings screen, contact form, or dashboard, these label examples make your forms cleaner and easier to use.",
    image: "https://images.shadcnspace.com/assets/components/label.webp",
    component: React.lazy(() => import("@/app/(site)/docs/component-info/label")),
  },
  "separator": {
    title: "Separator",
    url: "/components/separator",
    headingTitle: "Shadcn Separator Components & Examples",
    icon: SquareChevronUp,
    blockName: "separator",
    columns: 2,
    description: "Explore ready-to-use Shadcn Separator components built with React, Tailwind CSS, Base UI. Create cleaner layouts, organize content, and improve visual structure with customizable separator examples.",
    image: "https://images.shadcnspace.com/assets/components/separator.webp",
    component: React.lazy(() => import("@/app/(site)/docs/component-info/separator")),
  },
  sheet: {
    title: "Sheet",
    url: "/components/sheet",
    headingTitle: "Shadcn Sheet Components & Examples",
    icon: SquareChevronUp,
    blockName: "sheet",
    columns: 2,
    description:
      "Build responsive slide-out panels, sidebars, drawers, and overlays with our {count}+ Shadcn Sheet Components. Created with Next.js, React, TypeScript, Tailwind CSS, Base UI, and Radix UI for modern web applications.",
    image: "https://images.shadcnspace.com/assets/components/sheet.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/sheet"),
    ),
  },
  toggle: {
    title: "Toggle",
    headingTitle: "Shadcn Toggle",
    url: "/components/toggle",
    icon: ToggleRight,
    blockName: "toggle",
    columns: 3,
    description:
      "Explore a set of Shadcn Toggle components for Next.js and React apps, styled with Tailwind CSS and shadcn/ui. Ready to copy, customize, and use in real web projects.",
    image: "https://images.shadcnspace.com/assets/components/toggle.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/toggle"),
    ),
  },
  resizable: {
    title: "Resizable",
    url: "/components/resizable",
    headingTitle: "Shadcn Resizable",
    icon: SquareChevronUp,
    blockName: "resizable",
    columns: 1,
    description:
      "Explore ready-to-use Shadcn Resizable components built with React, Tailwind CSS and Base UI. Create cleaner layouts, organize content, and improve visual structure with customizable resizable examples.",
    image: "https://images.shadcnspace.com/assets/components/resizable.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/resizable"),
    ),
  },
  item: {
    title: "Item",
    url: "/components/item",
    headingTitle: "Shadcn Item",
    icon: SquareChevronUp,
    blockName: "item",
    columns: 2,
    description:
      "Explore ready-to-use Shadcn Item components built with React, Tailwind CSS, and Base UI. Create cleaner layouts, organize content, and improve visual structure with customizable item examples.",
    image: "https://images.shadcnspace.com/assets/components/item.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/item"),
    ),
  },
  field: {
    title: "Field",
    url: "/components/field",
    headingTitle: "Shadcn Field",
    icon: SquareChevronUp,
    blockName: "field",
    columns: 2,
    description:
      "Explore ready-to-use Shadcn Field components built with React, Tailwind CSS and Base UI. Create cleaner layouts, organize content, and improve visual structure with customizable field examples.",
    image: "https://images.shadcnspace.com/assets/components/field.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/field"),
    ),
  },
  stepper: {
    title: "Stepper",
    url: "/components/stepper",
    headingTitle: "Shadcn Stepper",
    icon: SquareChevronUp,
    blockName: "stepper",
    columns: 1,
    description:
      "Explore Shadcn UI Stepper components for multi-step forms and workflows. Create guided user journeys with progress tracking, interactive steps, and accessible navigation in React.",
    image: "https://images.shadcnspace.com/assets/components/stepper.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/stepper"),
    ),
  },
  "input-group": {
    title: "Input Group",
    headingTitle: "Shadcn Input Group",
    url: "/components/input-group",
    icon: TextCursorInput,
    blockName: "input-group",
    columns: 2,
    description:
      "Explore a set of Shadcn Input Group components for Next.js and React apps, styled with Tailwind CSS and shadcn/ui. Ready to copy, customize, and use in real web projects.",
    image: "https://images.shadcnspace.com/assets/components/input-group.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/input-group"),
    ),
  },
  "toggle-group": {
    title: "Toggle Group",
    headingTitle: "Shadcn Toggle Group",
    url: "/components/toggle-group",
    icon: ToggleRight,
    blockName: "toggle-group",
    columns: 2,
    description:
      "Explore a set of Shadcn Toggle Group components for Next.js and React apps, styled with Tailwind CSS and Shadcn. Ready to copy, customize, and use in real web projects.",
    image: "https://images.shadcnspace.com/assets/components/toggle-group.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/toggle-group"),
    ),
  },
  drawer: {
    title: "Drawer",
    url: "/components/drawer",
    headingTitle: "Shadcn Drawer Components & Examples",
    icon: PanelRight,
    blockName: "drawer",
    columns: 2,
    description:
      "Explore Shadcn Drawer components built with vaul. Create accessible slide-in panels, onboarding checklists, and mobile-friendly bottom sheets for React and Next.js apps.",
    image: "https://images.shadcnspace.com/assets/components/drawer.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/drawer"),
    ),
  },
  rating: {
    title: "Rating",
    headingTitle: "Shadcn Rating",
    url: "/components/rating",
    icon: CircleStar,
    blockName: "rating",
    columns: 2,
    description:
      "Explore ready-to-use, animated Shadcn Rating components for Next.js and React apps, built Base UI and Tailwind CSS. Ready to copy, customize, and use in real web projects.",
    image: "https://images.shadcnspace.com/assets/components/rating.webp",
    component: React.lazy(
      () => import("@/app/(site)/docs/component-info/rating"),
    ),
  },
  form: {
    title: "Form",
    headingTitle: "Shadcn Form",
    url: "/blocks/dashboard-ui/forms",
    blockName: "forms",
    image: "https://images.shadcnspace.com/assets/blocks-images/dashboard/form-blocks.webp",
  },
  sidebar: {
    title: "Sidebar",
    url: "/blocks/dashboard-ui/sidebars",
    headingTitle: "Shadcn Sidebar",
    blockName: "sidebars",
    image: "https://images.shadcnspace.com/assets/blocks-images/dashboard/sidebar-blocks.webp",
  },
  navbar: {
    title: "Navbar",
    url: "/blocks/marketing/navbar-section",
    headingTitle: "Shadcn Navbar",
    blockName: "navbar-section",
    image: "https://images.shadcnspace.com/assets/blocks-images/marketing/navbar-section.webp",
  },
  topbar: {
    title: "Topbar",
    url: "/blocks/dashboard-ui/topbars",
    headingTitle: "Shadcn Topbar",
    blockName: "topbars",
    image: "https://images.shadcnspace.com/assets/blocks-images/dashboard/top-bar-blocks.webp",
  },
  table: {
    title: "Table",
    url: "/blocks/dashboard-ui/tables",
    headingTitle: "Shadcn Table",
    blockName: "tables",
    image: "https://images.shadcnspace.com/assets/blocks-images/dashboard/tables-blocks.webp",
  },
};

export const components = Object.values(componentsMap);

export const groups = [
  {
    label: "Components",
    items: components,
  },
];
