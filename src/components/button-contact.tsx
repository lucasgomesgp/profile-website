"use client";

import { ArrowUpRight } from "@phosphor-icons/react";

export function ButtonContact({
  isInProfile = false,
}: {
  isInProfile?: boolean;
}) {
  const absoluteBtnCss =
    "absolute z-[50] bottom-28 left-[50%] translate-x-[-50%] before:bg-outline-button  before:md:px-[2px] before:lg:px-[2px] before:rounded-full before:border-2 before:border-white before:absolute before:w-[130px] before:h-[60px] before:md:w-[170px]  before:md:h-[60px] before:lg:w-[170px]  before:lg:h-[60px] before:-z-[5] animate-opacity opacity-0 transition-all";
  return (
    <a
      className={`transition-opacity flex items-center justify-center font-medium gap-3 text-white font-lufga text-sm md:text-2xl p-[10px] bg-purple-principal rounded-full h-[60px] hover:scale-[1.04] ${
        isInProfile ? absoluteBtnCss : ""
      }`}
      href="https://www.linkedin.com/in/lucasgomesgp/"
      target="_blank"
    >
      Contato
      <ArrowUpRight size={42} />
    </a>
  );
}
