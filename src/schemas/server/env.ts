import z from "zod";

const envVariables = z.object({
    MAIL_USER: z.string().trim().min(1),
    MAIL_PASSWORD: z.string().trim().min(1),
    MAIL_PORT: z.string().min(3),
    GRAPHQL_API_URL: z.string().url().min(1),
    GRAPHQL_TOKEN: z.string().min(1),
});

export const envSchema = envVariables.parse(process.env);
