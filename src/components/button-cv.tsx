"use client";

import { FilePdf } from "@phosphor-icons/react";
import Link from "next/link";

export function ButtonCV() {
  return (
    <Link href="cv.pdf" target="_blank" download="lucas_gomes_cv.pdf" className="flex gap-5 text-lg font-bold text-white bg-purple-principal mt-5 py-[18px] px-7 self-center rounded-[4px] hover:opacity-90 transition-hover">
      <FilePdf size={24} color="#FFFFFF" />
      Meu currículo
    </Link>
  );
}
