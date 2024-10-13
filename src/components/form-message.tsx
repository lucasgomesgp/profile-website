"use client";

import { At, ChatDots, TelegramLogo, UserFocus } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

import { sendContactEmail } from "@/services/send-contact-email";

export function FormMessage() {
  const [formContent, setFormContent] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleSubmitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendContactEmail({
      name: formContent.name,
      email: formContent.email,
      message: formContent.message,
    });
    setFormContent({
      name: "",
      email: "",
      message: "",
    });
  }
  return (
    <section className="flex flex-col gap-[54px] md:gap-[116px] items-center justify-center w-full mb-[132px] md:mb-[264px]">
      <h3 className="font-lufga  font-bold text-[32px] md:text-5xl tracking-[4.16px] md:tracking-[6.24px] max-w-[372px] md:max-w-[555px] lg:max-w-[617px] w-full text-center">
        Ficou interessado?
        <br />
        <span className="text-purple-principal">Me mande uma mensagem!</span>
      </h3>
      <form
        className="flex flex-col md:flex-row md:flex-wrap lg:flex-col  items-center justify-center gap-[22px] md:gap-[26px] lg:gap-8 px-6 md:px-8 lg:px-0"
        onSubmit={handleSubmitMessage}
      >
        <div className="flex items-center justify-center relative h-[60px] w-[302px]">
          <input
            type="text"
            placeholder="Nome"
            className="outline-none w-full h-full bg-white shadow-input rounded-[15px] pl-16"
            required
            value={formContent.name}
            onChange={(event) => {
              setFormContent((prevState) => {
                return { ...prevState, name: event.target.value };
              });
            }}
          />
          <UserFocus size={30} color="#00000040" className="absolute left-4" />
        </div>
        <div className="flex items-center justify-center relative h-[60px] w-[302px]">
          <input
            type="email"
            placeholder="Email"
            className="outline-none w-full h-full bg-white shadow-input rounded-[15px] pl-16"
            required
            value={formContent.email}
            onChange={(event) => {
              setFormContent((prevState) => {
                return { ...prevState, email: event.target.value };
              });
            }}
          />
          <At size={30} color="#00000040" className="absolute left-4" />
        </div>
        <div className="flex items-center justify-center relative h-[60px] lg:h-[150px] w-[302px]">
          <textarea
            placeholder="Sua mensagem"
            className="outline-none w-full h-full bg-white shadow-input rounded-[15px] pl-16 pt-4 resize-none"
            required
            value={formContent.message}
            onChange={(event) => {
              setFormContent((prevState) => {
                return { ...prevState, message: event.target.value };
              });
            }}
          />
          <ChatDots
            size={30}
            color="#00000040"
            className="absolute left-4 lg:top-4"
          />
        </div>
        <div className="h-[60px] w-[158px] lg:w-[214px] ">
          <button className="flex gap-3 items-center justify-center bg-purple-principal text-white w-full h-full rounded-[20px]">
            <TelegramLogo color="#FFFFFF" size={30} />
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
