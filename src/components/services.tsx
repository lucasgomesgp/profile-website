"use client";

import { Browsers, Globe, PencilRuler } from "@phosphor-icons/react";

import { ContainerService } from "@/components/container-service";

export function Services() {
  return (
    <section className="flex flex-col  items-center justify-center font-lufga gap-24 py-32 lg:py-52 lg:min-h-screen bg-white-light w-full">
      <h3 className="text-4xl font-semibold">
        Principais <span className="text-purple-principal">serviços</span>
      </h3>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-14 lg:gap-8">
        <ContainerService
          title="Desenvolvimento Web"
          description="Interfaces modernas, responsivas e otimizadas para ótima UX"
        >
          <Browsers color="#A53DFF" size={50} />
        </ContainerService>
        <ContainerService
          title="Estruturação visual"
          description="Layouts intuitivos, organizando elementos para uma navegação fluida"
        >
          <PencilRuler color="#A53DFF" size={50} />
        </ContainerService>
        <ContainerService
          title="Site performático"
          description="Carregamento eficiente e SEO estruturado com mecanismos de busca"
        >
          <Globe color="#A53DFF" size={50} />
        </ContainerService>
      </div>
    </section>
  );
}
