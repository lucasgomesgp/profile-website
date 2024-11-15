"use client";

import "@/styles/hamburguer-menu.css";

import { LinkToggleMenu } from "./link-toggle-menu";
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
        className={`top-[140px] right-0 absolute z-[99] w-full overflow-hidden lg:hidden ${menuToggleIsOpened ? "inline" : "hidden"
          }`}
      >
        <div className="flex flex-col items-center justify-center text-xl font-bold font-lufga text-white list-none leading-7  w-full">
          <LinkToggleMenu
            link={"home"}
            hideMenuFn={handleHideMenuAfterClickOnLink}
            title="Início"
          />
          <LinkToggleMenu
            link={"about"}
            hideMenuFn={handleHideMenuAfterClickOnLink}
            title="Sobre"
          />
          <LinkToggleMenu
            link={"services"}
            hideMenuFn={handleHideMenuAfterClickOnLink}
            title="Serviços"
          />
          <LinkToggleMenu
            link={"projects"}
            hideMenuFn={handleHideMenuAfterClickOnLink}
            title="Projetos"
          />
          <LinkToggleMenu
            link={"experiences"}
            hideMenuFn={handleHideMenuAfterClickOnLink}
            title="Experiências"
          />
          <LinkToggleMenu
            link={"contact"}
            hideMenuFn={handleHideMenuAfterClickOnLink}
            title="Contato"
          />
        </div>
      </nav>
    </>
  );
}
