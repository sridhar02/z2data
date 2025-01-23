import * as React from "react";

import { HomeIcon, ChartBarIcon, BellIcon } from "@heroicons/react/24/outline";

export const icons: Record<string, React.ReactNode> = {
  Home: <HomeIcon className="w-5 h-5" />,
  ChartBar: <ChartBarIcon className="w-5 h-5" />,
  Bell: <BellIcon className="w-5 h-5" />,
};
