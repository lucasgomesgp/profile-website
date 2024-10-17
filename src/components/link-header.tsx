"use client"

import { HTMLProps, useEffect } from "react";
import Link, { LinkProps } from "next/link";

import { removeHashFromUrl } from "@/utils/functions/removeHashFromUrl";

type Props = {
  title: string;
} & HTMLProps<HTMLAnchorElement> &
  LinkProps;
export function LinkHeader({ title, href }: Props) {
  useEffect(() => {
    removeHashFromUrl();
  }, []);
  return (
    <Link
      href={href}
      className="text-white hover:bg-purple-principal px-10 py-5 rounded-full transition-colors hidden lg:inline"
    >
      {title}
    </Link>
  );
}
