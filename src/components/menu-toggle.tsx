"use client";

import Link from "next/link";
import { useState } from "react";

export function MenuToggle() {
  const [menuToggleIsOpened, setMenuToggleIsOpened] = useState(false);
  return (
    <>
      <button
        className="flex flex-col gap-3 items-end lg:hidden pr-7 transition-all outline-none"
        onClick={() => {
          setMenuToggleIsOpened(!menuToggleIsOpened);
        }}
        onKeyUp={(event) => {
          console.log(event.key.valueOf());
          if (event.key.valueOf() === "Escape") {
            setMenuToggleIsOpened(false);
          }
        }}
      >
        <span
          className={`bg-white h-1 rounded-md w-8 
                    ${
                      menuToggleIsOpened
                        ? "translate-x-[15px] translate-y-[10px] -rotate-[124deg]"
                        : "translate-x-[0] translate-y-[0] rotate-0"
                    }`}
        />
        <span
          className={`bg-white h-1 rounded-md w-4 ${
            menuToggleIsOpened ? "hidden" : ""
          }`}
        />
        <span
          className={`bg-white h-1 rounded-md w-8 
                    ${
                      menuToggleIsOpened
                        ? "translate-x-[15px] -translate-y-[5px] rotate-[120deg]"
                        : "translate-x-[0] translate-y-[0] rotate-0"
                    }`}
        />
      </button>
      <nav
        className={`flex flex-col items-center bg-black-principal w-full min-h-screen top-[20.5%] right-0 absolute z-[99] lg:hidden ${
          menuToggleIsOpened ? "inline" : "hidden"
        }`}
      >
        <ul className=" flex flex-col items-center justify-center text-xl font-bold font-lufga text-white w-full list-none leading-7 letter">
          <li className="py-4 hover:bg-outline-button w-full text-center transition-all">
            <Link href={"#home"}>Início</Link>
          </li>
          <li className="py-4 hover:bg-outline-button w-full text-center transition-all">
            <Link href={"#about"}>Sobre</Link>
          </li>
          <li className="py-4 hover:bg-outline-button w-full text-center transition-all">
            <Link href={"#services"}>Serviços</Link>
          </li>
          <li className="py-4 hover:bg-outline-button w-full text-center transition-all">
            <Link href={"#projects"}>Projetos</Link>
          </li>
          <li className="py-4 hover:bg-outline-button w-full text-center transition-all">
            <Link href={"#contact"}>Contato</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
