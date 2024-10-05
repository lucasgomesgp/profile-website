import Link, { LinkProps } from "next/link";
import { HTMLProps } from "react";

type Props = {
  title: string;
} & HTMLProps<HTMLAnchorElement> &
  LinkProps;
export function LinkHeader({ title, href }: Props) {
  return (
    <Link
      href={href}
      className="text-white hover:bg-purple-principal px-10 py-5 rounded-full transition-colors hidden lg:inline"
    >
      {title}
    </Link>
  );
}
