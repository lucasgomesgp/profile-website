import Image from "next/image";
import logoImg from "../assets/logo.svg";
import Link from "next/link";
import { LinkHeader } from "@/components/link-header";
import brazilFlagImg from "../assets/icons/brazil.svg";
import euaFlagImg from "../assets/icons/eua.svg";

export default function Home() {
  return (
    <main className="flex flex-col bg-white items-center px-4">
      <header className="flex items-center justify-between lg:justify-center px-3 py-4 bg-black-principal rounded-full mt-20 max-w-[396px] md:max-w-[680px] lg:max-w-[1200px] w-full">
        <div className="lg:flex lg:items-center lg:justify-between lg:w-full ">
          <LinkHeader title="Início" href={"#home"} />
          <LinkHeader title="Sobre" href={"#about"} />
          <LinkHeader title="Serviços" href={"#services"} />
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <Image src={logoImg} alt="Logo" className="[138px] h-[52px]" />
          </Link>
          <LinkHeader title="Projetos" href={"#projects"} />
          <LinkHeader title="Contato" href={"#contact"} />
          <div className="hidden gap-8 lg:flex">
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
    </main>
  );
}
