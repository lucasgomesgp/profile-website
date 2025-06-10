"use client";

import {
  At,
  ChatDots,
  CheckCircle,
  SpinnerGap,
  TelegramLogo,
  UserFocus,
} from "@phosphor-icons/react";
import {
  FormContactType,
  formContactSchema,
} from "@/utils/schemas/form-contact";

import { sendContactEmail } from "@/services/send-contact-email";
import { useForm } from "react-hook-form";
import { useNotifications } from "reapop";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export function FormMessage() {
  const { notify } = useNotifications();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormContactType>({
    resolver: zodResolver(formContactSchema),
  });

  async function onSubmit({ email, name, message }: FormContactType) {
    try {
      setIsLoading(true);
      notify("Enviando...", { status: "loading" });
      setIsLoading(true);
      await sendContactEmail({
        email,
        name,
        message,
      });
      reset();
      notify("Email enviado", { status: "success" });
      setIsLoading(false);
      console.log(isSubmitSuccessful);
    } catch {
      notify("Erro ao enviar o email", { status: "error" });
    }
  }
  function htmlButtonSubmittingStages() {
    return (
      <>
        {" "}
        {isLoading && isSubmitting ? (
          <div className="flex gap-3 items-center justify-center">
            <SpinnerGap color="#FFFFFF" size={30} className="animate-spin" />
            <span>Enviando...</span>
          </div>
        ) : (
          <div
            className={` flex gap-3 items-center justify-center ${isSubmitSuccessful ? "animate-text-disapear-delay" : ""
              }`}
          >
            <TelegramLogo color="#FFFFFF" size={30} />
            <span>Enviar</span>
          </div>
        )}
        {isSubmitSuccessful && (
          <div className="flex gap-3 items-center justify-center animate-text-disapear  absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] ">
            <CheckCircle color="#fff" size={30} />
            <span>Enviado!</span>
          </div>
        )}
      </>
    );
  }
  return (
    <section
      className="flex flex-col gap-[54px] md:gap-[116px] items-center justify-center w-full mb-[132px] md:mb-[264px]"
      id="contact"
    >
      <h3 className="font-lufga  text-purple-principal font-bold text-[32px] md:text-4xl tracking-[4.16px] md:tracking-[4.24px] max-w-[372px] md:max-w-[555px] lg:max-w-[617px] w-full text-center">
        Entre em contato comigo!
      </h3>
      <form
        className="flex flex-col md:flex-row md:flex-wrap lg:flex-col  items-center justify-center gap-[22px] md:gap-[26px] lg:gap-8 px-6 md:px-8 lg:px-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center relative h-[60px] w-[302px]">
            <input
              type="text"
              placeholder="Nome"
              className="outline-none w-full h-full bg-white shadow-input rounded-[15px] pl-16"
              {...register("name")}
            />
            <UserFocus
              size={30}
              color="#00000040"
              className="absolute left-4"
            />
          </div>
          {errors.name?.message && (
            <p className="text-sm text-red-500 font-bold">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center relative h-[60px] w-[302px]">
            <input
              type="email"
              placeholder="Email"
              className="outline-none w-full h-full bg-white shadow-input rounded-[15px] pl-16"
              {...register("email")}
            />
            <At size={30} color="#00000040" className="absolute left-4" />
          </div>
          {errors.email?.message && (
            <p className="text-sm text-red-500 font-bold">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center relative h-[60px] lg:h-[150px] w-[302px]">
            <textarea
              placeholder="Sua mensagem"
              className="outline-none w-full h-full bg-white shadow-input rounded-[15px] pl-16 pt-4 resize-none"
              {...register("message")}
            />
            <ChatDots
              size={30}
              color="#00000040"
              className="absolute left-4 lg:top-4"
            />
          </div>
          {errors.message?.message && (
            <p className="text-sm text-red-500 font-bold">
              {errors.message?.message}
            </p>
          )}
        </div>
        <div className="h-[60px] w-[158px] lg:w-[214px] ">
          <button
            disabled={isLoading || isSubmitting}
            className="disabled:opacity-90 disabled:cursor-not-allowed bg-purple-principal text-white w-full h-full rounded-[20px] relative"
          >
            {htmlButtonSubmittingStages()}
          </button>
        </div>
      </form>
    </section>
  );
}
