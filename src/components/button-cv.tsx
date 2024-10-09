"use client";

import { FilePdf } from "@phosphor-icons/react";

export function ButtonCV() {
  return (
    <button className="flex gap-5 text-lg font-bold text-white bg-purple-principal mt-5 py-[18px] px-7 self-center rounded-[4px] hover:opacity-90 transition-hover">
      <FilePdf size={24} color="#FFFFFF" />
      Meu currículo
    </button>
  );
}
