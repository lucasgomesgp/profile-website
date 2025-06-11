import { ButtonContact } from "./button-contact";
import { TextAnimated } from "@/components/text-animated";
import { ProfileImageAnimated } from "./profile-image-animated";

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
      <div className="relative flex justify-center w-[396px] h-[458px] md:w-[680px] md:h-[872px] lg:w-[520px] lg:h-[600px]">
        <ProfileImageAnimated />
        <ButtonContact isInProfile />
      </div>
    </section>
  );
}
