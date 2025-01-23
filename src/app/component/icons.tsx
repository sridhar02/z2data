import * as React from "react";

import { HomeIcon, ChartBarIcon, BellIcon } from "@heroicons/react/24/outline";
import {
  FolderIcon,
  Cog6ToothIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";
import { CircleStackIcon as CircleStackIcon2 } from "@heroicons/react/24/outline";

export const icons: Record<string, React.ReactNode> = {
  Home: <HomeIcon className="w-5 h-5" />,
  ChartBar: <ChartBarIcon className="w-5 h-5" />,
  Bell: <BellIcon className="w-5 h-5" />,
  Folder: <FolderIcon className="h-5 w-5" />,
  Settings: <Cog6ToothIcon className="h-5 w-5" />,
  CircleStack: <CircleStackIcon className="h-5 w-5" />,
  CircleStack2: <CircleStackIcon2 className="h-5 w-5" />,
};
