import Image from "next/image";
import Link from "next/link";
import { LinkHeader } from "@/components/link-header";
import brazilFlagImg from "../assets/icons/brazil.svg";
import euaFlagImg from "../assets/icons/eua.svg";
import logoImg from "../assets/logo.svg";
import profileImg from "../assets/profile.svg";

export default function Home() {
  return (
    <main className="flex flex-col bg-white items-center px-4">
      <header className="flex items-center justify-between lg:justify-center px-3 py-4 bg-black-principal rounded-full mt-10 max-w-[396px] md:max-w-[680px] lg:max-w-[1200px] w-full">
        <div className="lg:flex lg:items-center lg:justify-between lg:w-full ">
          <LinkHeader title="Início" href={"#home"} />
          <LinkHeader title="Sobre" href={"#about"} />
          <LinkHeader title="Serviços" href={"#services"} />
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <Image src={logoImg} alt="Logo" className="[138px] h-[52px]" />
          </Link>
          <LinkHeader title="Projetos" href={"#projects"} />
          <LinkHeader title="Contato" href={"#contact"} />
          <div className="hidden gap-8 lg:flex lg:pr-6">
            <button className="hover:opacity-70 transition-opacity">
              <Image src={brazilFlagImg} alt="Brazil" />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <Image src={euaFlagImg} alt="EUA" />
            </button>
          </div>
        </div>
        <button className="flex flex-col gap-3 items-end lg:hidden pr-7">
          <span className="bg-white h-1 rounded-md w-8" />
          <span className="bg-white h-1 rounded-md w-4" />
          <span className="bg-white h-1 rounded-md w-8" />
        </button>
      </header>
      <section className="flex flex-col lg:flex-row items-center justify-center relative mt-16 md:mt-[55px] lg:mt-0">
        <div className="flex flex-col font-bold font-urbanist text-3xl md:text-5xl lg:text-6xl text-center">
          <h1 className="">
            Sou <span className="text-purple-principal">Lucas</span>,
          </h1>
          <p>Desenvolvedor Frontend</p>
        </div>
        <div className="">
          <Image
            src={profileImg}
            alt="Lucas Gomes"
            quality={100}
            height={872}
            width={680}
            className="w-[396px] h-[458px] md:w-[680px] md:h-[872px] lg:w-[520px] lg:h-[600px]"
          />
        </div>
      </section>
    </main>
  );
}
