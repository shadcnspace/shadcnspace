import { BlockScreenSize } from "@/types/blocks";
import { Monitor, SmartphoneIcon, TabletIcon } from "lucide-react";

export const blockScreens = [
  {
    name: BlockScreenSize.mobile,
    icon: SmartphoneIcon,
    size: 30,
  },
  {
    name: BlockScreenSize.tablet,
    icon: TabletIcon,
    size: 70,
  },
  {
    name: BlockScreenSize.desktop,
    icon: Monitor,
    size: 100,
  },
];

export const BLOCK_SCREENSHOT_WIDTH = 1366;
export const BLOCK_SCREENSHOT_HEIGHT = 768;
export const BLOCK_SCREENSHOT_EXTENSION = "webp";
