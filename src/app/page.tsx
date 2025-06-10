import { ButtonCV } from "@/components/button-cv";
import { ButtonContact } from "@/components/button-contact";
import { FormMessage } from "@/components/form-message";
import Image from "next/image";
import Link from "next/link";
import { LinkHeader } from "@/components/link-header";
import { Logos } from "@/components/logos";
import { MenuToggle } from "@/components/menu-toggle";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import RectangleTechs from "@/components/rectangle-techs";
import { Services } from "@/components/services";
import { TitleSection } from "@/components/title-section";
import aboutImg from "../assets/about.png";
import { getProjectsFromCms } from "@/utils/functions/getProjectsFromCms";
import logoImg from "../assets/logo-name.svg";
import { randomUUID } from "crypto";
import { LogoAnimated } from "@/components/logo-animated";

export default async function Home() {
  const myExperiences = [
    {
      company: "Comtec",
      date: "Ago - Dez 2017",
      occupation: "Estagiário (Manutenção)",
      city: "Brejo Santo - CE"
    },
    {
      company: "Universidade Federal do Cariri(UFCA)",
      date: "Jun - Set 2021",
      occupation: "Estagiário (Suporte)",
      city: "Juazeiro do Norte - CE"

    },
    {
      company: "Sistech Informática COM e SERV LTDA",
      date: "Nov - Dez 2021",
      occupation: "Estagiário (Suporte)",
      city: "Juazeiro do Norte - CE"
    }

  ];
  const projects = await getProjectsFromCms();
  return (
    <main className="flex flex-col bg-white items-center overflow-x-hidden">
      <header className="flex items-center justify-between lg:justify-center px-3 py-4 bg-black-principal rounded-full mt-10 max-w-[396px] md:max-w-[680px] lg:max-w-[1200px] w-full mx-8">
        <div className="lg:flex lg:items-center lg:justify-between lg:w-full ">
          <LinkHeader title="Início" href={"#home"} />
          <LinkHeader title="Sobre" href={"#about"} />
          <LinkHeader title="Serviços" href={"#services"} />
          <LogoAnimated />
          <LinkHeader title="Projetos" href={"#projects"} />
          <LinkHeader title="Experiências" href={"#experiences"} />
          <LinkHeader title="Contato" href={"#contact"} />
        </div>
        <MenuToggle />
      </header>
      <Profile />
      <Logos />
      <section
        className="flex items-center justify-center flex-wrap gap-32 md:gap-7 lg:flex-nowrap lg:gap-16 shadow-sm rounded-[30px] mx-4 md:mx-0"
        id="about"
      >
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
      <Projects data={projects} />
      <RectangleTechs
        techs={[
          "Design",
          "UI",
          "Frontend",
          "Figma",
          "Developer",
          "TailwindCSS",
          "SASS",
          "Responsivity",
          "SPA",
          "SSR",
          "Acessibility",
          "CSR",
          "CI",
          "CD",
          "Actions",
          "UX",
          "Tech",
          "Github",
          "CSS",
          "Javascript",
          "React.js",
        ]}
      />
      <section className="flex flex-col gap-[120px] md:gap-[174px] lg:gap-[133px] mt-[118px] mb-[186px] md:my-[160px] lg:mb-[312px] lg:mt-[100px]" id="experiences">
        <TitleSection title="Experiências" onCenter />
        <div className={`flex mt-40 gap-[60px] mobile_l:gap-[100px] md:gap-0 md:mb-32 justify-between lg:gap-32 relative lg:flex-col lg:items-center min-h-full after:absolute after:w-[2px] after:lg:min-h-[120%] after:-top-[10%] after:border after:border-dashed after:bg-black `}>
          {
            myExperiences.map((experience, index) => {
              const isPair = ((index + 1) % 2) === 0;
              return (
                <div className={`
                relative ${isPair ? "bg-purple-principal" : "bg-black"} font-lufga rounded-full z-50 h-[40px] w-[40px] after:border after:border-dashed  after:absolute after:border-black after:top-[50%] after:-translate-y-[50%]  after:rounded-full after:w-[50px] after:h-[50px] flex items-center justify-center `}
                  key={randomUUID()}
                >
                  <div className={`flex flex-col relative -top-[200px] md:-top-[250px] gap-2 self-start text-center lg:text-start lg:-top-8 ${isPair ? "lg:left-[260px]" : "lg:right-60"} ${index === 2 ? "lg:right-72" : ""}`}>
                    <p className="mb-[14px] text-charcoal-black font-semibold md:text-xl lg:text-2xl lg:w-[370px]">{experience.occupation}</p>
                    <p className="text-cadet-grey text-[10px] md:text-xs lg:text-xl lg:w-full lg:break-normal self-center">{experience.company}</p>
                    <p className="text-cadet-grey text-[10px] md:text-xs lg:text-xl">{experience.date}</p>
                    <p className="text-cadet-grey text-[10px] md:text-xs lg:text-xl">{experience.city}</p>
                  </div>

                </div>
              );
            })
          }
        </div>
      </section>
      <FormMessage />
      <footer className="flex pt-28 md:pt-[93px] flex-col items-center justify-center w-full bg-black-principal rounded-tr-[10px] rounded-tl-[10px] pb-5">
        <div className="flex gap-3  flex-wrap justify-center md:justify-between max-w-[396px] md:max-w-[680px] lg:max-w-[1200px] w-full">
          <h4 className="font-lufga text-white font-semibold text-[40px] w-[178px] md:w-[310px] lg:w-[500px]">
            Entre em contato comigo
          </h4>
          <ButtonContact />
          <div className="bg-white h-[1.20px] w-full mt-[18px]" />
        </div>
        <div className="flex flex-wrap px-6 mt-[75px] items-center justify-center w-full md:flex-nowrap md:px-0 md:justify-between max-w-[396px] md:max-w-[680px] lg:max-w-[1200px]">
          <div className="flex flex-col gap-[27px] md:gap-[25px] lg:gap-3">
            <Image src={logoImg} alt="Logo" className="[138px] h-[52px]" />
            <p className="text-white font-lufga font-medium max-w-[272px] md:max-w-[300px] lg:max-w-[580px]">
              Nesse website você encontrou a minha trajetória e serviços
              profissionais, fique a vontade para entrar em contato comigo e
              solicitar meus serviço.
            </p>
          </div>
          <div className="flex flex-col font-lufga gap-5 items-center mt-4 md:mt-0">
            <p className="text-purple-principal">Navegação</p>
            <p className="text-white">Início</p>
            <p className="text-white">Sobre</p>
            <p className="text-white">Serviços</p>
            <p className="text-white">Projetos</p>
            <p className="text-white">Experiências</p>
            <p className="text-white">Contato</p>
          </div>
        </div>
        <p className="text-white mt-[80px] md:mt-[52px] font-lufga">
          Desenvolvido com ❤️ por Lucas Gomes
        </p>
      </footer>
    </main >
  );
}
