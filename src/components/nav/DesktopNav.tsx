import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
import { NavbarItemProps, NAV_LINKS } from "./NavData";

const NavItem: FC<NavbarItemProps> = ({ href, name, className = "" }) => {
  return (
    <Link href={href} passHref={true}>
      <a className={`${className}`}>{name}</a>
    </Link>
  );
};

export const DesktopNav = () => {
  const { data: session } = useSession();

  return (
    <div className="border-b-2 py-4">
      <div className="flex justify-start px-5 gap-3">
        {NAV_LINKS.map((each) => (
          <NavItem {...each} />
        ))}
        {session && session.user?.name ? (
          <>
            <button
              className="rounded px-4 py-2 justify-center items-center bg-slate-200/70 ml-auto"
              onClick={() => signOut()}
            >
              Sign out from {session.user?.name}
            </button>
          </>
        ) : (
          <button
            className="rounded px-4 py-2 justify-center items-center bg-slate-200/70 ml-auto"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};
