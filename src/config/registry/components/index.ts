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
        target: "components/shadcn-space/apple-dock/apple-dock.tsx",
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
        target: "components/shadcn-space/orbiting-circles/orbiting-circles.tsx",
      },
      {
        path: "src/components/shadcn-space/orbiting-circles/orbiting-circles.css",
        type: "registry:style",
        target: "components/shadcn-space/orbiting-circles/orbiting-circles.css",
      },
    ],
    category: categories["orbiting-circles"],
  },
  {
    name: "animated-list-01",
    title: "Animated List 01 - Default",
    description: "Animated List component",
    type: "registry:component",
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/animated-list/animated-list-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/animated-list/animated-list-01.tsx",
      },
    ],
    category: categories["animated-list"],
  },
  {
    name: "animated-list-02",
    title: "Animated List 02 - Setup Steps",
    description: "Setup Steps component",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/animated-list/animated-list-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/animated-list/animated-list-02.tsx",
      },
    ],
    category: categories["animated-list"],
  },
  {
    name: "animated-list-03",
    title: "Animated List 03 - Expandable Stack",
    description:
      "Expandable stack of cards showing notifications with dynamic spring layouts",
    type: "registry:component",
    registryDependencies: ["button"],
    dependencies: ["motion", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/animated-list/animated-list-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/animated-list/animated-list-03.tsx",
      },
    ],
    category: categories["animated-list"],
  },
  {
    name: "marquee-01",
    title: "Marquee 01 - Testimonials",
    description: "Testimonials marquee component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["card"],
    files: [
      {
        path: "src/components/shadcn-space/marquee/marquee-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/marquee/marquee-01.tsx",
      },
      {
        path: "src/components/shadcn-space/animations/marquee.tsx",
        type: "registry:component",
        target: "components/shadcn-space/animations/marquee.tsx",
      },
    ],
    category: categories["marquee"],
  },
  {
    name: "marquee-02",
    title: "Marquee 02 - Brands",
    description: "Brands marquee component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/marquee/marquee-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/marquee/marquee-02.tsx",
      },
      {
        path: "src/components/shadcn-space/animations/marquee.tsx",
        type: "registry:component",
        target: "components/shadcn-space/animations/marquee.tsx",
      },
    ],
    category: categories["marquee"],
  },
  {
    name: "marquee-03",
    title: "Marquee 03 - Vertical Testimonials",
    description: "Vertical Testimonials marquee component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["card"],
    files: [
      {
        path: "src/components/shadcn-space/marquee/marquee-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/marquee/marquee-03.tsx",
      },
      {
        path: "src/components/shadcn-space/animations/marquee.tsx",
        type: "registry:component",
        target: "components/shadcn-space/animations/marquee.tsx",
      },
    ],
    category: categories["marquee"],
    isNew: true,
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
        target: "components/shadcn-space/accordion/accordion-01.tsx",
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
        target: "components/shadcn-space/accordion/accordion-02.tsx",
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
        target: "components/shadcn-space/accordion/accordion-03.tsx",
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
        target: "components/shadcn-space/accordion/accordion-04.tsx",
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
        target: "components/shadcn-space/accordion/accordion-05.tsx",
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
        target: "components/shadcn-space/accordion/accordion-06.tsx",
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
        target: "components/shadcn-space/accordion/accordion-07.tsx",
      },
    ],
    category: categories["accordion"],    
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
        target: "components/shadcn-space/avatar/avatar-01.tsx",
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
        target: "components/shadcn-space/avatar/avatar-02.tsx",
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
        target: "components/shadcn-space/avatar/avatar-03.tsx",
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
        target: "components/shadcn-space/avatar/avatar-04.tsx",
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
        target: "components/shadcn-space/avatar/avatar-05.tsx",
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
        target: "components/shadcn-space/avatar/avatar-06.tsx",
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
        target: "components/shadcn-space/avatar/avatar-07.tsx",
      },
    ],
    category: categories["avatar"],
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
        target: "components/shadcn-space/avatar/avatar-08.tsx",
      },
    ],
    category: categories["avatar"],
  },
  {
    name: "button-01",
    title: "Button 01 - With Icon",
    description: "With Icon button component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-01.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-02",
    title: "Button 02 - Shiny Text",
    description: "Shiny Text button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-02.tsx",
      },
      {
        path: "src/components/shadcn-space/button/button-02.css",
        type: "registry:style",
        target: "components/shadcn-space/button/button-02.css",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-03",
    title: "Button 03 - Shine Hover",
    description: "Shine Hover button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-03.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-04",
    title: "Button 04 - Heartbeat Effect",
    description: "Heartbeat Effect button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-04.tsx",
      },
      {
        path: "src/components/shadcn-space/button/button-04.css",
        type: "registry:style",
        target: "components/shadcn-space/button/button-04.css",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-05",
    title: "Button 05 - Get Figma File",
    description: "Get Figma File button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-05.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-06",
    title: "Button 06 - Animated Border",
    description: "Animated Border button component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-06.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-06.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-07",
    title: "Button 07 - Social",
    description: "Social button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-07.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-08",
    title: "Button 08 - Social Icon",
    description: "Social Icon button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-08.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-08.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-09",
    title: "Button 09 - Outline With Icon",
    description: "Outline With Icon button component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-09.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-09.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-10",
    title: "Button 10 - Save",
    description: "Save button component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-10.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-10.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-11",
    title: "Button 11 - Cancel",
    description: "Cancel button component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-11.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-11.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-12",
    title: "Button 12 - Default",
    description: "Default button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-12.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-12.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-13",
    title: "Button 13 - Size xs",
    description: "Size xs button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-13.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-13.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-14",
    title: "Button 14 - Size sm",
    description: "Size sm button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-14.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-14.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-15",
    title: "Button 15 - Size lg",
    description: "Size lg button component",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-15.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-15.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-16",
    title: "Button 16 - Ripple Spotlight",
    description: "Mouse-tracking ripple spotlight effect button",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-16.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-16.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-17",
    title: "Button 17 - Blob Fill",
    description: "Circle blob expands from bottom center on hover to fill the button",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-17.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-17.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-18",
    title: "Button 18 - Promo Code Copy",
    description: "Animated promo code copy button with blur transition and progress fill",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-18.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-18.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-19",
    title: "Button 19 - Interactive Hover",
    description:
      "Interactive Hover button",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-19.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-19.tsx",
      },
    ],
    category: categories["button"],
  },
  {
    name: "button-20",
    title: "Button 20 - Animated Like Button",
    description: "Like button with burst particle effect and sliding count",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/button/button-20.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-20.tsx",
      },
    ],
    category: categories["button"],
    isNew: true,
  },
  {
    name: "button-21",
    title: "Button 21 - Animated Upvote Button",
    description:
      "Upvote button with ripple, upward particles, and sliding count",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/button/button-21.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-21.tsx",
      },
    ],
    category: categories["button"],
    isNew: true,
  },
  {
    name: "button-22",
    title: "Button 22 - Loading Button",
    description: "Loading button component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-22.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-22.tsx",
      },
    ],
    category: categories["button"],
    isNew: true,
  },
  {
    name: "button-23",
    title: "Button 23 - Permissions Button",
    description: "Animated Permissions button component",
    type: "registry:component",
    dependencies: ["lucide-react", "motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-23.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-23.tsx",
      },
    ],
    category: categories["button"],
    isNew: true,
  },
  {
    name: "button-24",
    title: "Button 24 - Copy Button",
    description: "Animated copy button component with spring transitions",
    type: "registry:component",
    dependencies: ["lucide-react", "motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-24.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-24.tsx",
      },
    ],
    category: categories["button"],
    isNew: true,
  },
  {
    name: "button-25",
    title: "Button 25 - Ripple Button",
    description: "Animated ripple button component with mouse-click tracking",
    type: "registry:component",
    dependencies: ["motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/button/button-25.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-25.tsx",
      },
    ],
    category: categories["button"],
    isNew: true,
  },
  {
    name: "button-26",
    title: "Button 26 - Encrypt",
    description:
      "Hover text scramble decrypt effect with animated sweep highlight",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/button/button-26.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-26.tsx",
      },
    ],
    category: categories["button"],
    isPro: false,
    isNew: true,
  },
  {
    name: "button-27",
    title: "Button 27 - Slide to Confirm",
    description:
      "Interactive drag-to-confirm slider track for high-security actions, payments, and deployments",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/button/button-27.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-27.tsx",
      },
    ],
    category: categories["button"],
    isPro: false,
    isNew: true,
  },
  {
    name: "button-28",
    title: "Button 28 - Hold to Charge",
    description:
      "Press and hold button with circular SVG progress meter for critical actions and confirmations",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/button/button-28.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-28.tsx",
      },
    ],
    category: categories["button"],
    isPro: false,
    isNew: true,
  },
  {
    name: "button-29",
    title: "Button 29 - Multi-State Send",
    description:
      "Interactive form submission button with state transitions (Idle -> Loading -> Success)",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/button/button-29.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button/button-29.tsx",
      },
    ],
    category: categories["button"],
    isPro: false,
    isNew: true,
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
        target: "components/shadcn-space/button-group/button-group-01.tsx",
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
        target: "components/shadcn-space/button-group/button-group-02.tsx",
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
        target: "components/shadcn-space/button-group/button-group-03.tsx",
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
        target: "components/shadcn-space/button-group/button-group-04.tsx",
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
        target: "components/shadcn-space/button-group/button-group-05.tsx",
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
        target: "components/shadcn-space/button-group/button-group-06.tsx",
      },
    ],
    category: categories["button-group"],
  },
  {
    name: "button-group-07",
    title: "Button Group 07 - Alignment",
    description: "Alignment style button group component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button-group/button-group-07.tsx",
      },
    ],
    category: categories["button-group"],
    isNew: true,
  },
  {
    name: "button-group-08",
    title: "Button Group 08 - Github star bar",
    description: "Github star bar style button group component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-08.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button-group/button-group-08.tsx",
      },
    ],
    category: categories["button-group"],
    isNew: true,
  },
  {
    name: "button-group-09",
    title: "Button Group 09 - Follow",
    description: "Follow style button group component",
    type: "registry:component",
    dependencies: ["lucide-react", "motion"],
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-09.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button-group/button-group-09.tsx",
      },
    ],
    category: categories["button-group"],
    isNew: true,
  },
  {
    name: "button-group-10",
    title: "Button Group 10 - Editor Toolbar",
    description: "Rich-text formatting toolbar button group component",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-10.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button-group/button-group-10.tsx",
      },
    ],
    category: categories["button-group"],
    isNew: true,
  },
  {
    name: "button-group-11",
    title: "Button Group 11 - Deploy Environment",
    description: "Button group component used for selecting deploy environment",
    type: "registry:component",
    dependencies: ["lucide-react", "motion"],
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-11.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button-group/button-group-11.tsx",
      },
    ],
    category: categories["button-group"],
    isNew: true,
  },
  {
    name: "button-group-12",
    title: "Button Group 12 - Action Dropdown",
    description:
      "Button group with a split action dropdown menu, featuring micro-animations and smooth open transitions",
    type: "registry:component",
    dependencies: ["lucide-react", "motion"],
    registryDependencies: ["button", "button-group", "dropdown-menu"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-12.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button-group/button-group-12.tsx",
      },
    ],
    category: categories["button-group"],
    isNew: true,
  },
  {
    name: "button-group-13",
    title: "Button Group 13 - Star Rating",
    description:
      "Interactive star rating button group with hover preview and pop animation",
    type: "registry:component",
    dependencies: ["lucide-react", "motion"],
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "src/components/shadcn-space/button-group/button-group-13.tsx",
        type: "registry:component",
        target: "components/shadcn-space/button-group/button-group-13.tsx",
      },
    ],
    category: categories["button-group"],
    isNew: true,
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
        target: "components/shadcn-space/badge/badge-01.tsx",
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
        target: "components/shadcn-space/badge/badge-02.tsx",
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
        target: "components/shadcn-space/badge/badge-03.tsx",
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
        target: "components/shadcn-space/badge/badge-04.tsx",
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
        target: "components/shadcn-space/badge/badge-05.tsx",
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
        target: "components/shadcn-space/badge/badge-06.tsx",
      },
    ],
    category: categories["badge"],
  },
  {
    name: "badge-07",
    title: "Badge-07 - Success",
    description: "Animated success badge with top glow and letter-by-letter reveal",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/shadcn-space/badge/badge-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/badge/badge-07.tsx",
      },
    ],
    category: categories["badge"],
    isAnimate: true,
  },
  {
    name: "badge-08",
    title: "Badge-08 - Pending",
    description: "Animated pending badge with spinning loader and top glow",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/shadcn-space/badge/badge-08.tsx",
        type: "registry:component",
        target: "components/shadcn-space/badge/badge-08.tsx",
      },
    ],
    category: categories["badge"],
    isAnimate: true,
  },
  {
    name: "badge-09",
    title: "Badge-09 - Failed",
    description: "Animated failed badge with top glow and letter-by-letter reveal",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/shadcn-space/badge/badge-09.tsx",
        type: "registry:component",
        target: "components/shadcn-space/badge/badge-09.tsx",
      },
    ],
    category: categories["badge"],
    isAnimate: true,
  },
  {
    name: "badge-10",
    title: "Badge 10 - With Avatar",
    description: "Badge component with avatar",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["badge", "avatar"],
    files: [
      {
        path: "src/components/shadcn-space/badge/badge-10.tsx",
        type: "registry:component",
        target: "components/shadcn-space/badge/badge-10.tsx",
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
        target: "components/shadcn-space/calendar/calendar-01.tsx",
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
        target: "components/shadcn-space/calendar/calendar-02.tsx",
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
        target: "components/shadcn-space/calendar/calendar-03.tsx",
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
        target: "components/shadcn-space/calendar/calendar-04.tsx",
      },
    ],
    category: categories["calendar"],
  },
  {
    name: "calendar-05",
    title: "Calendar 05 - Month and Year Select",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["calendar", "card", "select"],
    dependencies: ["react-day-picker"],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/calendar/calendar-05.tsx",
      },
    ],
    category: categories["calendar"],
  },
  {
    name: "calendar-06",
    title: "Calendar 06 - Disable Weekends",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["calendar"],
    dependencies: ["react-day-picker"],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-06.tsx",
        type: "registry:component",
        target: "components/shadcn-space/calendar/calendar-06.tsx",
      },
    ],
    category: categories["calendar"],
  },
  {
    name: "calendar-07",
    title: "Calendar 07 - Variable Size",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["calendar"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/calendar/calendar-07.tsx",
      },
    ],
    category: categories["calendar"],
  },
  {
    name: "calendar-08",
    title: "Calendar 08 - With Event List",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["button", "card", "calendar"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-08.tsx",
        type: "registry:component",
        target: "components/shadcn-space/calendar/calendar-08.tsx",
      },
    ],
    category: categories["calendar"],
  },
  {
    name: "calendar-09",
    title: "Calendar 09 - Custom Range Select",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["calendar"],
    dependencies: ["react-day-picker"],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-09.tsx",
        type: "registry:component",
        target: "components/shadcn-space/calendar/calendar-09.tsx",
      },
    ],
    category: categories["calendar"],
  },
  {
    name: "calendar-10",
    title: "Calendar 10 - Right Side Navigation",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["calendar"],
    dependencies: ["lucide-react", "react-day-picker"],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-10.tsx",
        type: "registry:component",
        target: "components/shadcn-space/calendar/calendar-10.tsx",
      },
    ],
    category: categories["calendar"],
  },
  {
    name: "calendar-11",
    title: "Calendar 11 - Left Side Navigation",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["calendar"],
    dependencies: ["lucide-react", "react-day-picker"],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-11.tsx",
        type: "registry:component",
        target: "components/shadcn-space/calendar/calendar-11.tsx",
      },
    ],
    category: categories["calendar"],
  },
  {
    name: "calendar-12",
    title: "Calendar 12 - With Today Button",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["button", "card", "calendar"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-12.tsx",
        type: "registry:component",
        target: "components/shadcn-space/calendar/calendar-12.tsx",
      },
    ],
    category: categories["calendar"],
  },
  {
    name: "calendar-13",
    title: "Calendar 13 - With Date Input",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["calendar", "card", "label", "input-group"],
    dependencies: ["date-fns", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-13.tsx",
        type: "registry:component",
        target: "components/shadcn-space/calendar/calendar-13.tsx",
      },
    ],
    category: categories["calendar"],
  },
  {
    name: "calendar-14",
    title: "Calendar 14 - Range Selection",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["button", "calendar", "card", "scroll-area"],
    dependencies: ["date-fns", "react-day-picker"],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-14.tsx",
        type: "registry:component",
        target: "components/shadcn-space/calendar/calendar-14.tsx",
      },
    ],
    category: categories["calendar"],
  },
  {
    name: "calendar-15",
    title: "Calendar 15 - With Pricing",
    description: "Calendar component",
    type: "registry:component",
    registryDependencies: ["button", "badge", "card", "calendar", "separator"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-15.tsx",
        type: "registry:component",
        target: "components/shadcn-space/calendar/calendar-15.tsx",
      },
    ],
    category: categories["calendar"],
  },
  {
    name: "calendar-16",
    title: "Calendar 16 - Date Time Scheduler",
    description:
      "A responsive calendar component with date selection, controlled time range inputs, and duration presets.",
    type: "registry:component",
    registryDependencies: [
      "button",
      "calendar",
      "input-group",
      "popover",
      "separator",
    ],
    dependencies: ["date-fns", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/calendar/calendar-16.tsx",
        type: "registry:component",
        target: "components/shadcn-space/calendar/calendar-16.tsx",
      },
    ],
    category: categories["calendar"],
    isPro: false,
    isNew: true,
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
        target: "components/shadcn-space/tooltip/tooltip-01.tsx",
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
        target: "components/shadcn-space/tooltip/tooltip-02.tsx",
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
        target: "components/shadcn-space/tooltip/tooltip-03.tsx",
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
        target: "components/shadcn-space/tooltip/tooltip-04.tsx",
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
        target: "components/shadcn-space/tooltip/tooltip-05.tsx",
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
        target: "components/shadcn-space/tooltip/tooltip-06.tsx",
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
        target: "components/shadcn-space/tooltip/tooltip-07.tsx",
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
        target: "components/shadcn-space/animated-text/animated-text-01.tsx",
      },
      {
        path: "src/components/shadcn-space/animated-text/animated-text-01.css",
        type: "registry:component",
        target: "components/shadcn-space/animated-text/animated-text-01.css",
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
        target: "components/shadcn-space/animated-text/animated-text-02.tsx",
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
        target: "components/shadcn-space/animated-text/animated-text-03.tsx",
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
        target: "components/shadcn-space/animated-text/animated-text-04.tsx",
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
        target: "components/shadcn-space/animated-text/animated-text-05.tsx",
      },
    ],
    category: categories["animated-text"],
  },
  {
    name: "animated-text-06",
    title: "Animated Text-06 - Reveal Text",
    description: "Animated Text Reveal component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/animated-text/animated-text-06.tsx",
        type: "registry:component",
        target: "components/shadcn-space/animated-text/animated-text-06.tsx",
      },
    ],
    category: categories["animated-text"],
    isAnimate: true,
  },
  {
    name: "animated-text-07",
    title: "Animated Text-07 - Morph Text",
    description: "Animated Text Morph component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/animated-text/animated-text-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/animated-text/animated-text-07.tsx",
      },
    ],
    category: categories["animated-text"],
  },
  {
    name: "animated-text-08",
    title: "Animated Text 08 - Marker Highlight",
    description: "Marker Highlight animation component using motion",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/animated-text/animated-text-08.tsx",
        type: "registry:component",
        target: "components/shadcn-space/animated-text/animated-text-08.tsx",
      },
    ],
    category: categories["animated-text"],
    isAnimate: true,
    isNew: true,
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
        target: "components/shadcn-space/input/input-01.tsx",
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
        target: "components/shadcn-space/input/input-02.tsx",
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
        target: "components/shadcn-space/input/input-03.tsx",
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
        target: "components/shadcn-space/input/input-04.tsx",
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
        target: "components/shadcn-space/input/input-05.tsx",
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
        target: "components/shadcn-space/input/input-06.tsx",
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
        target: "components/shadcn-space/input/input-07.tsx",
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
        target: "components/shadcn-space/input/input-08.tsx",
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
        target: "components/shadcn-space/input/input-09.tsx",
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
        target: "components/shadcn-space/input/input-10.tsx",
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
        target: "components/shadcn-space/input/input-11.tsx",
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
        target: "components/shadcn-space/input/input-12.tsx",
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
        target: "components/shadcn-space/input/input-13.tsx",
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
        target: "components/shadcn-space/input/input-14.tsx",
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
        target: "components/shadcn-space/input/input-15.tsx",
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
        target: "components/shadcn-space/input/input-16.tsx",
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
        target: "components/shadcn-space/input/input-17.tsx",
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
        target: "components/shadcn-space/input/input-18.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-19",
    title: "Input-19 - With Animated Checkmark",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["button", "input", "label"],
    dependencies: ["lucide-react", "motion"],
    files: [
      {
        path: "src/components/shadcn-space/input/input-19.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input/input-19.tsx",
      },
    ],
    category: categories["input"],
  },
  {
    name: "input-20",
    title: "Input 20 - Range",
    description: "Input component",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input/input-20.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input/input-20.tsx",
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
        target: "components/shadcn-space/textarea/textarea-01.tsx",
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
        target: "components/shadcn-space/textarea/textarea-02.tsx",
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
        target: "components/shadcn-space/textarea/textarea-03.tsx",
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
        target: "components/shadcn-space/textarea/textarea-04.tsx",
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
        target: "components/shadcn-space/textarea/textarea-05.tsx",
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
        target: "components/shadcn-space/textarea/textarea-06.tsx",
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
        target: "components/shadcn-space/textarea/textarea-07.tsx",
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
        target: "components/shadcn-space/textarea/textarea-08.tsx",
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
        target: "components/shadcn-space/textarea/textarea-09.tsx",
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
        target: "components/shadcn-space/select/select-01.tsx",
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
        target: "components/shadcn-space/select/select-02.tsx",
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
        target: "components/shadcn-space/select/select-03.tsx",
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
        target: "components/shadcn-space/select/select-04.tsx",
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
        target: "components/shadcn-space/select/select-05.tsx",
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
        target: "components/shadcn-space/select/select-06.tsx",
      },
      {
        path: "src/components/ui/multi-select.tsx",
        type: "registry:component",
        target: "components/ui/multi-select.tsx",
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
        target: "components/shadcn-space/select/select-07.tsx",
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
        target: "components/shadcn-space/select/select-08.tsx",
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
        target: "components/shadcn-space/select/select-09.tsx",
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
        target: "components/shadcn-space/checkbox/checkbox-01.tsx",
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
        target: "components/shadcn-space/checkbox/checkbox-02.tsx",
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
        target: "components/shadcn-space/checkbox/checkbox-03.tsx",
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
        target: "components/shadcn-space/checkbox/checkbox-04.tsx",
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
        target: "components/shadcn-space/checkbox/checkbox-05.tsx",
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
        target: "components/shadcn-space/checkbox/checkbox-06.tsx",
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
        target: "components/shadcn-space/checkbox/checkbox-07.tsx",
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
        target: "components/shadcn-space/checkbox/checkbox-08.tsx",
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
        target: "components/shadcn-space/checkbox/checkbox-09.tsx",
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
        target: "components/shadcn-space/radio-group/radio-group-01.tsx",
      },
      {
        path: "src/components/ui/motion-radio-group.tsx",
        type: "registry:component",
        target: "components/ui/motion-radio-group.tsx",
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
        target: "components/shadcn-space/radio-group/radio-group-02.tsx",
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
        target: "components/shadcn-space/radio-group/radio-group-03.tsx",
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
        target: "components/shadcn-space/radio-group/radio-group-04.tsx",
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
        target: "components/shadcn-space/radio-group/radio-group-05.tsx",
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
        target: "components/shadcn-space/radio-group/radio-group-06.tsx",
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
        target: "components/shadcn-space/switch/switch-01.tsx",
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
        target: "components/shadcn-space/switch/switch-02.tsx",
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
        target: "components/shadcn-space/switch/switch-03.tsx",
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
        target: "components/shadcn-space/switch/switch-04.tsx",
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
        target: "components/shadcn-space/switch/switch-05.tsx",
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
        target: "components/shadcn-space/switch/switch-06.tsx",
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
        target: "components/shadcn-space/tabs/tabs-01.tsx",
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
        target: "components/shadcn-space/tabs/tabs-02.tsx",
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
        target: "components/shadcn-space/tabs/tabs-03.tsx",
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
        target: "components/shadcn-space/tabs/tabs-04.tsx",
      },
    ],
    category: categories["tabs"],
  },
  {
    name: "tabs-05",
    title: "Tabs-05 - Underline",
    description: "Animated underline tabs component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["motion", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/tabs/tabs-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/tabs/tabs-05.tsx",
      },
    ],
    category: categories["tabs"],
  },
  {
    name: "tabs-06",
    title: "Tabs-06 - Vertical",
    description: "Vertical animated tabs component",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["motion", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/tabs/tabs-06.tsx",
        type: "registry:component",
        target: "components/shadcn-space/tabs/tabs-06.tsx",
      },
    ],
    category: categories["tabs"],
  },
  {
    name: "tabs-07",
    title: "Tabs-07 - Icon & Description",
    description: "Tabs with icon and description component",
    type: "registry:component",
    registryDependencies: ["tabs"],
    dependencies: ["motion", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/tabs/tabs-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/tabs/tabs-07.tsx",
      },
    ],
    category: categories["tabs"],
  },
  {
    name: "tabs-08",
    title: "Tabs 08 - Animated Dashboard Tabs",
    description:
      "A reusable, animated tabs component with a sliding active pill, icons, badges, and direction-aware content transitions, driven by a simple data array.",
    type: "registry:component",
    registryDependencies: ["tabs", "switch"],
    dependencies: ["motion", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/tabs/tabs-08.tsx",
        type: "registry:component",
        target: "components/shadcn-space/tabs/tabs-08.tsx",
      },
    ],
    category: categories["tabs"],
    isNew: true,
  },
  {
    name: "tabs-09",
    title: "Tabs 09 - Seasonal PixelSnow Tabs",
    description:
      "A Winter/Monsoon tabs demo where the Winter panel is covered in a live pixel-snow WebGL shader effect and the Monsoon panel shows falling rain beams that collide and burst at the bottom.",
    type: "registry:component",
    dependencies: ["lucide-react", "three", "motion"],
    registryDependencies: ["tabs", "card"],
    files: [
      {
        path: "src/components/shadcn-space/tabs/tabs-09.tsx",
        type: "registry:component",
        target: "components/shadcn-space/tabs/tabs-09.tsx",
      },
      {
        path: "src/components/shadcn-space/animations/PixelSnow.tsx",
        type: "registry:component",
        target: "components/shadcn-space/animations/PixelSnow.tsx",
      },
      {
        path: "src/components/shadcn-space/animations/PixelSnow.css",
        type: "registry:component",
        target: "components/shadcn-space/animations/PixelSnow.css",
      },
      {
        path: "src/components/shadcn-space/animations/BackgroundBeamsWithCollision.tsx",
        type: "registry:component",
        target:
          "components/shadcn-space/animations/BackgroundBeamsWithCollision.tsx",
      },
    ],
    category: categories["tabs"],
    isNew: true,
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
        target: "components/shadcn-space/card/card-01.tsx",
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
        target: "components/shadcn-space/card/card-02.tsx",
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
        target: "components/shadcn-space/card/card-03.tsx",
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
        target: "components/shadcn-space/card/card-04.tsx",
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
        target: "components/shadcn-space/card/card-05.tsx",
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
        target: "components/shadcn-space/card/card-06.tsx",
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
        target: "components/shadcn-space/card/card-07.tsx",
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
        target: "components/shadcn-space/card/card-08.tsx",
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
        target: "components/shadcn-space/card/card-09.tsx",
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
        target: "components/shadcn-space/card/card-10.tsx",
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
        target: "components/shadcn-space/card/card-11.tsx",
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
        target: "components/shadcn-space/card/card-12.tsx",
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
        target: "components/shadcn-space/card/card-13.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-14",
    title: "Card-14 - Ecommerce Product Card",
    description:
      "A clean editorial ecommerce product card with slide-up CTA, color swatches, sale badge, and wishlist.",
    type: "registry:component",
    registryDependencies: ["card", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/card/card-14.tsx",
        type: "registry:component",
        target: "components/shadcn-space/card/card-14.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-15",
    title: "Card-15 - Credit Card",
    description:
      "An interactive credit card with 3D flip animation, masked card number, balance toggle, and quick action buttons.",
    type: "registry:component",
    registryDependencies: ["card", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/card/card-15.tsx",
        type: "registry:component",
        target: "components/shadcn-space/card/card-15.tsx",
      },
    ],
    category: categories["card"],
  },
  {
    name: "card-16",
    title: "Card 16 - Integration Card",
    description:
      "An animated integration card with SVG connection paths, floating integration icons, and a pulsing center logo.",
    type: "registry:component",
    registryDependencies: ["button", "card"],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/card/card-16.tsx",
        type: "registry:component",
        target: "components/shadcn-space/card/card-16.tsx",
      },
    ],
    category: categories["card"],
    isPro: false,
    isNew: true,
  },
  {
    name: "card-17",
    title: "Card 17 - Testimonial Card",
    description:
      "An animated integration card with SVG connection paths, floating integration icons, and a pulsing center logo.",
    type: "registry:component",
    registryDependencies: ["avatar", "card"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/card/card-17.tsx",
        type: "registry:component",
        target: "components/shadcn-space/card/card-17.tsx",
      },
    ],
    category: categories["card"],
    isPro: false,
    isNew: true,
  },
  {
    name: "card-18",
    title: "Card 18 - Highlighted Comparison Card",
    description:
      "A comparison card comparing other tools vs Shadcnspace, featuring custom dark theme transition, checklist, and dynamic gradient effects.",
    type: "registry:component",
    registryDependencies: ["separator", "card"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/card/card-18.tsx",
        type: "registry:component",
        target: "components/shadcn-space/card/card-18.tsx",
      },
    ],
    category: categories["card"],
    isPro: false,
    isNew: true,
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
        target: 'components/shadcn-space/shine-border/shine-border-01.tsx',
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
        target: "components/shadcn-space/shine-border/shine-border-02.tsx",
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
        target: "components/shadcn-space/shine-border/shine-border-03.tsx",
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
        target: "components/shadcn-space/shine-border/shine-border-04.tsx",
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
        target: 'components/shadcn-space/number-ticker/number-ticker-01.tsx',
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
        target: "components/shadcn-space/number-ticker/number-ticker-02.tsx",
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
        target: "components/shadcn-space/number-ticker/number-ticker-03.tsx",
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
        target: "components/shadcn-space/number-ticker/number-ticker-04.tsx",
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
        target: "components/shadcn-space/number-ticker/number-ticker-05.tsx",
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
        target: 'components/shadcn-space/spinning-text/spinning-text-01.tsx',
      }
    ],
    category: categories["spinning-text"],
  },
  {
    name: "spinning-text-02",
    title: "Spinning Text-02 - With Icon",
    description: "Spinning Text component with animated icon",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["lucide-react", "motion"],
    files: [
      {
        path: "src/components/shadcn-space/spinning-text/spinning-text-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/spinning-text/spinning-text-02.tsx",
      },
    ],
    category: categories["spinning-text"],
  },
  {
    name: "date-picker-01",
    title: "Date Picker 01 - Data & Time Picker",
    description: "A professional appointment booking card with date and time range selection.",
    type: "registry:component",
    registryDependencies: ["button", "calendar", "input", "label", "popover"],
    dependencies: ["date-fns", "lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/date-picker/date-picker-01.tsx',
        type: "registry:component",
        target: 'components/shadcn-space/date-picker/date-picker-01.tsx',
      }
    ],
    category: categories["date-picker"],
  },
  {
    name: "date-picker-02",
    title: "Date Picker 02 - Date Range",
    description: "A professional appointment booking card with date and time range selection.",
    type: "registry:component",
    registryDependencies: ["button", "calendar", "label", "popover"],
    dependencies: ["date-fns", "lucide-react", "react-day-picker"],
    files: [
      {
        path: 'src/components/shadcn-space/date-picker/date-picker-02.tsx',
        type: "registry:component",
        target: 'components/shadcn-space/date-picker/date-picker-02.tsx',
      }
    ],
    category: categories["date-picker"],
  },
  {
    name: "date-picker-03",
    title: "Date Picker 03 - Time Picker",
    description: "A professional time picker with time selection.",
    type: "registry:component",
    registryDependencies: ["label", "input-group"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/date-picker/date-picker-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/date-picker/date-picker-03.tsx",
      },
    ],
    category: categories["date-picker"],
    isNew: true,
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
        target: 'components/shadcn-space/file-upload/file-upload-01.tsx',
      }
    ],
    category: categories["file-upload"],
  },
  {
    name: "combobox-01",
    title: "Combobox 01 - With Icons",
    description: "Combobox component with icons",
    type: "registry:component",
    registryDependencies: ["button", "combobox", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/combobox/combobox-01.tsx',
        type: "registry:component",
        target: 'components/shadcn-space/combobox/combobox-01.tsx',
      }
    ],
    category: categories["combobox"],
  },
  {
    name: "combobox-02",
    title: "Combobox 02 - With Custom Check Icon",
    description: "Combobox component",
    type: "registry:component",
    registryDependencies: ["button", "combobox", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/combobox/combobox-02.tsx',
        type: "registry:component",
        target: 'components/shadcn-space/combobox/combobox-02.tsx',
      }
    ],
    category: categories["combobox"],
  },
  {
    name: "combobox-03",
    title: "Combobox 03 - With Add Button",
    description: "Combobox component",
    type: "registry:component",
    registryDependencies: ["button", "combobox", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/combobox/combobox-03.tsx',
        type: "registry:component",
        target: 'components/shadcn-space/combobox/combobox-03.tsx',
      }
    ],
    category: categories["combobox"],
  },
  {
    name: "combobox-04",
    title: "Combobox 04 - Timezone",
    description: "Combobox component",
    type: "registry:component",
    registryDependencies: ["button", "combobox", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/combobox/combobox-04.tsx',
        type: "registry:component",
        target: 'components/shadcn-space/combobox/combobox-04.tsx',
      }
    ],
    category: categories["combobox"],
  },
  {
    name: "combobox-05",
    title: "Combobox 05 - Users",
    description: "Combobox component",
    type: "registry:component",
    registryDependencies: ["avatar", "button", "combobox", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/combobox/combobox-05.tsx',
        type: "registry:component",
        target: 'components/shadcn-space/combobox/combobox-05.tsx',
      }
    ],
    category: categories["combobox"],
  },
  {
    name: "combobox-06",
    title: "Combobox 06 - With Flag",
    description: "Combobox component",
    type: "registry:component",
    registryDependencies: ["button", "combobox", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: 'src/components/shadcn-space/combobox/combobox-06.tsx',
        type: "registry:component",
        target: 'components/shadcn-space/combobox/combobox-06.tsx',
      }
    ],
    category: categories["combobox"],
  },
  {
    name: "combobox-07",
    title: "Combobox 07 - Creatable",
    description:
      "Combobox with inline item creation — type a new value and select 'Create' to add it on the fly",
    type: "registry:component",
    registryDependencies: ["badge", "button", "command", "popover"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/combobox/combobox-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/combobox/combobox-07.tsx",
      },
    ],
    category: categories["combobox"],
    isNew: true,
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
        target: 'components/shadcn-space/carousel/carousel-01.tsx',
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
        target: 'components/shadcn-space/carousel/carousel-02.tsx',
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
        target: 'components/shadcn-space/carousel/carousel-03.tsx',
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
        target: 'components/shadcn-space/carousel/carousel-04.tsx',
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
        target: 'components/shadcn-space/alert/alert-01.tsx',
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
        target: 'components/shadcn-space/alert/alert-02.tsx',
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
        target: 'components/shadcn-space/alert/alert-03.tsx',
      },
      {
        path: 'src/components/ui/confetti.tsx',
        type: "registry:component",
        target: 'components/ui/confetti.tsx'
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
        target: 'components/shadcn-space/alert/alert-04.tsx',
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
        target: 'components/shadcn-space/alert/alert-05.tsx',
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
        target: 'components/shadcn-space/alert/alert-06.tsx',
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
        target: 'components/shadcn-space/breadcrumb/breadcrumb-01.tsx',
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
        target: 'components/shadcn-space/breadcrumb/breadcrumb-02.tsx',
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
        target: 'components/shadcn-space/breadcrumb/breadcrumb-03.tsx',
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
        target: 'components/shadcn-space/breadcrumb/breadcrumb-04.tsx',
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
        target: 'components/shadcn-space/breadcrumb/breadcrumb-05.tsx',
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
        target: 'components/shadcn-space/breadcrumb/breadcrumb-06.tsx',
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
        target: "components/shadcn-space/dialog/dialog-01.tsx",
      },
    ],
    category: categories["dialog"],
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
        target: "components/shadcn-space/dialog/dialog-02.tsx",
      },
    ],
    category: categories["dialog"],
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
        target: "components/shadcn-space/dialog/dialog-03.tsx",
      },
    ],
    category: categories["dialog"],
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
        target: "components/shadcn-space/dialog/dialog-04.tsx",
      },
    ],
    category: categories["dialog"],
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
        target: "components/shadcn-space/dialog/dialog-05.tsx",
      },
    ],
    category: categories["dialog"],
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
        target: "components/shadcn-space/dialog/dialog-06.tsx",
      },
    ],
    category: categories["dialog"], 
  },
  {
    name: "dialog-07",
    title: "Dialog 07 - Connect Integration",
    description:
      "Dialog with a decorative header connecting two app icons — ideal for third-party integration and calendar connect flows.",
    type: "registry:component",
    registryDependencies: ["dialog", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/dialog/dialog-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/dialog/dialog-07.tsx",
      },
      {
        path: "src/components/shadcn-space/dialog/dialog-07.css",
        type: "registry:style",
        target: "components/shadcn-space/dialog/dialog-07.css",
      },
    ],
    category: categories["dialog"],
    isNew: true,
  },
  {
    name: "dialog-08",
    title: "Dialog 08 - Connectors",
    description:
      "Searchable connectors dialog listing popular integrations with an add action for each — ideal for source/connector picker flows.",
    type: "registry:component",
    registryDependencies: ["dialog", "button", "input"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/dialog/dialog-08.tsx",
        type: "registry:component",
        target: "components/shadcn-space/dialog/dialog-08.tsx",
      },
    ],
    category: categories["dialog"],
    isPro: false,
    isNew: true,
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
        target: "components/shadcn-space/popover/popover-01.tsx",
      },
    ],
    category: categories["popover"],
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
        target: "components/shadcn-space/popover/popover-02.tsx",
      },
    ],
    category: categories["popover"],
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
        target: "components/shadcn-space/popover/popover-03.tsx",
      },
    ],
    category: categories["popover"],
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
        target: "components/shadcn-space/popover/popover-04.tsx",
      },
    ],
    category: categories["popover"],
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
        target: "components/shadcn-space/popover/popover-05.tsx",
      },
    ],
    category: categories["popover"],
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
        target: "components/shadcn-space/popover/popover-06.tsx",
      },
    ],
    category: categories["popover"],  
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
        target: "components/shadcn-space/slider/slider-01.tsx",
      },
    ],
    category: categories["slider"],
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
        target: "components/shadcn-space/slider/slider-02.tsx",
      },
    ],
    category: categories["slider"],
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
        target: "components/shadcn-space/slider/slider-03.tsx",
      },
    ],
    category: categories["slider"],
  },
  {
    name: "slider-04",
    title: "Slider 04 - Modern Volume",
    description:
      "A sleek volume slider featuring a bold track design, custom vertical thumb, and smooth percentage transitions with NumberFlow.",
    type: "registry:component",
    registryDependencies: ["slider"],
    dependencies: ["@number-flow/react"],
    files: [
      {
        path: "src/components/shadcn-space/slider/slider-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/slider/slider-04.tsx",
      },
    ],
    category: categories["slider"],
  },
  {
    name: "slider-05",
    title: "Slider 05 - Price Range Filter",
    description:
      "A dual-thumb price range filter slider with a hover ghost preview — hover outside the selected range to see a semi-transparent extension, with thumb scale animation on hover.",
    type: "registry:component",
    registryDependencies: ["slider", "button"],
    dependencies: ["@number-flow/react", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/slider/slider-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/slider/slider-05.tsx",
      },
    ],
    category: categories["slider"],
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
        target: "components/shadcn-space/skeleton/skeleton-01.tsx",
      },
    ],
    category: categories["skeleton"],
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
        target: "components/shadcn-space/skeleton/skeleton-02.tsx",
      },
    ],
    category: categories["skeleton"],
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
        target: "components/shadcn-space/skeleton/skeleton-03.tsx",
      },
    ],
    category: categories["skeleton"],
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
        target: "components/shadcn-space/spinner/spinner-01.tsx",
      },
    ],
    category: categories["spinner"],
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
        target: "components/shadcn-space/spinner/spinner-02.tsx",
      },
    ],
    category: categories["spinner"],
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
        target: "components/shadcn-space/spinner/spinner-03.tsx",
      },
    ],
    category: categories["spinner"],
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
        target: "components/shadcn-space/spinner/spinner-04.tsx",
      },
    ],
    category: categories["spinner"],
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
        target: "components/shadcn-space/spinner/spinner-05.tsx",
      },
    ],
    category: categories["spinner"],
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
        target: "components/shadcn-space/spinner/spinner-06.tsx",
      },
    ],
    category: categories["spinner"],
  },
  {
    name: "spinner-07",
    title: "Spinner 07 - Orbital Spinner",
    description:
      "A central core with three orbiting rings that spin in opposite directions with varying opacity and size.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/spinner/spinner-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/spinner/spinner-07.tsx",
      },
    ],
    category: categories["spinner"],
  },
  {
    name: "spinner-08",
    title: "Spinner 08 - Clock Ring",
    description:
      "A clock-style loading indicator with a rotating ring and a marker arm that completes a full rotation.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/spinner/spinner-08.tsx",
        type: "registry:component",
        target: "components/shadcn-space/spinner/spinner-08.tsx",
      },
    ],
    category: categories["spinner"],
    isNew: true,
  },
  {
    name: "spinner-09",
    title: "Spinner 09 - Ripple",
    description:
      "A ripple-effect loading component with concentric expanding circular waves.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/spinner/spinner-09.tsx",
        type: "registry:component",
        target: "components/shadcn-space/spinner/spinner-09.tsx",
      },
    ],
    category: categories["spinner"],
    isNew: true,
  },
  {
    name: "spinner-10",
    title: "Spinner 10 - Liquid Wave",
    description:
      "A mathematically precise 1:1 replica of a liquid wave Lottie animation with TextMorph text transitions.",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/spinner/spinner-10.tsx",
        type: "registry:component",
        target: "components/shadcn-space/spinner/spinner-10.tsx",
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
        target: "components/shadcn-space/sonner/sonner-01.tsx",
      },
    ],
    category: categories["sonner"],
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
        target: "components/shadcn-space/sonner/sonner-02.tsx",
      },
    ],
    category: categories["sonner"],
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
        target: "components/shadcn-space/sonner/sonner-03.tsx",
      },
    ],
    category: categories["sonner"],
  },
  {
    name: "sonner-04",
    title: "Sonner 04 - Custom PR Merge",
    description:
      "A premium custom toast notification for Pull Request merge flows with approval avatars.",
    type: "registry:component",
    registryDependencies: ["button", "sonner", "separator", "avatar"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/sonner/sonner-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/sonner/sonner-04.tsx",
      },
    ],
    category: categories["sonner"],
  },
  {
    name: "sonner-05",
    title: "Sonner 05 - Custom Sync Status",
    description:
      "A clean, minimal toast notification showing active repository sync status.",
    type: "registry:component",
    registryDependencies: ["button", "sonner", "separator"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/sonner/sonner-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/sonner/sonner-05.tsx",
      },
    ],
    category: categories["sonner"],
  },
  {
    name: "sonner-06",
    title: "Sonner 06 - Success Payout",
    description:
      "Animated payout toast that transitions from an amber pending state to a teal success state with a smooth ocean-wave ripple emanating from the icon.",
    type: "registry:component",
    registryDependencies: ["button", "sonner", "spinner"],
    dependencies: ["lucide-react", "motion"],
    files: [
      {
        path: "src/components/shadcn-space/sonner/sonner-06.tsx",
        type: "registry:component",
        target: "components/shadcn-space/sonner/sonner-06.tsx",
      },
    ],
    category: categories["sonner"],
  },
  {
    name: "sonner-07",
    title: "Sonner 07 - Failed Payout",
    description:
      "Animated payout toast that transitions from an amber pending state to a red-500 failed state with a smooth ripple wave and slide-in text animation.",
    type: "registry:component",
    registryDependencies: ["button", "sonner", "spinner"],
    dependencies: ["lucide-react", "motion"],
    files: [
      {
        path: "src/components/shadcn-space/sonner/sonner-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/sonner/sonner-07.tsx",
      },
    ],
    category: categories["sonner"],
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
        target: "components/shadcn-space/pagination/pagination-01.tsx",
      },
    ],
    category: categories["pagination"],
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
        target: "components/shadcn-space/pagination/pagination-02.tsx",
      },
    ],
    category: categories["pagination"],
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
        target: "components/shadcn-space/pagination/pagination-03.tsx",
      },
    ],
    category: categories["pagination"],
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
        target: "components/shadcn-space/scroll-area/scroll-area-01.tsx",
      },
    ],
    category: categories["scroll-area"],
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
        target: "components/shadcn-space/scroll-area/scroll-area-02.tsx",
      },
    ],
    category: categories["scroll-area"],
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
        target: "components/shadcn-space/scroll-area/scroll-area-03.tsx",
      },
    ],
    category: categories["scroll-area"],
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
        target: "components/shadcn-space/input-mask/input-mask-01.tsx",
      },
    ],
    category: categories["input-mask"],
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
        target: "components/shadcn-space/input-mask/input-mask-02.tsx",
      },
    ],
    category: categories["input-mask"],
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
        target: "components/shadcn-space/input-mask/input-mask-03.tsx",
      },
    ],
    category: categories["input-mask"],
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
        target: "components/shadcn-space/collapsible/collapsible-01.tsx",
      },
    ],
    category: categories["collapsible"],
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
        target: "components/shadcn-space/collapsible/collapsible-02.tsx",
      },
    ],
    category: categories["collapsible"],
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
        target: "components/shadcn-space/collapsible/collapsible-03.tsx",
      },
    ],
    category: categories["collapsible"],
  },
  {
    name: "collapsible-04",
    title: "Collapsible 04 - User Profile",
    description:
      "A collapsible user profile with user information like last activity, online since and location and actions.",
    type: "registry:component",
    registryDependencies: [
      "collapsible",
      "avatar",
      "separator",
    ],
    dependencies: ["lucide-react", "motion"],
    files: [
      {
        path: "src/components/shadcn-space/collapsible/collapsible-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/collapsible/collapsible-04.tsx",
      },
    ],
    category: categories["collapsible"],
  },
    {
    name: "collapsible-05",
    title: "Collapsible 05 - Token Usage",
    description:
      "A collapsible usage card with a progress bar, summary and details.",
    type: "registry:component",
    registryDependencies: [
      "collapsible",
      "button",
      "progress",
      "card",
    ],
    dependencies: ["lucide-react", "motion"],
    files: [
      {
        path: "src/components/shadcn-space/collapsible/collapsible-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/collapsible/collapsible-05.tsx",
      },
    ],
    category: categories["collapsible"],
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
        target: "components/shadcn-space/progress/progress-01.tsx",
      },
    ],
    category: categories["progress"],
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
        target: "components/shadcn-space/progress/progress-02.tsx",
      },
    ],
    category: categories["progress"],
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
        target: "components/shadcn-space/progress/progress-03.tsx",
      },
    ],
    category: categories["progress"],
  },
  {
    name: "progress-04",
    title: "Progress 04 - Shimmer Status Progress",
    description:
      "Animated progressbar with real-time text updates, smooth entrance and exit animations, and a polished UI.",
    type: "registry:component",
    registryDependencies: ["progress"],
    dependencies: ["motion", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/progress/progress-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/progress/progress-04.tsx",
      },
    ],
    category: categories["progress"],
  },
  {
    name: "dropdown-menu-01",
    title: "Dropdown Menu 01 - User Profile",
    description:
      "A professional user profile dropdown with avatar, status indicator, and categorized links for profile, settings, and logout.",
    type: "registry:component",
    registryDependencies: ["dropdown-menu", "avatar"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/dropdown-menu/dropdown-menu-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/dropdown-menu/dropdown-menu-01.tsx",
      },
    ],
    category: categories["dropdown-menu"],
  },
  {
    name: "dropdown-menu-02",
    title: "Dropdown Menu 02 - Notifications",
    description:
      "A sleek notification dropdown with color-coded category icons, activity summaries, and a 'See All' action button.",
    type: "registry:component",
    registryDependencies: ["dropdown-menu", "badge", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/dropdown-menu/dropdown-menu-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/dropdown-menu/dropdown-menu-02.tsx",
      },
    ],
    category: categories["dropdown-menu"],
  },
  {
    name: "dropdown-menu-03",
    title: "Dropdown Menu 03 - Voice Chat",
    description:
      "A voice chat dropdown with avatar previews, real-time search, and smooth layout animations.",
    type: "registry:component",
    registryDependencies: ["avatar", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/dropdown-menu/dropdown-menu-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/dropdown-menu/dropdown-menu-03.tsx",
      },
    ],
    category: categories["dropdown-menu"],
  },
  {
    name: "input-otp-01",
    title: "Input OTP-01 - Default",
    description: "Default input OTP component",
    type: "registry:component",
    registryDependencies: ["input-otp"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input-otp/input-otp-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input-otp/input-otp-01.tsx",
      },
    ],
    category: categories["input-otp"],
  },
  {
    name: "input-otp-02",
    title: "Input OTP-02 - Digits Only",
    description: "Input OTP component with pattern to allow only digits",
    type: "registry:component",
    registryDependencies: ["input-otp", "field"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input-otp/input-otp-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input-otp/input-otp-02.tsx",
      },
    ],
    category: categories["input-otp"],
  },
  {
    name: "input-otp-03",
    title: "Input OTP-03 - With Separator",
    description: "Input OTP component with separator between segments",
    type: "registry:component",
    registryDependencies: ["input-otp"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input-otp/input-otp-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input-otp/input-otp-03.tsx",
      },
    ],
    category: categories["input-otp"],
  },
  {
    name: "input-otp-04",
    title: "Input OTP-04 - Disabled",
    description: "Input OTP component in disabled state",
    type: "registry:component",
    registryDependencies: ["input-otp"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input-otp/input-otp-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input-otp/input-otp-04.tsx",
      },
    ],
    category: categories["input-otp"],
  },
  {
    name: "input-otp-05",
    title: "Input OTP-05 - Controlled",
    description: "Input OTP component in controlled state",
    type: "registry:component",
    registryDependencies: ["input-otp"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input-otp/input-otp-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input-otp/input-otp-05.tsx",
      },
    ],
    category: categories["input-otp"],
  },
  {
    name: "input-otp-06",
    title: "Input OTP-06 - Invalid",
    description: "Input OTP component in invalid state",
    type: "registry:component",
    registryDependencies: ["input-otp", "field"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input-otp/input-otp-06.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input-otp/input-otp-06.tsx",
      },
    ],
    category: categories["input-otp"],
  },
  {
    name: "input-otp-07",
    title: "Input OTP-07 - Four Digits",
    description: "Input OTP component with pattern to allow only 4 digits",
    type: "registry:component",
    registryDependencies: ["input-otp"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input-otp/input-otp-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input-otp/input-otp-07.tsx",
      },
    ],
    category: categories["input-otp"],
  },
  {
    name: "input-otp-08",
    title: "Input OTP-08 - Alphanumeric",
    description:
      "Input OTP component with pattern to allow only alphanumeric characters",
    type: "registry:component",
    registryDependencies: ["input-otp"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/input-otp/input-otp-08.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input-otp/input-otp-08.tsx",
      },
    ],
    category: categories["input-otp"],
  },
  {
    name: "input-otp-09",
    title: "Input OTP-09 - Animated",
    description: "Input OTP component with animation",
    type: "registry:component",
    registryDependencies: ["input-otp"],
    dependencies: ["motion"],
    files: [
      {
        path: "src/components/shadcn-space/input-otp/input-otp-09.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input-otp/input-otp-09.tsx",
      },
    ],
    category: categories["input-otp"],
  },
  {
    name: "autocomplete-01",
    title: "Autocomplete-01 - Default",
    description: "Default autocomplete component",
    type: "registry:component",
    registryDependencies: ["label"],
    dependencies: ["class-variance-authority", "lucide-react"],
    files: [
      {
        path: "src/components/ui/autocomplete.tsx",
        type: "registry:component",
        target: "components/ui/autocomplete.tsx",
      },
      {
        path: "src/components/shadcn-space/autocomplete/autocomplete-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/autocomplete/autocomplete-01.tsx",
      },
    ],
    category: categories["autocomplete"],
  },
  {
    name: "autocomplete-02",
    title: "Autocomplete-02 - Size variants",
    description: "Autocomplete component with different size variants",
    type: "registry:component",
    registryDependencies: ["label"],
    dependencies: ["class-variance-authority", "lucide-react"],
    files: [
      {
        path: "src/components/ui/autocomplete.tsx",
        type: "registry:component",
        target: "components/ui/autocomplete.tsx",
      },
      {
        path: "src/components/shadcn-space/autocomplete/autocomplete-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/autocomplete/autocomplete-02.tsx",
      },
    ],
    category: categories["autocomplete"],
  },
  {
    name: "autocomplete-03",
    title: "Autocomplete-03 - Vanish Animation",
    description: "Autocomplete with vanish animation",
    type: "registry:component",
    registryDependencies: ["button", "label"],
    dependencies: ["class-variance-authority", "lucide-react", "motion"],
    files: [
      {
        path: "src/components/ui/autocomplete.tsx",
        type: "registry:component",
        target: "components/ui/autocomplete.tsx",
      },
      {
        path: "src/components/shadcn-space/autocomplete/autocomplete-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/autocomplete/autocomplete-03.tsx",
      },
    ],
    category: categories["autocomplete"],
  },
  {
    name: "autocomplete-04",
    title: "Autocomplete-04 - Team Member Search",
    description: "Autocomplete with grouped team members, avatars, status dots, and spring-animated list items",
    type: "registry:component",
    registryDependencies: ["avatar", "label"],
    dependencies: ["class-variance-authority", "lucide-react", "motion"],
    files: [
      {
        path: "src/components/ui/autocomplete.tsx",
        type: "registry:component",
        target: "components/ui/autocomplete.tsx",
      },
      {
        path: "src/components/shadcn-space/autocomplete/autocomplete-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/autocomplete/autocomplete-04.tsx",
      },
    ],
    category: categories["autocomplete"],
  },
  {
    name: "autocomplete-05",
    title: "Autocomplete-05 - Async Search",
    description: "Autocomplete with debounced async search, loading spinner, error handling, avatars, and spring-animated results",
    type: "registry:component",
    registryDependencies: ["avatar", "label"],
    dependencies: ["class-variance-authority", "lucide-react", "motion"],
    files: [
      {
        path: "src/components/ui/autocomplete.tsx",
        type: "registry:component",
        target: "components/ui/autocomplete.tsx",
      },
      {
        path: "src/components/shadcn-space/autocomplete/autocomplete-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/autocomplete/autocomplete-05.tsx",
      },
    ],
    category: categories["autocomplete"],
  },
  {
    name: "autocomplete-06",
    title: "Autocomplete-06 - With Icon",
    description: "Autocomplete for selecting a project type with unique icons, selected icon shown in input, and spring-animated list items",
    type: "registry:component",
    registryDependencies: ["label"],
    dependencies: ["class-variance-authority", "lucide-react", "motion"],
    files: [
      {
        path: "src/components/ui/autocomplete.tsx",
        type: "registry:component",
        target: "components/ui/autocomplete.tsx",
      },
      {
        path: "src/components/shadcn-space/autocomplete/autocomplete-06.tsx",
        type: "registry:component",
        target: "components/shadcn-space/autocomplete/autocomplete-06.tsx",
      },
    ],
    category: categories["autocomplete"],
  },
  {
    name: "context-menu-01",
    title: "Context Menu-01 - Animated Actions",
    description: "Animated context menu with colored icon badges, keyboard shortcuts, and a destructive action separator",
    type: "registry:component",
    registryDependencies: ["separator"],
    dependencies: ["lucide-react", "motion"],
    files: [
      {
        path: "src/components/shadcn-space/context-menu/context-menu-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/context-menu/context-menu-01.tsx",
      },
    ],
    category: categories["context-menu"],
  },
  {
    name: "context-menu-02",
    title: "Context Menu-02 - Radial Bubble",
    description: "Spring-animated radial bubble menu that fans colored icon buttons in a circle from a central trigger",
    type: "registry:component",
    registryDependencies: [],
    dependencies: ["lucide-react", "motion"],
    files: [
      {
        path: "src/components/shadcn-space/context-menu/context-menu-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/context-menu/context-menu-02.tsx",
      },
    ],
    category: categories["context-menu"],
  },
  {
    name: "command-01",
    title: "Command-01 - Shortcut Menu",
    description: "Command component with different size variants",
    type: "registry:component",
    registryDependencies: ["button", "command"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/command/command-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/command/command-01.tsx",
      },
    ],
    category: categories["command"],
  },
  {
    name: "command-02",
    title: "Command-02 - Scrollable",
    description: "Scrollable command component with groups and separators",
    type: "registry:component",
    registryDependencies: ["button", "command"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/command/command-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/command/command-02.tsx",
      },
    ],
    category: categories["command"],
  },
  {
    name: "command-03",
    title: "Command-03 - Palette",
    description: "Palette command component with groups and separators",
    type: "registry:component",
    registryDependencies: ["button", "command"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/command/command-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/command/command-03.tsx",
      },
    ],
    category: categories["command"],
  },
  {
    name: "command-04",
    title: "Command-04 - Team Member Search",
    description: "Command component for searching and inviting team members",
    type: "registry:component",
    registryDependencies: ["button", "command", "avatar"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/command/command-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/command/command-04.tsx",
      },
    ],
    category: categories["command"],
  },
  {
    name: "command-05",
    title: "Command-05 - Developer Actions",
    description: "Command component for developer actions",
    type: "registry:component",
    registryDependencies: ["button", "command"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/command/command-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/command/command-05.tsx",
      },
    ],
    category: categories["command"],
  },
  {
    name: "command-06",
    title: "Command-06 - Search Files",
    description: "Command component for searching files",
    type: "registry:component",
    registryDependencies: ["button", "command", "kbd"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/command/command-06.tsx",
        type: "registry:component",
        target: "components/shadcn-space/command/command-06.tsx",
      },
    ],
    category: categories["command"],
  },
  {
    name: "command-07",
    title: "Command-07 - Filter Search",
    description: "Command component for filter search",
    type: "registry:component",
    registryDependencies: ["button", "command", "label", "checkbox", "radio-group"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/command/command-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/command/command-07.tsx",
      },
    ],
    category: categories["command"],
  },
  {
    name: "code-block-01",
    title: "Code Block 01 - Default",
    description: "Syntax-highlighted code block with filename header and copy button",
    type: "registry:component",
    dependencies: ["shiki", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/code-block/code-block-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/code-block/code-block-01.tsx",
      },
      {
        path: "src/components/ui/code-block.tsx",
        type: "registry:ui",
        target: "components/ui/code-block.tsx",
      },
    ],
    category: categories["code-block"],
  },
  {
    name: "code-block-02",
    title: "Code Block 02 - Scrollable",
    description: "Scrollable code block with line numbers and fixed max height",
    type: "registry:component",
    dependencies: ["shiki", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/code-block/code-block-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/code-block/code-block-02.tsx",
      },
      {
        path: "src/components/ui/code-block.tsx",
        type: "registry:ui",
        target: "components/ui/code-block.tsx",
      },
    ],
    category: categories["code-block"],
  },
  {
    name: "code-block-03",
    title: "Code Block 03 - Custom Background",
    description: "Code block with custom background and line numbers",
    type: "registry:component",
    dependencies: ["shiki", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/code-block/code-block-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/code-block/code-block-03.tsx",
      },
      {
        path: "src/components/ui/code-block.tsx",
        type: "registry:ui",
        target: "components/ui/code-block.tsx",
      },
    ],
    category: categories["code-block"],
  },
  {
    name: "code-block-04",
    title: "Code Block 04 - Highlighted Line",
    description: "Code block with line numbers and amber highlighted line",
    type: "registry:component",
    dependencies: ["shiki", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/code-block/code-block-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/code-block/code-block-04.tsx",
      },
      {
        path: "src/components/ui/code-block.tsx",
        type: "registry:ui",
        target: "components/ui/code-block.tsx",
      },
    ],
    category: categories["code-block"],
  },
  {
    name: "code-block-05",
    title: "Code Block 05 - Multi File",
    description: "Code block with switchable file tabs, line numbers, and scrollable content",
    type: "registry:component",
    dependencies: ["shiki", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/code-block/code-block-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/code-block/code-block-05.tsx",
      },
      {
        path: "src/components/ui/code-block.tsx",
        type: "registry:ui",
        target: "components/ui/code-block.tsx",
      },
    ],
    category: categories["code-block"],
  },
  {
    name: "code-block-06",
    title: "Code Block 06 - Language Tabs",
    description: "Code block with language selector tabs (JavaScript, Python, React) and scrollable content",
    type: "registry:component",
    dependencies: ["shiki", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/code-block/code-block-06.tsx",
        type: "registry:component",
        target: "components/shadcn-space/code-block/code-block-06.tsx",
      },
      {
        path: "src/components/ui/code-block.tsx",
        type: "registry:ui",
        target: "components/ui/code-block.tsx",
      },
    ],
    category: categories["code-block"],
  },
  {
    name: "code-block-07",
    title: "Code Block 07 - Install Command",
    description: "Package manager install command tabs (pnpm, npm, yarn, bun) with copy button",
    type: "registry:component",
    dependencies: ["shiki", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/code-block/code-block-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/code-block/code-block-07.tsx",
      },
      {
        path: "src/components/ui/code-block.tsx",
        type: "registry:ui",
        target: "components/ui/code-block.tsx",
      },
    ],
    category: categories["code-block"],
  },
  {
    name: "kbd-01",
    title: "KBD 01 - KBD in Button",
    description: "Buttons with inline keyboard shortcut hints with Mac/Windows platform switch",
    type: "registry:component",
    registryDependencies: ["kbd", "button", "switch"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/kbd/kbd-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/kbd/kbd-01.tsx",
      },
    ],
    category: categories["kbd"],
  },
  {
    name: "kbd-02",
    title: "KBD 02 - KBD Group",
    description: "KbdGroup showcasing grouped multi-key shortcut combinations with Mac/Windows platform switch",
    type: "registry:component",
    registryDependencies: ["kbd", "switch"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/kbd/kbd-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/kbd/kbd-02.tsx",
      },
    ],
    category: categories["kbd"],
  },
  {
    name: "kbd-03",
    title: "KBD 03 - KBD in Tooltip",
    description: "ButtonGroup with KBD shortcut hints shown inside tooltips on hover, with Mac/Windows platform switch",
    type: "registry:component",
    registryDependencies: ["kbd", "button", "button-group", "tooltip", "switch"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/kbd/kbd-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/kbd/kbd-03.tsx",
      },
    ],
    category: categories["kbd"],
  },
  {
    name: "kbd-04",
    title: "KBD 04 - KBD in Search Input",
    description: "Search input with KBD shortcut in the input group addon, with Mac/Windows platform switch",
    type: "registry:component",
    registryDependencies: ["kbd", "input-group", "switch"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/kbd/kbd-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/kbd/kbd-04.tsx",
      },
    ],
    category: categories["kbd"],
  },
  {
    name: "kbd-05",
    title: "KBD 05 - KBD Generator",
    description: "Interactive keyboard shortcut generator — pick modifiers, enter a key, preview and copy JSX code",
    type: "registry:component",
    registryDependencies: ["kbd", "button", "input", "switch"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/kbd/kbd-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/kbd/kbd-05.tsx",
      },
    ],
    category: categories["kbd"],
  },
  {
    name: "label-01",
    title: "Label 01 - With Checkbox",
    description: "Label component with checkbox",
    type: "registry:component",
    registryDependencies: ["checkbox", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/label/label-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/label/label-01.tsx",
      },
    ],
    category: categories["label"],
  },
  {
    name: "label-02",
    title: "Label 02 - With Input",
    description: "Label component with input",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/label/label-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/label/label-02.tsx",
      },
    ],
    category: categories["label"],
  },
  {
    name: "label-03",
    title: "Label 03 - With Badge",
    description: "Label component with badge",
    type: "registry:component",
    registryDependencies: ["badge", "input", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/label/label-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/label/label-03.tsx",
      },
    ],
    category: categories["label"],
  },
  {
    name: "label-04",
    title: "Label 04 - With Textarea",
    description: "Label component with textarea",
    type: "registry:component",
    registryDependencies: ["textarea", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/label/label-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/label/label-04.tsx",
      },
    ],
    category: categories["label"],
  },
  {
    name: "label-05",
    title: "Label 05 - With Switch",
    description: "Label component with switch",
    type: "registry:component",
    registryDependencies: ["switch", "label"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/label/label-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/label/label-05.tsx",
      },
    ],
    category: categories["label"],
  },
  {
    name: "label-06",
    title: "Label 06 - Floating Label",
    description: "Floating label that transitions from inside the input to the top on focus or fill",
    type: "registry:component",
    registryDependencies: ["input", "label"],
    dependencies: ["motion", "lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/label/label-06.tsx",
        type: "registry:component",
        target: "components/shadcn-space/label/label-06.tsx",
      },
    ],
    category: categories["label"],
  },
  {
    name: "separator-01",
    title: "Separator 01 - Default",
    description: "Basic horizontal separator dividing content sections",
    type: "registry:component",
    registryDependencies: ["separator"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/separator/separator-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/separator/separator-01.tsx",
      },
    ],
    category: categories["separator"],
  },
  {
    name: "separator-02",
    title: "Separator 02 - Vertical",
    description: "Vertical separators between stat columns with label and value",
    type: "registry:component",
    registryDependencies: ["separator"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/separator/separator-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/separator/separator-02.tsx",
      },
    ],
    category: categories["separator"],
  },
  {
    name: "separator-03",
    title: "Separator 03 - Horizontal Label Placement",
    description: "Horizontal separators with inline start, center, and end text labels",
    type: "registry:component",
    registryDependencies: ["separator"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/separator/separator-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/separator/separator-03.tsx",
      },
    ],
    category: categories["separator"],
  },
  {
    name: "separator-04",
    title: "Separator 04 - Vertical Label Placement",
    description: "Vertical separators with top, center, and bottom text labels",
    type: "registry:component",
    registryDependencies: ["separator"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/separator/separator-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/separator/separator-04.tsx",
      },
    ],
    category: categories["separator"],
  },
  {
    name: "separator-05",
    title: "Separator 05 - Dashed",
    description: "Dashed horizontal separator",
    type: "registry:component",
    registryDependencies: ["separator"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/separator/separator-05.tsx",
        type: "registry:component",
        target: "components/shadcn-space/separator/separator-05.tsx",
      },
    ],
    category: categories["separator"],
  },
  {
    name: "separator-06",
    title: "Separator 06 - Gradient Faded",
    description: "Gradient faded horizontal separator that fades from transparent to border color",
    type: "registry:component",
    registryDependencies: ["separator"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/separator/separator-06.tsx",
        type: "registry:component",
        target: "components/shadcn-space/separator/separator-06.tsx",
      },
    ],
    category: categories["separator"],
  },
  {
    name: "separator-07",
    title: "Separator 07 - With Badge",
    description: "Horizontal separator with centered badge",
    type: "registry:component",
    registryDependencies: ["badge", "separator"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/separator/separator-07.tsx",
        type: "registry:component",
        target: "components/shadcn-space/separator/separator-07.tsx",
      },
    ],
    category: categories["separator"],
  },
  {
    name: "separator-08",
    title: "Separator 08 - With Icon",
    description: "Horizontal separator with centered icon",
    type: "registry:component",
    registryDependencies: ["separator"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/separator/separator-08.tsx",
        type: "registry:component",
        target: "components/shadcn-space/separator/separator-08.tsx",
      },
    ],
    category: categories["separator"],
  },
  {
    name: "sheet-01",
    title: "Sheet 01 - Different Directions",
    description: "Drawer with different directions - top, right, bottom, left",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["sheet", "button", "input", "label"],
    files: [
      {
        path: "src/components/shadcn-space/sheet/sheet-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/sheet/sheet-01.tsx",
      },
    ],
    category: categories["sheet"],
  },
  {
    name: "sheet-02",
    title: "Sheet 02 - Scrollable Content",
    description: "Drawer with scrollable content",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["sheet", "button", "scroll-area"],
    files: [
      {
        path: "src/components/shadcn-space/sheet/sheet-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/sheet/sheet-02.tsx",
      },
    ],
    category: categories["sheet"],
  },
  {
    name: "sheet-03",
    title: "Sheet 03 - Shopping Cart",
    description:
      "Drawer with products list, quantity controls, and sticky footer with total and checkout button",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "sheet",
      "button",
      "button-group",
      "badge",
      "separator",
    ],
    files: [
      {
        path: "src/components/shadcn-space/sheet/sheet-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/sheet/sheet-03.tsx",
      },
    ],
    category: categories["sheet"],
  },
  {
    name: "sheet-04",
    title: "Sheet 04 - Filter Panel",
    description:
      "Drawer with products list, quantity controls, and sticky footer with total and checkout button",
    type: "registry:component",
    registryDependencies: [
      "sheet",
      "button",
      "checkbox",
      "slider",
      "label",
      "badge",
      "separator",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/sheet/sheet-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/sheet/sheet-04.tsx",
      },
    ],
    category: categories["sheet"],
  },
  {
    name: "toggle-01",
    title: "Toggle 01 - Animated Sun/Moon",
    description:
      "An animated toggle button that switches between Sun and Moon icons with smooth physics-based transitions.",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/shadcn-space/toggle/toggle-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/toggle/toggle-01.tsx",
      },
    ],
    category: categories["toggle"],
    isNew: true,
  },
  {
    name: "toggle-02",
    title: "Toggle 02 - Animated Like Button",
    description:
      "An animated like (heart) button with active scale pop-up animation and particle radial burst effects.",
    type: "registry:component",
    dependencies: ["motion"],
    registryDependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/toggle/toggle-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/toggle/toggle-02.tsx",
      },
    ],
    category: categories["toggle"],
    isNew: true,
  },
  {
    name: "toggle-03",
    title: "Toggle 03 - Animated Upvote Button",
    description:
      "An animated Product Hunt / Reddit style upvote button with bouncing arrow and sliding digit counter.",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/toggle/toggle-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/toggle/toggle-03.tsx",
      },
    ],
    category: categories["toggle"],
    isNew: true,
  },
  {
    name: "resizable-01",
    title: "Resizable 01 - Master-Detail Split Pane",
    description:
      "A horizontal resizable layout featuring a searchable order list table on the left and a detailed order inspector panel on the right",
    type: "registry:component",
    registryDependencies: [
      "resizable",
      "button",
      "badge",
      "scroll-area",
      "table",
      "input-group",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/resizable/resizable-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/resizable/resizable-01.tsx",
      },
    ],
    category: categories["resizable"],
    isNew: true,
  },
  {
    name: "item-01",
    title: "Item 01 - Team Members List",
    description:
      "A team members list built with the Item primitive, showing avatar, name, email, role badge, and a dropdown menu with change role, view profile, and revoke access actions",
    type: "registry:component",
    registryDependencies: [
      "item",
      "button",
      "badge",
      "avatar",
      "dropdown-menu",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/shadcn-space/item/item-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/item/item-01.tsx",
      },
    ],
    category: categories["item"],
    isNew: true,
  },
  {
    name: "item-02",
    title: "Item 02 - Model Grid Cards",
    description:
      "A grid of model cards built with the Item primitive, showing a gradient preview thumbnail, name, and description per option",
    type: "registry:component",
    registryDependencies: ["item"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/item/item-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/item/item-02.tsx",
      },
    ],
    category: categories["item"],
    isNew: true,
  },
  {
    name: "field-01",
    title: "Field 01 - Sign In Form",
    description:
      "A sign in form built with the Field primitive, featuring an email field with inline validation, a password field with a forgot-password link, and social sign in buttons",
    type: "registry:component",
    registryDependencies: ["field", "button", "input"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/field/field-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/field/field-01.tsx",
      },
    ],
    category: categories["field"],
    isNew: true,
  },
  {
    name: "field-02",
    title: "Field 02 - Notification Settings",
    description:
      "A notification preferences list built with the Field primitive, pairing horizontal fields with switches and separators for each toggleable option",
    type: "registry:component",
    registryDependencies: ["field", "switch"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/field/field-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/field/field-02.tsx",
      },
    ],
    category: categories["field"],
    isNew: true,
  },
  {
    name: "field-03",
    title: "Field 03 - Choose a Plan",
    description:
      "A plan selection layout built with the Field primitive, wrapping a radio group in field labels to create selectable, highlighted pricing cards",
    type: "registry:component",
    registryDependencies: ["field", "radio-group", "badge"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/field/field-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/field/field-03.tsx",
      },
    ],
    category: categories["field"],
    isNew: true,
  },
  {
    name: "field-04",
    title: "Field 04 - Shipping Address",
    description:
      "A shipping address fieldset built with the Field primitive, combining responsive field orientation, inputs, a select, and a checkbox confirmation field",
    type: "registry:component",
    registryDependencies: ["field", "input", "select", "checkbox"],
    dependencies: [],
    files: [
      {
        path: "src/components/shadcn-space/field/field-04.tsx",
        type: "registry:component",
        target: "components/shadcn-space/field/field-04.tsx",
      },
    ],
    category: categories["field"],
    isNew: true,
  },
  {
    name: "stepper-01",
    title: "Stepper 01 - Custom Square Badges",
    description:
      "Responsive stepper component with customizable indicators, checkmarks for completed steps, active and pending states, and content transitions",
    type: "registry:component",
    dependencies: ["lucide-react", "motion"],
    files: [
      {
        path: "src/components/shadcn-space/stepper/stepper-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/stepper/stepper-01.tsx",
      },
    ],
    category: categories["stepper"],
    isNew: true,
  },
  {
    name: "stepper-02",
    title: "Stepper 02 - Multi-Step Wizards",
    description:
      "Multi-step configuration stepper wizard with distinct tabs for user details, workspace set up, and network options.",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "tabs",
      "card",
      "separator",
      "input",
      "textarea",
    ],
    files: [
      {
        path: "src/components/shadcn-space/stepper/stepper-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/stepper/stepper-02.tsx",
      },
    ],
    category: categories["stepper"],
    isNew: true,
  },
  {
    name: "input-group-01",
    title: "Input Group 01 - Autosave Typing Indicator",
    description:
      "A premium text input field containing a real-time autosave status indicator (Saving spinner and Saved checkmark) triggered dynamically on user input.",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["input-group"],
    files: [
      {
        path: "src/components/shadcn-space/input-group/input-group-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input-group/input-group-01.tsx",
      },
    ],
    category: categories["input-group"],
    isNew: true,
  },
  {
    name: "input-group-02",
    title: "Input Group 02 - Email Validation Indicator",
    description:
      "An email input field with an animated leading icon that switches between a mail icon, a verified shield check, and a validation-error shield alert as the user types.",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["input-group"],
    files: [
      {
        path: "src/components/shadcn-space/input-group/input-group-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/input-group/input-group-02.tsx",
      },
    ],
    category: categories["input-group"],
    isNew: true,
  },
  {
    name: "toggle-group-01",
    title: "Toggle Group 01 - Animated Formatting Toolbar",
    description:
      "A premium animated view switcher and styling toolbar utilizing Radix UI Toggle Group and Framer Motion spring sliding highlights.",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "src/components/shadcn-space/toggle-group/toggle-group-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/toggle-group/toggle-group-01.tsx",
      },
    ],
    category: categories["toggle-group"],
    isNew: true,
  },
  {
    name: "toggle-group-02",
    title: "Toggle Group 02 - Animated Social Reactions Widget",
    description:
      "A premium social reactions toolbar (Like, Love, Dislike) using Base UI Toggle Group and Framer Motion spring micro-animations.",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "src/components/shadcn-space/toggle-group/toggle-group-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/toggle-group/toggle-group-02.tsx",
      },
    ],
    category: categories["toggle-group"],
    isNew: true,
  },
  {
    name: "drawer-01",
    title: "Drawer 01 - Onboarding Checklist",
    description:
      "Right side drawer with a progress bar and an interactive onboarding checklist",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["drawer", "button", "progress", "checkbox", "label"],
    files: [
      {
        path: "src/components/shadcn-space/drawer/drawer-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/drawer/drawer-01.tsx",
      },
    ],
    category: categories["drawer"],
    isNew: true,
  },
  {
    name: "drawer-02",
    title: "Drawer 02 - Shopping Cart",
    description:
      "Floating right side drawer with a free shipping progress bar, editable cart items, product suggestions, and an order summary",
    type: "registry:component",
    dependencies: ["lucide-react", "canvas-confetti"],
    registryDependencies: [
      "drawer",
      "button",
      "button-group",
      "progress",
      "separator",
      "scroll-area",
    ],
    files: [
      {
        path: "src/components/shadcn-space/drawer/drawer-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/drawer/drawer-02.tsx",
      },
    ],
    category: categories["drawer"],
    isNew: true,
  },
  {
    name: "rating-01",
    title: "Rating 01 - Star Rating",
    description:
      "A rating component that allows users to rate items on a scale of 1 to 5.",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["rating"],
    files: [
      {
        path: "src/components/shadcn-space/rating/rating-01.tsx",
        type: "registry:component",
        target: "components/shadcn-space/rating/rating-01.tsx",
      },
    ],
    category: categories["rating"],
    isNew: true,
  },
  {
    name: "rating-02",
    title: "Rating 02 - Emoji Rating",
    description:
      "A emoji-based rating component that allows users to rate items on a scale of 1 to 5.",
    type: "registry:component",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["rating"],
    files: [
      {
        path: "src/components/shadcn-space/rating/rating-02.tsx",
        type: "registry:component",
        target: "components/shadcn-space/rating/rating-02.tsx",
      },
    ],
    category: categories["rating"],
    isNew: true,
  },
  {
    name: "rating-03",
    title: "Rating 03 - NPS Scale Rating",
    description:
      "A 0-10 numeric scale rating component for CSAT/NPS-style feedback surveys.",
    type: "registry:component",
    dependencies: [],
    registryDependencies: ["select", "button"],
    files: [
      {
        path: "src/components/shadcn-space/rating/rating-03.tsx",
        type: "registry:component",
        target: "components/shadcn-space/rating/rating-03.tsx",
      },
    ],
    category: categories["rating"],
    isNew: true,
  },
];
