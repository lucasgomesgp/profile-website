"use client";

import { ReactNode } from "react";

export function ContainerService({
  title,
  children,
  description,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center hover:border-l-4 hover:scale-105 transition-all hover:border-l-purple-principal rounded-3xl text-black bg-white max-w-[396px] w-[396px] h-[172px] md:max-w-[580px] md:w-[580px] gap-4 pb-4 pt-5 cursor-pointer">
      <p className="font-semibold text-xl">{title}</p>
      {children}
      <p className="text-sm font-light text-center max-w-[280px] md:max-w-[485px] lg:max-w-[496px]">
        {description}
      </p>
    </div>
  );
}
