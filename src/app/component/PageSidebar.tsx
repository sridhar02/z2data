import { CircleStackIcon as CircleStackIcon2 } from "@heroicons/react/24/outline";
import {
  FolderIcon,
  Cog6ToothIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";

const items = [
  {
    name: "Sandbox",
    icon: "",
    link: "/home",
    submenus: [
      {
        name: "Folders",
        link: "/my-data",
        icon: <FolderIcon className="h-5 w-5" />,
      },
      {
        name: "BOMs",
        link: "/basic",
        icon: <FolderIcon className="h-5 w-5" />,
      },
      {
        name: "Sandbox Master",
        link: "/strategic-sourcing",
        icon: <FolderIcon className="h-5 w-5" />,
      },
      {
        name: "Settings",
        link: "/environmental-compliance",
        icon: <Cog6ToothIcon className="h-5 w-5" />,
      },
    ],
  },
  {
    name: "PLM Vault",
    icon: "",
    link: "/home",
    submenus: [
      {
        name: "Entire PLM Vault",
        link: "/my-data",
        icon: <CircleStackIcon className="h-5 w-5" />,
      },
      {
        name: "PLM Master",
        link: "/basic",
        icon: <CircleStackIcon2 className="h-5 w-5" />,
      },
      {
        name: "Hierarchy",
        link: "/basic",
        icon: <CircleStackIcon2 className="h-5 w-5" />,
      },
      {
        name: "Suplliers",
        link: "/strategic-sourcing",
        icon: <CircleStackIcon2 className="h-5 w-5" />,
      },
      {
        name: "Settings",
        link: "/environmental-compliance",
        icon: <CircleStackIcon2 className="h-5 w-5" />,
      },
    ],
  },
  {
    name: "Preferred",
    icon: "",
    link: "/home",
    submenus: [
      {
        name: "Parts",
        link: "/my-data",
        icon: <CircleStackIcon className="h-5 w-5" />,
      },
      {
        name: "Suppliers",
        link: "/basic",
        icon: <CircleStackIcon className="h-5 w-5" />,
      },
    ],
  },
];

/**
 * 
 * @returns 
 */
function PageSidebar() {
  return (
    <div className=" p-2 w-[220px] flex gap-2 flex-col border-r-2 h-full">
      {items.map((item, idx) => (
        <div key={idx} className="gap-2 flex flex-col my-2">
          <div>{item.name}</div>
          <div className="flex flex-col gap-2 justify-center">
            {item.submenus.map((submenu, subIdx) => (
              <div key={subIdx} className="ml-2 flex gap-2 items-center py-1">
                <span className="">{submenu.icon}</span> {submenu.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PageSidebar;
