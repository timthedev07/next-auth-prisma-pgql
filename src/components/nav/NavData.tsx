export interface NavbarItemProps {
  name: string;
  href: string;
  className?: string;
}

export const NAV_LINKS: NavbarItemProps[] = [
  {
    href: "/",
    name: "home",
  },
  {
    href: "/page-1",
    name: "page 1",
  },
  {
    href: "/page-2",
    name: "page 2",
  },
  {
    href: "/page-3",
    name: "page 3",
  },
];
