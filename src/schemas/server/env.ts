import z from "zod";

const envVariables = z.object({
    MAIL_USER: z.string().trim().min(1),
    MAIL_PASSWORD: z.string().trim().min(1),
    MAIL_PORT: z.string(),
    GRAPHQL_API_URL: z.string().url(),
    GRAPHQL_TOKEN: z.string(),
});

export const envSchema = envVariables.parse({
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    MAIL_PORT: process.env.MAIL_PORT,
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    GRAPHQL_TOKEN: process.env.GRAPHQL_TOKEN,
});
