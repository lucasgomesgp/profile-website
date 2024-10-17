import { NextRequest, NextResponse } from "next/server";

import { htmlTemplate } from "@/utils/htmlTemplate";
import { transporter } from "@/config/mail";

interface BodyObject {
    name: string,
    email: string,
    message: string,
}
export async function POST(request: NextRequest) {
    const user = await request.json() as BodyObject;

    try {
        const result = await transporter.sendMail({
            from: `Lucas Gomes 👥 <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_USER,
            subject: "Mensagem de contato de: " + user.email,
            text: user.message,
            html: htmlTemplate(user.name, user.message, user.email),
        })
        return NextResponse.json({
            accepted: result.accepted,
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Unable to send your email ", error }, { status: 500 });
    }

}