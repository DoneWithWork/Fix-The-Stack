import { EmailTemplate } from "@/components/email/email-template";
import { server } from "@/lib/env/server";
import { Resend } from 'resend';

const resend = new Resend(server.RESEND_API_KEY);

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Fix The Stack <alert@fixthestack.com>',
            to: ['fingfingsavage@gmail.com'],
            subject: 'Hello world',
            react: EmailTemplate({ firstName: 'John' }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}