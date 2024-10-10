"use client";

import { ChatDots, TelegramLogo, User } from "@phosphor-icons/react";

export function FormMessage() {
  return (
    <section className="flex flex-col gap-[54px] md:gap-[116px] items-center justify-center w-full mb-[132px] md:mb-[264px]">
      <h3 className="font-lufga  font-bold text-[32px] md:text-5xl tracking-[4.16px] md:tracking-[6.24px] max-w-[372px] md:max-w-[555px] lg:max-w-[617px] w-full text-center">
        Ficou interessado?
        <br />
        <span className="text-purple-principal">Me mande uma mensagem!</span>
      </h3>
      <form className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-center gap-[22px] md:gap-[26px] lg:gap-8 px-6 md:px-8 lg:px-0">
        <div className="flex items-center justify-center relative h-[60px] w-[302px]">
          <input
            type="text"
            placeholder="Nome completo"
            className="outline-none w-full h-full bg-white shadow-input rounded-[15px] pl-16"
          />
          <User size={30} color="#00000040" className="absolute left-4" />
        </div>
        <div className="flex items-center justify-center relative h-[60px] w-[302px]">
          <input
            type="text"
            placeholder="Sua mensagem"
            className="outline-none w-full h-full bg-white shadow-input rounded-[15px] pl-16"
          />
          <ChatDots size={30} color="#00000040" className="absolute left-4" />
        </div>
        <div className="h-[60px] w-[158px] lg:w-[214px]">
          <button className="flex gap-3 items-center justify-center bg-purple-principal text-white w-full h-full rounded-[20px]">
            <TelegramLogo color="#FFFFFF" size={30} />
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
