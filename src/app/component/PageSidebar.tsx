import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "../types";
import { icons } from "./icons";

function PageSidebar() {
  const [items, setItems] = useState<Menu[]>([]);

  const fetchPagesidebar = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/pagesidebar`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch columns");
    }

    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchPagesidebar();
  }, []);

  if (!items.length) return null;

  return (
    <div className=" p-2 w-[220px] flex gap-2 flex-col border-r-2 h-full">
      {items.map((item, idx) => (
        <div key={idx} className="gap-2 flex flex-col my-2">
          <div>{item.name}</div>
          <div className="flex flex-col gap-2 justify-center">
            {item.submenus &&
              item.submenus.map((submenu, subIdx) => (
                <Link key={subIdx} href={submenu.link}>
                  <div className="ml-2 flex gap-2 items-center py-1">
                    <span className="">
                      {submenu.icon && icons[submenu.icon]}{" "}
                    </span>
                    {submenu.name}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PageSidebar;
