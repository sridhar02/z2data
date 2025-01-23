export type Submenu = {
  name: string; // Name of the submenu
  link: string; // Link for the submenu
  icon: string; // Icon associated with the submenu
};

export type Menu = {
  name: string; // Name of the menu
  icon: string; // Icon associated with the menu
  link: string; // Link for the menu
  submenus?: Submenu[]; // Optional array of submenus
};
