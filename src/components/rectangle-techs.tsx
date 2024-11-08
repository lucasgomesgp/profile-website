import "@/styles/techs-animation.css";

import React from "react";
import { randomUUID } from "crypto";

export default function RectangleTechs({ techs }: { techs: Array<string> }) {
  function tagsStringToJSX() {
    return techs.map((tech) => (
      <div
        key={randomUUID()}
        className="flex justify-evenly w-[120px]  items-center"
      >
        <p className="text-xs">{tech}</p>
        <span className=" w-3 h-3 mx-2 bg-white rounded-full" />
      </div>
    ));
  }
  return (
    <div className="mb-28 md:mb-[145px] lg:mb-56 group w-[110%] relative">
      <div className="relative font-lufga rectangle z-[5]">
        <div className="rectangle-animation">
          {tagsStringToJSX()}
          {tagsStringToJSX()}
          {tagsStringToJSX()}
        </div>
      </div>
      <div className="rectangle-second font-lufga">
        <div className="rectangle-animation">
          {tagsStringToJSX()}
          {tagsStringToJSX()}
          {tagsStringToJSX()}
          {tagsStringToJSX()}
        </div>
      </div>
    </div>
  );
}
