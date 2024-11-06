import React from "react";
import { randomUUID } from "crypto";

export default function RectangleTechs({ techs }: { techs: Array<string> }) {
  function tagsStringToJSX() {
    return techs.map((tech) => (
      <div
        key={randomUUID()}
        className="flex justify-evenly  w-[120px]  items-center"
      >
        <p>{tech}</p>
        <span className=" w-3 h-3 mx-2 bg-white rounded-full" />
      </div>
    ));
  }
  return (
    <div className="mb-28 md:mb-[145px] lg:mb-56 group w-[110%] relative">
      <div className="relative bg-[linear-gradient(180deg,_#1C0C5B_7%,_#51729F_55.5%,_#FF00CCFA_100%)] w-[110%] h-20 z-[5] -rotate-[2.783deg] md:-rotate-[5.09deg] lg:rotate- overflow-hidden px-8 text-white font-lufga text-sm font-semibold">
        <div className="animate-scroll-infinite-texts w-full group-hover:[animation-play-state:paused] flex items-center h-20">
          {tagsStringToJSX()}
          {tagsStringToJSX()}
        </div>
      </div>
      <div className="absolute top-0 bg-[linear-gradient(180deg,_#1C0C5B_7%,_#51729F_55.5%,_#FF00CCFA_100%)] rotate-[2.118deg] md:rotate-[4.811deg] blur-[1px] overflow-hidden  h-20  w-[110%]  text-white font-lufga flex items-center justify-center text-sm font-semibold">
        <div className="flex items-center w-full animate-scroll-infinite-texts group-hover:[animation-play-state:paused] [animation-delay:2s]">
          {tagsStringToJSX()}
          {tagsStringToJSX()}
        </div>
      </div>
    </div>
  );
}
