import { z } from "zod";

export const formContactSchema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    email: z.string().email({ message: "Email inválido!" }).min(1, { message: "Email é obrigatório" }),
    message: z.string().min(1, { message: "Mensagem é obrigatória" })
})

export type FormContactType = z.infer<typeof formContactSchema>;