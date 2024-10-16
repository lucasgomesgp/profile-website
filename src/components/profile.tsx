import { ButtonContact } from "./button-contact";
import Image from "next/image";
import { TextAnimated } from "@/components/text-animated";
import profileImg from "../assets/profile.svg";

export function Profile() {
  return (
    <section
      className="transition-all flex flex-col lg:flex-row items-center justify-center relative mt-16 md:mt-[55px] lg:mt-0 mx-4 md:mx-0"
      id="home"
    >
      <div className="flex flex-col font-bold font-urbanist text-3xl md:text-5xl lg:text-6xl text-center px-[100px] lg:px-0 relative animate-left">
        <h1 className="">Sou Lucas,</h1>
        <TextAnimated />
      </div>
      <div className="relative w-[396px] h-[458px] md:w-[680px] md:h-[872px] lg:w-[520px] lg:h-[600px]">
        <Image
          src={profileImg}
          alt="Lucas Gomes"
          quality={100}
          height={872}
          width={680}
          className="w-full h-full animate-right relative transition-all"
        />
        <ButtonContact isInProfile />
      </div>
    </section>
  );
}
