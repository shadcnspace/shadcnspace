import { categories } from "./categories";

export const components = [
  {
    name: "apple-dock",
    title: "Default",
    description: "Apple Dock component",
    type: "registry:component",
    dependencies: ["motion", "lucide-react", "class-variance-authority"],
    files: [
      {
        path: "src/components/shadcn-space/apple-dock/apple-dock.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/apple-dock/apple-dock.tsx",
      },
    ],
    category: categories["apple-dock"],
  },
  {
    name: "orbiting-circles",
    title: "Default",
    description: "Orbiting Circles component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/orbiting-circles/orbiting-circles.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/orbiting-circles/orbiting-circles.tsx",
      },
      {
        path: "src/components/shadcn-space/orbiting-circles/orbiting-circles.css",
        type: "registry:style",
        target: "@components/shadcn-space/orbiting-circles/orbiting-circles.css",
      },
    ],
    category: categories["orbiting-circles"],
  },
  {
    name: "animated-list",
    title: "Default",
    description: "Animated List component",
    type: "registry:component",
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/animated-list/animated-list.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/animated-list/animated-list.tsx",
      },
    ],
    category: categories["animated-list"],
  },
  {
    name: "marquee-02",
    title: "Marquee-02 - Brands",
    description: "Brands marquee component",
    type: "registry:component",
    dependencies: [""],
    registryDependencies: [""],
    files: [
      {
        path: "src/components/shadcn-space/marquee/marquee-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/marquee/marquee-02.tsx",
      },
      {
        path: "src/components/shadcn-space/animations/marquee.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/animations/marquee.tsx",
      },
    ],
    category: categories["marquee"],
  },
  {
    name: "accordion-01",
    title: "Accordion-01 - Default",
    description: "Default accordion component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/shadcn-space/accordion/accordion-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/accordion/accordion-01.tsx",
      },
    ],
    category: categories["accordion"],
  },
  {
    name: "accordion-02",
    title: "Accordion-02 - Multi-level",
    description: "Multi-level accordion component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["accordion", "collapsible"],
    files: [
      {
        path: "src/components/shadcn-space/accordion/accordion-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/accordion/accordion-02.tsx",
      },
    ],
    category: categories["accordion"],
  },
  {
    name: "accordion-03",
    title: "Accordion-03 - Numbered FAQ",
    description:
      "FAQ accordion with numbered items, background fill on open, and +/- toggle",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/shadcn-space/accordion/accordion-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/accordion/accordion-03.tsx",
      },
    ],
    category: categories["accordion"],
  },
  {
    name: "accordion-04",
    title: "Accordion-04 - Card",
    description:
      "Accordion wrapped in a rounded card with left-aligned +/- icons and border dividers",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/shadcn-space/accordion/accordion-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/accordion/accordion-04.tsx",
      },
    ],
    category: categories["accordion"],
  },
  {
    name: "accordion-05",
    title: "Accordion-05 - Media",
    description:
      "Accordion with icon trigger, description, and an image revealed on open",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/shadcn-space/accordion/accordion-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/accordion/accordion-05.tsx",
      },
    ],
    category: categories["accordion"],
  },
  {
    name: "accordion-06",
    title: "Accordion-06 - Filled Trigger",
    description:
      "Accordion with a filled accent background on the trigger header",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/shadcn-space/accordion/accordion-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/accordion/accordion-06.tsx",
      },
    ],
    category: categories["accordion"],
  },
  {
    name: "accordion-07",
    title: "Accordion-07 - Motion Services",
    description:
      "Animated accordion with a number bubble, sliding title shift, and an expanding bottom line on hover and active states — built with motion/react for fluid spring transitions.",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/shadcn-space/accordion/accordion-07.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/accordion/accordion-07.tsx",
      },
    ],
    category: categories["accordion"],
    isNew: true
  },
  {
    name: "avatar-01",
    title: "Avatar-01 - Default",
    description: "Default avatar component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/shadcn-space/avatar/avatar-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/avatar/avatar-01.tsx",
      },
    ],
    category: categories["avatar"],
  },

  {
    name: "avatar-02",
    title: "Avatar-02 - Group",
    description: "Group avatar component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/shadcn-space/avatar/avatar-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/avatar/avatar-02.tsx",
      },
    ],
    category: categories["avatar"],
  },

  {
    name: "avatar-03",
    title: "Avatar-03 - Badge",
    description: "Badge avatar component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/shadcn-space/avatar/avatar-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/avatar/avatar-03.tsx",
      },
    ],
    category: categories["avatar"],
  },

  {
    name: "avatar-04",
    title: "Avatar-04 - Border",
    description: "Border avatar component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/shadcn-space/avatar/avatar-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/avatar/avatar-04.tsx",
      },
    ],
    category: categories["avatar"],
  },

  {
    name: "avatar-05",
    title: "Avatar-05 - Counter",
    description: "Counter avatar component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/shadcn-space/avatar/avatar-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/avatar/avatar-05.tsx",
      },
    ],
    category: categories["avatar"],
  },
  {
    name: "avatar-06",
    title: "Avatar-06 - Fallback",
    description: "Fallback avatar component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/shadcn-space/avatar/avatar-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/avatar/avatar-06.tsx",
      },
    ],
    category: categories["avatar"],
  },
  {
    name: "avatar-07",
    title: "Avatar-07 - Selectable Avatar",
    description: "Animated selectable avatar button with optional badge and name label",
    type: "registry:component",
    dependencies: ["lucide-react", "motion"],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/shadcn-space/avatar/avatar-07.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/avatar/avatar-07.tsx",
      },
    ],
    category: categories["avatar"],
    isNew: true
  },
  {
    name: "avatar-08",
    title: "Avatar-08 - Avatar stack",
    description: "Stacked avatar group with overflow count and popularity indicator",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/shadcn-space/avatar/avatar-08.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/avatar/avatar-08.tsx",
      },
    ],
    category: categories["avatar"],
    isNew: true
  },
  {
    name: "button-01",
    title: "Button-01 - With Icon",
    description: "With Icon button component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-01.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-02",
    title: "Button-02 - Shiny Text",
    description: "Shiny Text button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-02.tsx",
      },
      {
        path: "src/components/shadcn-space/button/button-02.css",
        type: "registry:style",
        target: "@components/shadcn-space/button/button-02.css",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-03",
    title: "Button-03 - Shine Hover",
    description: "Shine Hover button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-03.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-04",
    title: "Button-04 - Heartbeat Effect",
    description: "Heartbeat Effect button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-04.tsx",
      },
      {
        path: "src/components/shadcn-space/button/button-04.css",
        type: "registry:style",
        target: "@components/shadcn-space/button/button-04.css",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-05",
    title: "Button-05 - Get Figma File",
    description: "Get Figma File button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-05.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-06",
    title: "Button-06 - Animated Border",
    description: "Animated Border button component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-06.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-07",
    title: "Button-07 - Social",
    description: "Social button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-07.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-07.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-08",
    title: "Button-08 - Social Icon",
    description: "Social Icon button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-08.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-08.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-09",
    title: "Button-09 - Outline With Icon",
    description: "Outline With Icon button component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-09.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-09.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-10",
    title: "Button-10 - Save",
    description: "Save button component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-10.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-10.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-11",
    title: "Button-11 - Cancel",
    description: "Cancel button component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-11.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-11.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-12",
    title: "Button-12 - Default",
    description: "Default button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-12.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-12.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-13",
    title: "Button-13 - Size xs",
    description: "Size xs button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-13.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-13.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-14",
    title: "Button-14 - Size sm",
    description: "Size sm button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-14.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-14.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-15",
    title: "Button-15 - Size lg",
    description: "Size lg button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-15.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-15.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-16",
    title: "Button-16 - Ripple Spotlight",
    description: "Mouse-tracking ripple spotlight effect button",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-16.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-16.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-17",
    title: "Button-17 - Blob Fill",
    description: "Circle blob expands from bottom center on hover to fill the button",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-17.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-17.tsx",
      },
    ],
    category: categories["button"],
    isNew: true
  },
  {
    name: "button-18",
    title: "Button-18 - Promo Code Copy",
    description: "Animated promo code copy button with blur transition and progress fill",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-18.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button/button-18.tsx",
      },
    ],
    category: categories["button"],
    isNew: true
  },
  {
    name: "button-group-01",
    title: "Button Group-01 - Basic",
    description: "Basic button group component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button-group/button-group-01.tsx",
      },
    ],
    category: categories["button-group"],
  },
  {
    name: "button-group-02",
    title: "Button Group-02 - Vertical",
    description: "Vertical button group component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button-group/button-group-02.tsx",
      },
    ],
    category: categories["button-group"],
  },
  {
    name: "button-group-03",
    title: "Button Group-03 - Pagination",
    description: "Pagination style button group component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button-group/button-group-03.tsx",
      },
    ],
    category: categories["button-group"],
  },
  {
    name: "button-group-04",
    title: "Button Group-04 - Separator",
    description: "Button group with separators",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button-group/button-group-04.tsx",
      },
    ],
    category: categories["button-group"],
  },
  {
    name: "button-group-05",
    title: "Button Group-05 - Currency",
    description: "Currency style button group component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button-group/button-group-05.tsx",
      },
    ],
    category: categories["button-group"],
  },
  {
    name: "button-group-06",
    title: "Button Group-06 - Vercel",
    description: "Vercel style button group component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/button-group/button-group-06.tsx",
      },
    ],
    category: categories["button-group"],
  },
  {
    name: "badge-01",
    title: "Badge-01 - Default",
    description: "Badge component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/shadcn-space/badge/badge-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/badge/badge-01.tsx",
      },
    ],
    category: categories["badge"],
  },

  {
    name: "badge-02",
    title: "Badge-02 - Count",
    description: "Badge component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/shadcn-space/badge/badge-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/badge/badge-02.tsx",
      },
    ],
    category: categories["badge"],
  },
  {
    name: "badge-03",
    title: "Badge-03 - Outline",
    description: "Badge component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/shadcn-space/badge/badge-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/badge/badge-03.tsx",
      },
    ],
    category: categories["badge"],
  },
  {
    name: "badge-04",
    title: "Badge-04 - With Icon",
    description: "Badge component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/shadcn-space/badge/badge-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/badge/badge-04.tsx",
      },
    ],
    category: categories["badge"],
  },
  {
    name: "badge-05",
    title: "Badge-05 - Link",
    description: "Badge component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/shadcn-space/badge/badge-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/badge/badge-05.tsx",
      },
    ],
    category: categories["badge"],
  },
  {
    name: "badge-06",
    title: "Badge-06 - Error",
    description: "Badge component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/shadcn-space/badge/badge-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/badge/badge-06.tsx",
      },
    ],
    category: categories["badge"],
  },

  {
    name: "calendar-01",
    title: "Calendar 01 - Standard calendar",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["calendar"],
    dependencies: ["faker"],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/calendar/calendar-01.tsx",
      },
    ],
    category: categories["calendar"],
  },

  {
    name: "calendar-02",
    title: "Calendar 02 - Style calendar",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["calendar"],
    dependencies: ["faker"],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/calendar/calendar-02.tsx",
      },
    ],
    category: categories["calendar"],
  },

  {
    name: "calendar-03",
    title: "Calendar 03 - Time calendar",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["calendar", "scrollarea", "button"],
    dependencies: [""],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/calendar/calendar-03.tsx",
      },
    ],
    category: categories["calendar"],
  },

  {
    name: "calendar-04",
    title: "Calendar 04 - Dialog calendar",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["calendar", "dialog", "button"],
    dependencies: ["faker", "daterange"],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/calendar/calendar-04.tsx",
      },
    ],
    category: categories["calendar"],
  },

  {
    name: "tooltip-01",
    title: "Tooltip-01 - Hover Blog Card",
    description: "Tooltip component",
    type: "registry:component",
    registryDependencies: ["tooltip", "hover-card", "button"],
    dependencies: ["lucid"],
    files: [
      {
        path: "src/components/shadcn-space/tooltip/tooltip-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/tooltip/tooltip-01.tsx",
      },
    ],
    category: categories["tooltip"],
  },

  {
    name: "tooltip-02",
    title: "Tooltip-02 - Content Tooltip",
    description: "Tooltip component",
    type: "registry:component",
    registryDependencies: ["tooltip", "button"],
    dependencies: ["lucid"],
    files: [
      {
        path: "src/components/shadcn-space/tooltip/tooltip-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/tooltip/tooltip-02.tsx",
      },
    ],
    category: categories["tooltip"],
  },
  {
    name: "tooltip-03",
    title: "Tooltip-03 - Animated Tooltip",
    description: "Animated Tooltip component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/tooltip/tooltip-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/tooltip/tooltip-03.tsx",
      },
    ],
    category: categories["tooltip"],
  },
  {
    name: "tooltip-04",
    title: "Tooltip-04 - Rounded Tooltip",
    description: "Tooltip component",
    type: "registry:component",
    registryDependencies: ["tooltip", "button"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/tooltip/tooltip-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/tooltip/tooltip-04.tsx",
      },
    ],
    category: categories["tooltip"],
  },
  {
    name: "tooltip-05",
    title: "Tooltip-05 - Tooltip Position",
    description: "Tooltip component",
    type: "registry:component",
    registryDependencies: ["tooltip", "button"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/tooltip/tooltip-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/tooltip/tooltip-05.tsx",
      },
    ],
    category: categories["tooltip"],
  },
  {
    name: "tooltip-06",
    title: "Tooltip-06 - Avatar Tooltip",
    description: "Tooltip component",
    type: "registry:component",
    registryDependencies: ["tooltip", "button", "avatar"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/tooltip/tooltip-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/tooltip/tooltip-06.tsx",
      },
    ],
    category: categories["tooltip"],
  },
  {
    name: "tooltip-07",
    title: "Tooltip-07 - Error Tooltip",
    description: "Tooltip component",
    type: "registry:component",
    registryDependencies: ["tooltip", "button"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/tooltip/tooltip-07.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/tooltip/tooltip-07.tsx",
      },
    ],
    category: categories["tooltip"],
  },
  {
    name: "animated-text-01",
    title: "Animated Text-01 - Shiny Text",
    description: "Animated Text component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/animated-text/animated-text-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/animated-text/animated-text-01.tsx",
      },
      {
        path: "src/components/shadcn-space/animated-text/animated-text-01.css",
        type: "registry:component",
        target: "@components/shadcn-space/animated-text/animated-text-01.css",
      },
    ],
    category: categories["animated-text"],
  },
  {
    name: "animated-text-02",
    title: "Animated Text-02 - Gradient Text",
    description: "Animated Gradient Text component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/animated-text/animated-text-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/animated-text/animated-text-02.tsx",
      },
    ],
    category: categories["animated-text"],
  },
  {
    name: "animated-text-03",
    title: "Animated Text-03 - Typing",
    description: "Animated Typing component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/animated-text/animated-text-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/animated-text/animated-text-03.tsx",
      },
    ],
    category: categories["animated-text"],
  },
  {
    name: "animated-text-04",
    title: "Animated Text-04 - Rolling Text",
    description: "Animated Rolling Text component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/animated-text/animated-text-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/animated-text/animated-text-04.tsx",
      },
    ],
    category: categories["animated-text"],
  },
  {
    name: "animated-text-05",
    title: "Animated Text-05 - Shimmer Text",
    description: "Animated Shimmer Text component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/animated-text/animated-text-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/animated-text/animated-text-05.tsx",
      },
    ],
    category: categories["animated-text"],
  },

  {
    name: "input-01",
    title: "Input-01 - Input with date",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/input/input-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-01.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-02",
    title: "Input-02 - Input with time",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/input/input-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-02.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-03",
    title: "Input-03 - Input with currency",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/input/input-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-03.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-04",
    title: "Input-04 - Real Time Validation",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/input/input-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-04.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-05",
    title: "Input-05 - Input with start select",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input", "select", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input/input-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-05.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-06",
    title: "Input-06 - Input with character counter",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input/input-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-06.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-07",
    title: "Input-07 - Input with controls",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["button", "input", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/input/input-07.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-07.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-08",
    title: "Input-08 - Input with add-ons",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input/input-08.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-08.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-09",
    title: "Input-09 - Input with floating label",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input/input-09.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-09.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-10",
    title: "Input-10 - Input with clear button",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["button", "input", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/input/input-10.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-10.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-11",
    title: "Input-11 - Input with end inline button",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["button", "input", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/input/input-11.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-11.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-12",
    title: "Input-12 - Input with end button",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["button", "input", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input/input-12.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-12.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-13",
    title: "Input-13 - Input with file",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input/input-13.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-13.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-14",
    title: "Input-14 - Input with error",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input/input-14.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-14.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-15",
    title: "Input-15 - Required Input",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input/input-15.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-15.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-16",
    title: "Input-16 - Standard Input",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input/input-16.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-16.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-17",
    title: "Input-17 - Input with label",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/input/input-17.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-17.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-18",
    title: "Input-18 - Disabled",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input/input-18.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input/input-18.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "textarea-01",
    title: "Textarea-01 - Feedback Textarea",
    description: "Textarea component",
    type: "registry:component",
    registryDependencies: ["textarea"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/textarea/textarea-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/textarea/textarea-01.tsx",
      },
    ],
    category: categories["textarea"],
  },
  {
    name: "textarea-02",
    title: "Textarea-02 - Textarea with icon",
    description: "Textarea component",
    type: "registry:component",
    registryDependencies: ["textarea", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/textarea/textarea-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/textarea/textarea-02.tsx",
      },
    ],
    category: categories["textarea"],
  },
  {
    name: "textarea-03",
    title: "Textarea-03 - Required Textarea",
    description: "Textarea component",
    type: "registry:component",
    registryDependencies: ["textarea", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/textarea/textarea-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/textarea/textarea-03.tsx",
      },
    ],
    category: categories["textarea"],
  },
  {
    name: "textarea-04",
    title: "Textarea-04 - Textarea with button",
    description: "Textarea component",
    type: "registry:component",
    registryDependencies: ["textarea", "label", "button"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/textarea/textarea-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/textarea/textarea-04.tsx",
      },
    ],
    category: categories["textarea"],
  },
  {
    name: "textarea-05",
    title: "Textarea-05 - Auto growing textarea",
    description: "Textarea component",
    type: "registry:component",
    registryDependencies: ["textarea", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/textarea/textarea-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/textarea/textarea-05.tsx",
      },
    ],
    category: categories["textarea"],
  },
  {
    name: "textarea-06",
    title: "Textarea-06 - Textarea with characters left",
    description: "Textarea component",
    type: "registry:component",
    registryDependencies: ["textarea", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/textarea/textarea-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/textarea/textarea-06.tsx",
      },
    ],
    category: categories["textarea"],
  },
  {
    name: "textarea-07",
    title: "Textarea-07 - Textarea with floating label",
    description: "Textarea component",
    type: "registry:component",
    registryDependencies: ["textarea", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/textarea/textarea-07.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/textarea/textarea-07.tsx",
      },
    ],
    category: categories["textarea"],
  },
  {
    name: "textarea-08",
    title: "Textarea-08 - Textarea with helper text",
    description: "Textarea component",
    type: "registry:component",
    registryDependencies: ["textarea", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/textarea/textarea-08.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/textarea/textarea-08.tsx",
      },
    ],
    category: categories["textarea"],
  },
  {
    name: "textarea-09",
    title: "Textarea-09 - Disabled Textarea",
    description: "Textarea component",
    type: "registry:component",
    registryDependencies: ["textarea", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/textarea/textarea-09.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/textarea/textarea-09.tsx",
      },
    ],
    category: categories["textarea"],
  },
  {
    name: "select-01",
    title: "Select-01 - Required select",
    description: "Select component",
    type: "registry:component",
    registryDependencies: ["select", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/select/select-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/select/select-01.tsx",
      },
    ],
    category: categories["select"],
  },
  {
    name: "select-02",
    title: "Select-02 - Select with icon",
    description: "Select component",
    type: "registry:component",
    registryDependencies: ["select", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/select/select-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/select/select-02.tsx",
      },
    ],
    category: categories["select"],
  },
  {
    name: "select-03",
    title: "Select-03 - Select with status",
    description: "Select component",
    type: "registry:component",
    registryDependencies: ["select", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/select/select-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/select/select-03.tsx",
      },
    ],
    category: categories["select"],
  },
  {
    name: "select-04",
    title: "Select-04 - Select with timezone",
    description: "Select component",
    type: "registry:component",
    registryDependencies: ["select", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/select/select-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/select/select-04.tsx",
      },
    ],
    category: categories["select"],
  },
  {
    name: "select-05",
    title: "Select-05 - Select with overlapping label",
    description: "Select component",
    type: "registry:component",
    registryDependencies: ["select"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/select/select-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/select/select-05.tsx",
      },
    ],
    category: categories["select"],
  },
  {
    name: "select-06",
    title: "Select-06 - Select with multiple options",
    description: "Select component",
    type: "registry:component",
    registryDependencies: ["label", "multi-select"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/select/select-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/select/select-06.tsx",
      },
      {
        path: "src/components/ui/multi-select.tsx",
        type: "registry:component",
        target: "@components/ui/multi-select.tsx",
      },
    ],
    category: categories["select"],
  },
  {
    name: "select-07",
    title: "Select-07 - Select with avatars",
    description: "Select component",
    type: "registry:component",
    registryDependencies: ["select", "label", "avatar"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/select/select-07.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/select/select-07.tsx",
      },
    ],
    category: categories["select"],
  },
  {
    name: "select-08",
    title: "Select-08 - Select with leading text",
    description: "Select component",
    type: "registry:component",
    registryDependencies: ["select", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/select/select-08.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/select/select-08.tsx",
      },
    ],
    category: categories["select"],
  },
  {
    name: "select-09",
    title: "Select-09 - Select with separator",
    description: "Select component",
    type: "registry:component",
    registryDependencies: ["select", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/select/select-09.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/select/select-09.tsx",
      },
    ],
    category: categories["select"],
  },
  {
    name: "checkbox-01",
    title: "Checkbox-01 - Checkbox with sizes",
    description: "Checkbox component",
    type: "registry:component",
    registryDependencies: ["checkbox"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/checkbox/checkbox-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/checkbox/checkbox-01.tsx",
      },
    ],
    category: categories["checkbox"],
  },
  {
    name: "checkbox-02",
    title: "Checkbox-02 - Checkbox with vertical group",
    description: "Checkbox component",
    type: "registry:component",
    registryDependencies: ["checkbox"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/checkbox/checkbox-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/checkbox/checkbox-02.tsx",
      },
    ],
    category: categories["checkbox"],
  },
  {
    name: "checkbox-03",
    title: "Checkbox-03 - Checkbox with colors",
    description: "Checkbox component",
    type: "registry:component",
    registryDependencies: ["checkbox", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/checkbox/checkbox-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/checkbox/checkbox-03.tsx",
      },
    ],
    category: categories["checkbox"],
  },
  {
    name: "checkbox-04",
    title: "Checkbox-04 - Checkbox with todo list",
    description: "Checkbox component",
    type: "registry:component",
    registryDependencies: ["checkbox", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/checkbox/checkbox-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/checkbox/checkbox-04.tsx",
      },
    ],
    category: categories["checkbox"],
  },
  {
    name: "checkbox-05",
    title: "Checkbox-05 - Checkbox with list group",
    description: "Checkbox component",
    type: "registry:component",
    registryDependencies: ["checkbox", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/checkbox/checkbox-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/checkbox/checkbox-05.tsx",
      },
    ],
    category: categories["checkbox"],
  },
  {
    name: "checkbox-06",
    title: "Checkbox-06 - Checkbox with form",
    description: "Checkbox component",
    type: "registry:component",
    registryDependencies: ["checkbox", "label", "button"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/checkbox/checkbox-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/checkbox/checkbox-06.tsx",
      },
    ],
    category: categories["checkbox"],
  },
  {
    name: "checkbox-07",
    title: "Checkbox-07 - Checkbox with custom icons",
    description: "Checkbox component",
    type: "registry:component",
    registryDependencies: ["checkbox"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/checkbox/checkbox-07.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/checkbox/checkbox-07.tsx",
      },
    ],
    category: categories["checkbox"],
  },
  {
    name: "checkbox-08",
    title: "Checkbox-08 - Checkbox with dashed border",
    description: "Checkbox component",
    type: "registry:component",
    registryDependencies: ["checkbox", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/checkbox/checkbox-08.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/checkbox/checkbox-08.tsx",
      },
    ],
    category: categories["checkbox"],
  },
  {
    name: "checkbox-09",
    title: "Checkbox-09 - Checkbox with tree",
    description: "Checkbox component",
    type: "registry:component",
    registryDependencies: ["checkbox", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/checkbox/checkbox-09.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/checkbox/checkbox-09.tsx",
      },
    ],
    category: categories["checkbox"],
  },
  {
    name: "radio-group-01",
    title: "Radio Group-01 - Radio Group with tree",
    description: "Radio Group component",
    type: "registry:component",
    registryDependencies: ["label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/radio-group/radio-group-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/radio-group/radio-group-01.tsx",
      },
      {
        path: "src/components/ui/motion-radio-group.tsx",
        type: "registry:component",
        target: "@components/ui/motion-radio-group.tsx",
      },
    ],
    category: categories["radio-group"],
  },
  {
    name: "radio-group-02",
    title: "Radio Group-02 - Radio Group with tree",
    description: "Radio Group component",
    type: "registry:component",
    registryDependencies: ["label", "radio-group"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/radio-group/radio-group-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/radio-group/radio-group-02.tsx",
      },
    ],
    category: categories["radio-group"],
  },
  {
    name: "radio-group-03",
    title: "Radio Group-03 - Radio Group with tree",
    description: "Radio Group component",
    type: "registry:component",
    registryDependencies: ["label", "radio-group"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/radio-group/radio-group-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/radio-group/radio-group-03.tsx",
      },
    ],
    category: categories["radio-group"],
  },
  {
    name: "radio-group-04",
    title: "Radio Group-04 - Radio Group with tree",
    description: "Radio Group component",
    type: "registry:component",
    registryDependencies: ["label", "radio-group"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/radio-group/radio-group-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/radio-group/radio-group-04.tsx",
      },
    ],
    category: categories["radio-group"],
  },
  {
    name: "radio-group-05",
    title: "Radio Group-05 - Radio Group with tree",
    description: "Radio Group component",
    type: "registry:component",
    registryDependencies: ["label", "radio-group"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/radio-group/radio-group-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/radio-group/radio-group-05.tsx",
      },
    ],
    category: categories["radio-group"],
  },
  {
    name: "radio-group-06",
    title: "Radio Group-06 - Radio Group with tree",
    description: "Radio Group component",
    type: "registry:component",
    registryDependencies: ["badge", "label", "radio-group"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/radio-group/radio-group-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/radio-group/radio-group-06.tsx",
      },
    ],
    category: categories["radio-group"],
  },
  {
    name: "switch-01",
    title: "Switch-01 - Active effect",
    description: "Switch with active effect component",
    type: "registry:component",
    registryDependencies: ["switch", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/switch/switch-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/switch/switch-01.tsx",
      },
    ],
    category: categories["switch"],
  },
  {
    name: "switch-02",
    title: "Switch-02 - With Icon",
    description: "Switch component",
    type: "registry:component",
    registryDependencies: ["switch", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/switch/switch-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/switch/switch-02.tsx",
      },
    ],
    category: categories["switch"],
  },
  {
    name: "switch-03",
    title: "Switch-03 - Toggle theme",
    description: "Switch toggle theme component",
    type: "registry:component",
    registryDependencies: ["switch"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/switch/switch-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/switch/switch-03.tsx",
      },
    ],
    category: categories["switch"],
  },
  {
    name: "switch-04",
    title: "Switch-04 - With Description",
    description: "Switch component",
    type: "registry:component",
    registryDependencies: ["switch", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/switch/switch-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/switch/switch-04.tsx",
      },
    ],
    category: categories["switch"],
  },
  {
    name: "switch-05",
    title: "Switch-05 - With label",
    description: "Switch component",
    type: "registry:component",
    registryDependencies: ["switch", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/switch/switch-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/switch/switch-05.tsx",
      },
    ],
    category: categories["switch"],
  },
  {
    name: "switch-06",
    title: "Switch-06 - Custom Colors",
    description: "Switch component",
    type: "registry:component",
    registryDependencies: ["switch"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/switch/switch-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/switch/switch-06.tsx",
      },
    ],
    category: categories["switch"],
  },
  {
    name: "tabs-01",
    title: "Tabs-01 - Animated",
    description: "Tabs component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/tabs/tabs-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/tabs/tabs-01.tsx",
      },
    ],
    category: categories["tabs"],
  },
  {
    name: "tabs-02",
    title: "Tabs-02 - Transition",
    description: "Tabs component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/tabs/tabs-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/tabs/tabs-02.tsx",
      },
    ],
    category: categories["tabs"],
  },
  {
    name: "tabs-03",
    title: "Tabs-03 - With Icon",
    description: "Tabs component",
    type: "registry:component",
    registryDependencies: ["tabs"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/tabs/tabs-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/tabs/tabs-03.tsx",
      },
    ],
    category: categories["tabs"],
  },
  {
    name: "tabs-04",
    title: "Tabs-04 - With Count",
    description: "Tabs component",
    type: "registry:component",
    registryDependencies: ["tabs", "badge"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/tabs/tabs-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/tabs/tabs-04.tsx",
      },
    ],
    category: categories["tabs"],
  },
  {
    name: "card-01",
    title: "Card-01 - ArticlePreviewCard",
    description: "Card component",
    type: "registry:component",
    registryDependencies: ["card"],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/card/card-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-01.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-02",
    title: "Card-02 - Preview Card",
    description: "Card component",
    type: "registry:component",
    registryDependencies: ["card", "badge"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/card/card-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-02.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-03",
    title: "Card-03 - Product Card",
    description: "Card component",
    type: "registry:component",
    registryDependencies: ["card", "badge", "progress"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/card/card-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-03.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-04",
    title: "Card-04 - Welcome Card",
    description: "Card component",
    type: "registry:component",
    registryDependencies: ["card"],
    dependencies: ["lucide-react", "motion"],
    files: [
      {
        path: "src/components/shadcn-space/card/card-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-04.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-05",
    title: "Card-05 - Analytics Card",
    description: "Card component",
    type: "registry:component",
    registryDependencies: ["card", "badge", "separator"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/card/card-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-05.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-06",
    title: "Card-06 - Statistics Card",
    description: "Card component",
    type: "registry:component",
    registryDependencies: ["card", "badge"],
    dependencies: ["iconify/react"],
    files: [
      {
        path: "src/components/shadcn-space/card/card-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-06.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-07",
    title: "Card-07 - Audio Frequency Visualizer",
    description: "Card component",
    type: "registry:component",
    registryDependencies: ["card", "button"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/card/card-07.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-07.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-08",
    title: "Card-08 - Invite Card",
    description: "Card component",
    type: "registry:component",
    registryDependencies: [
      "card",
      "button",
      "input",
      "select",
      "separator",
      "label",
      "input-group",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/card/card-08.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-08.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-09",
    title: "Card-09 - Invite Member Card",
    description: "Card component",
    type: "registry:component",
    registryDependencies: ["card", "button", "empty", "avatar"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/card/card-09.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-09.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-10",
    title: "Card-10 - Appointment Card",
    description: "Card component",
    type: "registry:component",
    registryDependencies: ["card", "toggle-group", "alert", "label", "button"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/card/card-10.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-10.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-11",
    title: "Card-11 - Assign Task Card",
    description: "Card component",
    type: "registry:component",
    registryDependencies: ["card", "combobox", "avatar", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/card/card-11.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-11.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-12",
    title: "Card-12 - Weekly Card",
    description: "Card component",
    type: "registry:component",
    registryDependencies: ["card"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/card/card-12.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-12.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-13",
    title: "Card-13 - Contributed Card",
    description: "Card component",
    type: "registry:component",
    registryDependencies: ["card", "badge", "avatar"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/card/card-13.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/card/card-13.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "shine-border-01",
    title: "Shine Border-01 - Basic",
    description: "Shine Border component",
    type: "registry:component",
    registryDependencies: ["card", "button", "badge", "separator"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/shine-border/shine-border-01.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/shine-border/shine-border-01.tsx',
      }
    ],
    category: categories["shine-border"],
  },
  {
    name: "shine-border-02",
    title: "Shine Border-02 - Security Card",
    description:
      "A laser scanner shine border with a vertical gradient sweep animation wrapping an identity verification card.",
    type: "registry:component",
    registryDependencies: ["card", "button", "badge", "avatar"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/shine-border/shine-border-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/shine-border/shine-border-02.tsx",
      },
    ],
    category: categories["shine-border"],
  },
  {
    name: "shine-border-03",
    title: "Shine Border-03 - Feature Card",
    description:
      "An interactive mouse-tracking spotlight shine border that reveals a gradient glow on hover, wrapping a feature highlight card.",
    type: "registry:component",
    registryDependencies: ["card", "button", "badge"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/shine-border/shine-border-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/shine-border/shine-border-03.tsx",
      },
    ],
    category: categories["shine-border"],
  },
  {
    name: "shine-border-04",
    title: "Shine Border-04 - Stats Card",
    description:
      "A rotating meteor beam shine border with a conic gradient animation wrapping a live business stats dashboard card.",
    type: "registry:component",
    registryDependencies: ["card", "button", "badge"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/shine-border/shine-border-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/shine-border/shine-border-04.tsx",
      },
    ],
    category: categories["shine-border"],
  },
  {
    name: "number-ticker-01",
    title: "Number Ticker-01 - Basic",
    description: "Number Ticker component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: 'src/components/shadcn-space/number-ticker/number-ticker-01.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/number-ticker/number-ticker-01.tsx',
      }
    ],
    category: categories["number-ticker"],
  },
  {
    name: "number-ticker-02",
    title: "Number Ticker-02 - Currency Counter",
    description:
      "A specialized animated counter for currency and financial data. Ideal for showing bank balances, product prices, or real-time transaction values with smooth transitions.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["@number-flow/react", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/number-ticker/number-ticker-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/number-ticker/number-ticker-02.tsx",
      },
    ],
    category: categories["number-ticker"],
  },
  {
    name: "number-ticker-03",
    title: "Number Ticker-03 - Countdown Counter",
    description:
      "An animated time and chronometer counter formatted as HH:MM:SS. Perfect for session timers, countdowns, workout durations, or any time-tracking feature.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["@number-flow/react", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/number-ticker/number-ticker-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/number-ticker/number-ticker-03.tsx",
      },
    ],
    category: categories["number-ticker"],
  },
  {
    name: "number-ticker-04",
    title: "Number Ticker-04 - Growth Metrics Counter",
    description:
      "A percentage-based growth counter that indicates trends with color shifting and icons. Best for stock trends, quarterly growth, or KPI improvements.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["@number-flow/react", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/number-ticker/number-ticker-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/number-ticker/number-ticker-04.tsx",
      },
    ],
    category: categories["number-ticker"],
  },
  {
    name: "number-ticker-05",
    title: "Number Ticker-05 - Real-Time Metrics Counter",
    description:
      "A high-fidelity statistics counter for displaying large numbers clearly. Designed for user counts, page views, or total downloads with an 'active' pulse indicator.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["@number-flow/react", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/number-ticker/number-ticker-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/number-ticker/number-ticker-05.tsx",
      },
    ],
    category: categories["number-ticker"],
  },
  {
    name: "spinning-text-01",
    title: "Spinning Text-01 - Basic",
    description: "Spinning Text component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: 'src/components/shadcn-space/spinning-text/spinning-text-01.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/spinning-text/spinning-text-01.tsx',
      }
    ],
    category: categories["spinning-text"],
  },
  {
    name: "date-picker-01",
    title: "Date Picker-01 - Data & Time Picker",
    description: "A professional appointment booking card with date and time range selection.",
    type: "registry:component",
    registryDependencies: ["button", "calendar", "input", "label", "popover"],
    dependencies: ["date-fns", "lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/date-picker/date-picker-01.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/date-picker/date-picker-01.tsx',
      }
    ],
    category: categories["date-picker"],
  },
  {
    name: "date-picker-02",
    title: "Date Picker-02 - Date Range",
    description: "A professional appointment booking card with date and time range selection.",
    type: "registry:component",
    registryDependencies: ["button", "calendar", "label", "popover"],
    dependencies: ["date-fns", "lucide-react", "react-day-picker"],
    files: [
      {
        path: 'src/components/shadcn-space/date-picker/date-picker-02.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/date-picker/date-picker-02.tsx',
      }
    ],
    category: categories["date-picker"],
  },
  {
    name: "file-upload-01",
    title: "File Upload-01 - Animated File Upload",
    description: "File Upload component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["lucide-react", "react-dropzone", "motion/react"],
    files: [
      {
        path: 'src/components/shadcn-space/file-upload/file-upload-01.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/file-upload/file-upload-01.tsx',
      }
    ],
    category: categories["file-upload"],
  },
  {
    name: "combobox-01",
    title: "Combobox-01 - With Icons",
    description: "Combobox component with icons",
    type: "registry:component",
    registryDependencies: ["button", "combobox", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/combobox/combobox-01.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/combobox/combobox-01.tsx',
      }
    ],
    category: categories["combobox"],
  },
  {
    name: "combobox-02",
    title: "Combobox-02 - With Custom Check Icon",
    description: "Combobox component",
    type: "registry:component",
    registryDependencies: ["button", "combobox", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/combobox/combobox-02.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/combobox/combobox-02.tsx',
      }
    ],
    category: categories["combobox"],
  },
  {
    name: "combobox-03",
    title: "Combobox-03 - With Add Button",
    description: "Combobox component",
    type: "registry:component",
    registryDependencies: ["button", "combobox", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/combobox/combobox-03.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/combobox/combobox-03.tsx',
      }
    ],
    category: categories["combobox"],
  },
  {
    name: "combobox-04",
    title: "Combobox-04 - Timezone",
    description: "Combobox component",
    type: "registry:component",
    registryDependencies: ["button", "combobox", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/combobox/combobox-04.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/combobox/combobox-04.tsx',
      }
    ],
    category: categories["combobox"],
  },
  {
    name: "combobox-05",
    title: "Combobox-05 - Users",
    description: "Combobox component",
    type: "registry:component",
    registryDependencies: ["avatar", "button", "combobox", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/combobox/combobox-05.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/combobox/combobox-05.tsx',
      }
    ],
    category: categories["combobox"],
  },
  {
    name: "combobox-06",
    title: "Combobox-06 - With Flag",
    description: "Combobox component",
    type: "registry:component",
    registryDependencies: ["button", "combobox", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/combobox/combobox-06.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/combobox/combobox-06.tsx',
      }
    ],
    category: categories["combobox"],
  },
  {
    name: "carousel-01",
    title: "Carousel-01 - Custom Dots",
    description: "Carousel component",
    type: "registry:component",
    registryDependencies: ["carousel"],
    dependencies: [],
    files: [
      {
        path: 'src/components/shadcn-space/carousel/carousel-01.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/carousel/carousel-01.tsx',
      }
    ],
    category: categories["carousel"],
  },
  {
    name: "carousel-02",
    title: "Carousel-02 - Custom Navigation",
    description: "Carousel component",
    type: "registry:component",
    registryDependencies: ["carousel", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/carousel/carousel-02.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/carousel/carousel-02.tsx',
      }
    ],
    category: categories["carousel"],
  },
  {
    name: "carousel-03",
    title: "Carousel-03 - Index",
    description: "Carousel component",
    type: "registry:component",
    registryDependencies: ["carousel"],
    dependencies: [],
    files: [
      {
        path: 'src/components/shadcn-space/carousel/carousel-03.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/carousel/carousel-03.tsx',
      }
    ],
    category: categories["carousel"],
  },
  {
    name: "carousel-04",
    title: "Carousel-04 - Cards",
    description: "Carousel component",
    type: "registry:component",
    registryDependencies: ["carousel", "card"],
    dependencies: [],
    files: [
      {
        path: 'src/components/shadcn-space/carousel/carousel-04.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/carousel/carousel-04.tsx',
      }
    ],
    category: categories["carousel"],
  },
  {
    name: "alert-01",
    title: "Alert-01 - Alert with Password Detail",
    description: "Alert component",
    type: "registry:component",
    registryDependencies: ["alert"],
    dependencies: ["lucide-react"],
     files: [
      {
        path: 'src/components/shadcn-space/alert/alert-01.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/alert/alert-01.tsx',
      }
    ],
    category: categories["alert"],
  },
  {
    name: "alert-02",
    title: "Alert-02 - Alert with User Detail",
    description: "Alert component",
    type: "registry:component",
    registryDependencies: ["alert","avatar"],
    dependencies: ["lucide-react"],
     files: [
      {
        path: 'src/components/shadcn-space/alert/alert-02.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/alert/alert-02.tsx',
      }
    ],
    category: categories["alert"],
  },
   {
    name: "alert-03",
    title: "Alert-03 - Social Alert",
    description: "Alert component",
    type: "registry:component",
    registryDependencies: ["alert","button"],
    dependencies: ["lucide-react"],
     files: [
      {
        path: 'src/components/shadcn-space/alert/alert-03.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/alert/alert-03.tsx',
      },
      {
        path: 'src/components/ui/confetti.tsx',
        type: "registry:component",
        target: '@components/ui/confetti.tsx'
      }
    ],
    category: categories["alert"],
  },
  {
    name: "alert-04",
    title: "Alert-04 - Indicator Destructive Alert",
    description: "Alert component",
    type: "registry:component",
    registryDependencies: ["alert"],
    dependencies: ["lucide-react"],
     files: [
      {
        path: 'src/components/shadcn-space/alert/alert-04.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/alert/alert-04.tsx',
      }
    ],
    category: categories["alert"],
  },
  {
    name: "alert-05",
    title: "Alert-05 - Dark Alert",
    description: "Alert component",
    type: "registry:component",
    registryDependencies: ["alert","button"],
    dependencies: ["lucide-react"],
     files: [
      {
        path: 'src/components/shadcn-space/alert/alert-05.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/alert/alert-05.tsx',
      }
    ],
    category: categories["alert"],
  },
  {
    name: "alert-06",
    title: "Alert-06 - Gradient Alert",
    description: "Alert component",
    type: "registry:component",
    registryDependencies: ["alert","button"],
    dependencies: ["lucide-react"],
     files: [
      {
        path: 'src/components/shadcn-space/alert/alert-06.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/alert/alert-06.tsx',
      }
    ],
    category: categories["alert"],
  },
  {
    name: "breadcrumb-01",
    title: "breadcrumb-01 - Breadcrumb",
    description: "Breadcrumb component",
    type: "registry:component",
    registryDependencies: ["breadcrumb"],
    dependencies: ["lucide-react"],
     files: [
      {
        path: 'src/components/shadcn-space/breadcrumb/breadcrumb-01.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/breadcrumb/breadcrumb-01.tsx',
      }
    ],
    category: categories["breadcrumb"],
  },
  {
    name: "breadcrumb-02",
    title: "breadcrumb-02 - Breadcrumb",
    description: "Breadcrumb component",
    type: "registry:component",
    registryDependencies: ["breadcrumb"],
    dependencies: ["lucide-react"],
     files: [
      {
        path: 'src/components/shadcn-space/breadcrumb/breadcrumb-02.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/breadcrumb/breadcrumb-02.tsx',
      }
    ],
    category: categories["breadcrumb"],
  },
  {
    name: "breadcrumb-03",
    title: "breadcrumb-03 - Breadcrumb",
    description: "Breadcrumb component",
    type: "registry:component",
    registryDependencies: ["breadcrumb"],
    dependencies: ["lucide-react"],
     files: [
      {
        path: 'src/components/shadcn-space/breadcrumb/breadcrumb-03.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/breadcrumb/breadcrumb-03.tsx',
      }
    ],
    category: categories["breadcrumb"],
  },
  {
    name: "breadcrumb-04",
    title: "breadcrumb-04 - Breadcrumb",
    description: "Breadcrumb component",
    type: "registry:component",
    registryDependencies: ["breadcrumb","dropdown-menu"],
    dependencies: ["lucide-react"],
     files: [
      {
        path: 'src/components/shadcn-space/breadcrumb/breadcrumb-04.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/breadcrumb/breadcrumb-04.tsx',
      }
    ],
    category: categories["breadcrumb"],
  },
  {
    name: "breadcrumb-05",
    title: "breadcrumb-05 - Breadcrumb",
    description: "Breadcrumb component",
    type: "registry:component",
    registryDependencies: ["breadcrumb","badge","dropdown-menu"],
    dependencies: ["lucide-react"],
     files: [
      {
        path: 'src/components/shadcn-space/breadcrumb/breadcrumb-05.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/breadcrumb/breadcrumb-05.tsx',
      }
    ],
    category: categories["breadcrumb"],
  },
  {
    name: "breadcrumb-06",
    title: "breadcrumb-06 - Breadcrumb",
    description: "Breadcrumb component",
    type: "registry:component",
    registryDependencies: ["breadcrumb","dropdown-menu"],
    dependencies: [],
     files: [
      {
        path: 'src/components/shadcn-space/breadcrumb/breadcrumb-06.tsx',
        type: "registry:component",
        target: '@components/shadcn-space/breadcrumb/breadcrumb-06.tsx',
      }
    ],
    category: categories["breadcrumb"],
  },
  {
    name: "dialog-01",
    title: "Dialog 01 - Slide from Top",
    description: "Dialog that slides in from the top — ideal for notifications and alerts.",
    type: "registry:component",
    registryDependencies: ["dialog", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/dialog/dialog-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/dialog/dialog-01.tsx",
      },
    ],
    category: categories["dialog"],
    isNew: true
  },
  {
    name: "dialog-02",
    title: "Dialog 02 - Slide from Bottom",
    description: "Dialog that slides in from the bottom — ideal for confirmations and destructive actions.",
    type: "registry:component",
    registryDependencies: ["dialog", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/dialog/dialog-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/dialog/dialog-02.tsx",
      },
    ],
    category: categories["dialog"],
    isNew: true
  },
  {
    name: "dialog-03",
    title: "Dialog 03 - Slide from Left",
    description: "Dialog that slides in from the left — ideal for subscription forms and quick inputs.",
    type: "registry:component",
    registryDependencies: ["dialog", "button", "input"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/dialog/dialog-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/dialog/dialog-03.tsx",
      },
    ],
    category: categories["dialog"],
    isNew: true
  },
  {
    name: "dialog-04",
    title: "Dialog 04 - Slide from Right",
    description: "Dialog that slides in from the right — ideal for user profiles and detail panels.",
    type: "registry:component",
    registryDependencies: ["dialog", "button", "avatar"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/dialog/dialog-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/dialog/dialog-04.tsx",
      },
    ],
    category: categories["dialog"],
    isNew: true
  },
  {
    name: "dialog-05",
    title: "Dialog 05 - Zoom In",
    description: "Dialog that scales up from the center — ideal for success states and celebrations.",
    type: "registry:component",
    registryDependencies: ["dialog", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/dialog/dialog-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/dialog/dialog-05.tsx",
      },
    ],
    category: categories["dialog"],
    isNew: true
  },
  {
    name: "dialog-06",
    title: "Dialog 06 - Zoom Out",
    description: "Dialog that shrinks into place from a larger scale — ideal for announcements and feature highlights.",
    type: "registry:component",
    registryDependencies: ["dialog", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/dialog/dialog-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/dialog/dialog-06.tsx",
      },
    ],
    category: categories["dialog"],
    isNew: true
  },
  {
    name: "popover-01",
    title: "Popover 01 - About Shadcn Space",
    description: "Popover that slides in from the top - ideal for notifications and alerts.",
    type: "registry:component",
    registryDependencies: ["popover", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/popover/popover-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/popover/popover-01.tsx",
      },
    ],
    category: categories["popover"],
    isNew: true
  },
  {
    name: "popover-02",
    title: "Popover 02 - User Profile Card",
    description: "Profile card popover triggered by an avatar - shows user stats and follow/message actions.",
    type: "registry:component",
    registryDependencies: ["popover", "button", "avatar", "badge"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/popover/popover-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/popover/popover-02.tsx",
      },
    ],
    category: categories["popover"],
    isNew: true
  },
  {
    name: "popover-03",
    title: "Popover 03 - Notifications",
    description: "Notification list popover with unread badge, type icons, All/Unread tabs, and functional mark-all-read.",
    type: "registry:component",
    registryDependencies: ["popover", "button", "avatar", "badge", "scroll-area", "tabs"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/popover/popover-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/popover/popover-03.tsx",
      },
    ],
    category: categories["popover"],
    isNew: true
  },
  {
    name: "popover-04",
    title: "Popover 04 - Volume Control",
    description: "Popover that slides in from the top - ideal for notifications and alerts.",
    type: "registry:component",
    registryDependencies: ["badge", "button", "label", "popover", "slider"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/popover/popover-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/popover/popover-04.tsx",
      },
    ],
    category: categories["popover"],
    isNew: true
  },
  {
    name: "popover-05",
    title: "Popover 05 - Download Progress",
    description: "Download progress popover with pause/resume/cancel controls and background fill animation.",
    type: "registry:component",
    registryDependencies: ["button", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/popover/popover-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/popover/popover-05.tsx",
      },
    ],
    category: categories["popover"],
    isNew: true
  },
  {
    name: "popover-06",
    title: "Popover 06 - Location",
    description: "Popover that slides in from the top - ideal for location details.",
    type: "registry:component",
    registryDependencies: ["badge", "button", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/popover/popover-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/popover/popover-06.tsx",
      },
    ],
    category: categories["popover"],
    isNew: true
  },
  {
    name: "slider-01",
    title: "Slider 01 - Volume Control",
    description: "Volume control slider with volume icons and smooth fill animation.",
    type: "registry:component",
    registryDependencies: ["slider"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/slider/slider-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/slider/slider-01.tsx",
      },
    ],
    category: categories["slider"],
    isNew: true
  },
  {
    name: "slider-02",
    title: "Slider 02 - Emoji Rating",
    description: "Emoji rating slider with hover preview ghost bar and reactive emoji/label display.",
    type: "registry:component",
    registryDependencies: ["slider"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/slider/slider-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/slider/slider-02.tsx",
      },
    ],
    category: categories["slider"],
    isNew: true
  },
  {
    name: "slider-03",
    title: "Slider 03 - Temperature Control",
    description: "Temperature control slider with cool/comfortable/warm zones, color-coded display, and hover preview.",
    type: "registry:component",
    registryDependencies: ["slider"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/slider/slider-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/slider/slider-03.tsx",
      },
    ],
    category: categories["slider"],
    isNew: true
  },
  {
    name: "skeleton-01",
    title: "Skeleton 01 - Profile with Stats",
    description: "Animated profile skeleton with staggered fade-up motion on each element — avatar, text lines, stats grid, and CTA button.",
    type: "registry:component",
    registryDependencies: ["skeleton"],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/skeleton/skeleton-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/skeleton/skeleton-01.tsx",
      },
    ],
    category: categories["skeleton"],
    isNew: true,
    isAnimate: true,
  },
  {
    name: "skeleton-02",
    title: "Skeleton 02 - Table with Avatars",
    description: "Animated table skeleton with a title bar, muted header row, avatar+text rows, and badge placeholders — staggered fade-up on scroll into view.",
    type: "registry:component",
    registryDependencies: ["skeleton"],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/skeleton/skeleton-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/skeleton/skeleton-02.tsx",
      },
    ],
    category: categories["skeleton"],
    isNew: true,
    isAnimate: true,
  },
  {
    name: "skeleton-03",
    title: "Skeleton 03 - List with Icons",
    description: "Animated list skeleton with a title bar, icon+text rows, and badge placeholders — staggered fade-up on scroll into view.",
    type: "registry:component",
    registryDependencies: ["skeleton"],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/skeleton/skeleton-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/skeleton/skeleton-03.tsx",
      },
    ],
    category: categories["skeleton"],
    isNew: true,
    isAnimate: true,
  },
  {
    name: "spinner-01",
    title: "Spinner 01 - Default",
    description: "Default shadcn spinner using the Loader2 icon with animate-spin.",
    type: "registry:component",
    registryDependencies: ["spinner"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/spinner/spinner-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/spinner/spinner-01.tsx",
      },
    ],
    category: categories["spinner"],
    isNew: true,
  },
  {
    name: "spinner-02",
    title: "Spinner 02 - Throbber",
    description: "Classic 8-bar radial throbber with stepped rotation and opacity gradient.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/spinner/spinner-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/spinner/spinner-02.tsx",
      },
    ],
    category: categories["spinner"],
    isNew: true,
  },
  {
    name: "spinner-03",
    title: "Spinner 03 - Pinwheel",
    description: "6-blade pinwheel spinner with opacity gradient and continuous rotation.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/spinner/spinner-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/spinner/spinner-03.tsx",
      },
    ],
    category: categories["spinner"],
    isNew: true,
  },
  {
    name: "spinner-04",
    title: "Spinner 04 - Circle Filled",
    description: "Circular arc spinner with a dim background ring and rotating filled arc.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/spinner/spinner-04.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/spinner/spinner-04.tsx",
      },
    ],
    category: categories["spinner"],
    isNew: true,
  },
  {
    name: "spinner-05",
    title: "Spinner 05 - Ellipsis",
    description: "Three dots with staggered scale and opacity wave animation.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/spinner/spinner-05.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/spinner/spinner-05.tsx",
      },
    ],
    category: categories["spinner"],
    isNew: true,
  },
  {
    name: "spinner-06",
    title: "Spinner 06 - Bars",
    description: "Three vertical bars with staggered grow animation.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/spinner/spinner-06.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/spinner/spinner-06.tsx",
      },
    ],
    category: categories["spinner"],
    isNew: true,
  },
  {
    name: "sonner-01",
    title: "Sonner 01 - Upload File",
    description: "A clean, minimal toast notification for file upload progress and status updates.",
    type: "registry:component",
    registryDependencies: ["button", "sonner"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/sonner/sonner-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/sonner/sonner-01.tsx",
      },
    ],
    category: categories["sonner"],
    isNew: true,
  },
  {
    name: "sonner-02",
    title: "Sonner 02 - Delete Project",
    description: "A clean, minimal toast notification for confirming permanent project deletion.",
    type: "registry:component",
    registryDependencies: ["button", "sonner"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/sonner/sonner-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/sonner/sonner-02.tsx",
      },
    ],
    category: categories["sonner"],
    isNew: true,
  },
  {
    name: "sonner-03",
    title: "Sonner 03 - Invite Member",
    description: "A clean, minimal toast notification for inviting a new member to a project.",
    type: "registry:component",
    registryDependencies: ["button", "sonner"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/sonner/sonner-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/sonner/sonner-03.tsx",
      },
    ],
    category: categories["sonner"],
    isNew: true,
  },
  {
    name: "pagination-01",
    title: "Pagination 01 - Floating Pill",
    description: "A floating pill-style pagination with smooth morphing animations.",
    type: "registry:component",
    registryDependencies: ["pagination"],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/pagination/pagination-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/pagination/pagination-01.tsx",
      },
    ],
    category: categories["pagination"],
    isNew: true,
  },
  {
    name: "pagination-02",
    title: "Pagination 02 - Premium Ribbon",
    description: "A premium ribbon-style pagination with glowing active indicators.",
    type: "registry:component",
    registryDependencies: ["pagination"],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/pagination/pagination-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/pagination/pagination-02.tsx",
      },
    ],
    category: categories["pagination"],
    isNew: true,
  },
  {
    name: "pagination-03",
    title: "Pagination 03 - Interactive Jump",
    description: "A compact pagination with an interactive 'Go to Page' jump feature and progress bar.",
    type: "registry:component",
    registryDependencies: ["pagination", "input", "button"],
    dependencies: ["motion", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/pagination/pagination-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/pagination/pagination-03.tsx",
      },
    ],
    category: categories["pagination"],
    isNew: true,
  },
  {
    name: "scroll-area-01",
    title: "Scroll Area 01 - Custom File Explorer",
    description: "A scrollable file explorer list with custom icons, badges, and smooth scroll area performance.",
    type: "registry:component",
    registryDependencies: ["scroll-area", "badge", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/scroll-area/scroll-area-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/scroll-area/scroll-area-01.tsx",
      },
    ],
    category: categories["scroll-area"],
    isNew: true,
  },
  {
    name: "scroll-area-02",
    title: "Scroll Area 02 - Horizontal Profile Stories",
    description: "A horizontally scrollable avatar stories bar with active status indicators, built with ScrollArea and ScrollBar.",
    type: "registry:component",
    registryDependencies: ["scroll-area", "avatar"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/scroll-area/scroll-area-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/scroll-area/scroll-area-02.tsx",
      },
    ],
    category: categories["scroll-area"],
    isNew: true,
  },
  {
    name: "scroll-area-03",
    title: "Scroll Area 03 - Vertical Image Gallery",
    description: "A vertically scrollable image gallery with fade mask edges, built with ScrollArea and project portfolio images.",
    type: "registry:component",
    registryDependencies: ["scroll-area"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/scroll-area/scroll-area-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/scroll-area/scroll-area-03.tsx",
      },
    ],
    category: categories["scroll-area"],
    isNew: true,
  },
  {
    name: "input-mask-01",
    title: "Input Mask 01 - Card Number",
    description: "Card number input mask with #### #### #### #### format.",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/input-mask/input-mask-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input-mask/input-mask-01.tsx",
      },
    ],
    category: categories["input-mask"],
    isNew: true,
  },
  {
    name: "input-mask-02",
    title: "Input Mask 02 - Card Expiry Date",
    description: "Card expiry date input mask with MM/YY format.",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/input-mask/input-mask-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input-mask/input-mask-02.tsx",
      },
    ],
    category: categories["input-mask"],
    isNew: true,
  },
  {
    name: "input-mask-03",
    title: "Input Mask 03 - MAC Address",
    description: "MAC address input mask with ##:##:##:##:##:## format.",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/input-mask/input-mask-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/input-mask/input-mask-03.tsx",
      },
    ],
    category: categories["input-mask"],
    isNew: true,
  },
  {
    name: "collapsible-01",
    title: "Collapsible 01 - Release Changelog",
    description: "An expandable release changelog with per-version collapsible panels, typed badge labels (Feature, Fix, Breaking), and smooth open/close animations.",
    type: "registry:component",
    registryDependencies: ["collapsible", "badge"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/collapsible/collapsible-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/collapsible/collapsible-01.tsx",
      },
    ],
    category: categories["collapsible"],
    isNew: true,
  },
  {
    name: "collapsible-02",
    title: "Collapsible 02 - Dashboard Sidebar",
    description: "A dashboard sidebar with collapsible nav sections, active item highlighting, notification badges, and a user profile footer.",
    type: "registry:component",
    registryDependencies: ["collapsible", "badge"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/collapsible/collapsible-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/collapsible/collapsible-02.tsx",
      },
    ],
    category: categories["collapsible"],
    isNew: true,
  },
  {
    name: "collapsible-03",
    title: "Collapsible 03 - API Keys Manager",
    description: "A collapsible API keys panel with copy-to-clipboard, delete actions, and a dropdown context menu per key.",
    type: "registry:component",
    registryDependencies: ["collapsible", "button", "badge", "dropdown-menu", "card"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/collapsible/collapsible-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/collapsible/collapsible-03.tsx",
      },
    ],
    category: categories["collapsible"],
    isNew: true,
  },
  {
    name: "progress-01",
    title: "Progress 01 - Simple Upload",
    description: "A minimal, animated progress bar with status text and a reset action.",
    type: "registry:component",
    registryDependencies: ["progress", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/progress/progress-01.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/progress/progress-01.tsx",
      },
    ],
    category: categories["progress"],
    isNew: true,
  },
  {
    name: "progress-02",
    title: "Progress 02 - Onboarding Stepper",
    description: "A clean onboarding progress tracker with step navigation and percentage completion.",
    registryDependencies: ["progress", "button"],
    dependencies: [],
    type: "registry:component",
    files: [
      {
        path: "src/components/shadcn-space/progress/progress-02.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/progress/progress-02.tsx",
      },
    ],
    category: categories["progress"],
    isNew: true,
  },
  {
    name: "progress-03",
    title: "Progress 03 - Skills Dashboard",
    description: "A professional skills overview with color-coded, animated progress bars and entrance effects.",
    type: "registry:component",
    registryDependencies: ["progress", "badge"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/progress/progress-03.tsx",
        type: "registry:component",
        target: "@components/shadcn-space/progress/progress-03.tsx",
      },
    ],
    category: categories["progress"],
    isNew: true,
  },
  {
    name: "logo",
    title: "Logo",
    description: "Logo component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "src/assets/logo/logo.tsx",
        type: "registry:component",
        target: "@components/assets/logo/logo.tsx",
      },
    ],
    category: categories["logo"],
  },

];
