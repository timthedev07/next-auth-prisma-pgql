import Link from "next/link";
import { FC } from "react";
import { NavbarItemProps } from "./NavData";

const NavItem: FC<NavbarItemProps> = ({href, name, className = ""}) => {
  return (
    <Link href={href} passHref={true}>
      <a
        className={`${className}`}
      >
        {name}
      </a>
    </Link>
  );
};

export const DesktopNav = () => {
  return (
    <div></div>
  )
};