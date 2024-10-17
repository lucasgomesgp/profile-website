"use client";

import "../styles/hamburguer-menu.css";

import Link from "next/link";
import { removeHashFromUrl } from "@/utils/functions/removeHashFromUrl";
import { useState } from "react";

export function MenuToggle() {
  const [menuToggleIsOpened, setMenuToggleIsOpened] = useState(false);
  const [hamburguerClasses, setHamburguerClasses] = useState("hamburguer_icon");
  function toggleMenuAndAddClasses() {
    setMenuToggleIsOpened(!menuToggleIsOpened)
    if (hamburguerClasses.includes("clicked")) {
      setHamburguerClasses("hamburguer_icon");
    } else {
      setHamburguerClasses("hamburguer_icon clicked");
    }
  }
  function handleHideMenuAfterClickOnLink() {
    setMenuToggleIsOpened(false)
    setHamburguerClasses("hamburguer_icon")
    removeHashFromUrl();
  }
  return (
    <>
      <button
        className="flex flex-col gap-3 items-end lg:hidden pr-7 transition-all outline-none hover:opacity-90"
        onClick={toggleMenuAndAddClasses}
        onKeyUp={(event) => {
          console.log(event.key.valueOf());
          if (event.key.valueOf() === "Escape") {
            setMenuToggleIsOpened(false);
          }
        }}
      >
        <span
          className={hamburguerClasses}
        />
        <span
          className={hamburguerClasses}

        />
        <span
          className={hamburguerClasses}
        />
      </button>
      <nav
        className={`flex flex-col items-center bg-black-principal w-full top-[20.5%] right-0 absolute z-[99] lg:hidden ${menuToggleIsOpened ? "inline" : "hidden"
          }`}
      >
        <ul className=" flex flex-col items-center justify-center text-xl font-bold font-lufga text-white w-full list-none leading-7 letter">
          <li className="py-4 hover:bg-outline-button w-full text-center transition-all">
            <Link href={"#home"} onClick={handleHideMenuAfterClickOnLink}>Início</Link>
          </li>
          <li className="py-4 hover:bg-outline-button w-full text-center transition-all">
            <Link href={"#about"} onClick={handleHideMenuAfterClickOnLink}>Sobre</Link>
          </li>
          <li className="py-4 hover:bg-outline-button w-full text-center transition-all">
            <Link href={"#services"} onClick={handleHideMenuAfterClickOnLink}>Serviços</Link>
          </li>
          <li className="py-4 hover:bg-outline-button w-full text-center transition-all">
            <Link href={"#projects"} onClick={handleHideMenuAfterClickOnLink}>Projetos</Link>
          </li>
          <li className="py-4 hover:bg-outline-button w-full text-center transition-all">
            <Link href={"#contact"} onClick={handleHideMenuAfterClickOnLink}>Contato</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
