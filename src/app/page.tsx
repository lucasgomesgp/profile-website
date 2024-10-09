import { ButtonCV } from "@/components/button-cv";
import { ButtonContact } from "@/components/button-contact";
import Image from "next/image";
import Link from "next/link";
import { LinkHeader } from "@/components/link-header";
import { Logos } from "@/components/logos";
import { Services } from "@/components/services";
import { TextAnimated } from "@/components/text-animated";
import aboutImg from "../assets/about.png";
import logoImg from "../assets/logo.svg";
import profileImg from "../assets/profile.svg";

export default function Home() {
  return (
    <main className="flex flex-col bg-white items-center overflow-x-hidden">
      <header className="flex items-center justify-between lg:justify-center px-3 py-4 bg-black-principal rounded-full mt-10 max-w-[396px] md:max-w-[680px] lg:max-w-[1200px] w-full mx-8">
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
              <Image
                src={"/icons/brazil.svg"}
                width={60}
                height={45}
                alt="Brazil"
              />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <Image src={"/icons/eua.svg"} width={60} height={45} alt="EUA" />
            </button>
          </div>
        </div>
        <button className="flex flex-col gap-3 items-end lg:hidden pr-7">
          <span className="bg-white h-1 rounded-md w-8" />
          <span className="bg-white h-1 rounded-md w-4" />
          <span className="bg-white h-1 rounded-md w-8" />
        </button>
      </header>
      <section className="flex flex-col lg:flex-row items-center justify-center relative mt-16 md:mt-[55px] lg:mt-0 mx-4 md:mx-0">
        <div className="flex flex-col font-bold font-urbanist text-3xl md:text-5xl lg:text-6xl text-center px-[100px] lg:px-0">
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
            className="w-full h-full"
          />
          <ButtonContact isInProfile />
        </div>
      </section>
      <Logos />
      <section className="flex items-center justify-center flex-wrap gap-32 md:gap-7 lg:flex-nowrap lg:gap-16 shadow-sm rounded-[30px] mx-4 md:mx-0">
        <Image
          src={aboutImg}
          alt="Lucas Gomes"
          height={478}
          width={537}
          quality={100}
        />
        <div className="flex flex-col font-lufga gap-8">
          <h3 className="text-2xl font-semibold">Quem sou eu?</h3>
          <p className="md:text-lg font-light max-w-[400px] md:max-w-[459px] text-justify">
            Cearense apaixonado por tecnologia, Bacharel em Sistemas de
            Informação pela Universidade de Juazeiro do Norte (Unijuazeiro), que
            utiliza da programação para entregar aplicações escaláveis e de
            qualidade compatível com o mercado. Utilizo padrões de código limpo,
            escalável e que esteja compatível com a UI criada pelo time.
          </p>
          <ButtonCV />
        </div>
      </section>
      <Services />
      <footer className="flex pt-28 md:pt-[93px] flex-col items-center justify-center w-full bg-black-principal rounded-tr-[10px] rounded-tl-[10px] pb-5">
        <div className="flex gap-3  flex-wrap justify-center md:justify-between max-w-[396px] md:max-w-[680px] lg:max-w-[1200px] w-full">
          <h4 className="font-lufga text-white font-semibold text-[40px] w-[178px] md:w-[310px] lg:w-[500px]">
            Entre em contato comigo
          </h4>
          <ButtonContact />
          <div className="bg-white h-[1.20px] w-full mt-[18px]" />
        </div>
        <div className="flex flex-wrap px-6 mt-[75px] items-center justify-center w-full md:flex-nowrap  md:px-0 md:justify-between max-w-[396px] md:max-w-[680px] lg:max-w-[1200px]">
          <div className="flex flex-col gap-[27px] md:gap-[25px] lg:gap-3">
            <Image src={logoImg} alt="Logo" className="[138px] h-[52px]" />
            <p className="text-white font-lufga font-medium max-w-[272px] md:max-w-[300px] lg:max-w-[580px]">
              Nesse website você encontrou a minha trajetória e serviços
              profissionais, fique a vontade para entrar em contato comigo e
              solicitar meus serviço.
            </p>
          </div>
          <div className="flex flex-col font-lufga gap-5 items-center">
            <p className="text-purple-principal">Navegação</p>
            <p className="text-white">Início</p>
            <p className="text-white">Sobre</p>
            <p className="text-white">Serviços</p>
            <p className="text-white">Projetos</p>
            <p className="text-white">Contato</p>
          </div>
        </div>
        <p className="text-white mt-[80px] md:mt-[52px] font-lufga">
          Desenvolvido com ❤️ por Lucas Gomes
        </p>
      </footer>
    </main>
  );
}
