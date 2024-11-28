
import EmailTemplate from '@/components/emailTemplate/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function GET() {
   
    try {
const {data } = await resend.emails.send({
    from: 'Bernard Ngassa <onboarding@resend.dev>',
    to: ['makombengassa@gmail.com'],
    subject: 'Welcome to WordPress AG',
    react: EmailTemplate({ username: 'Bernard' }),
})
console.log({data:data})
        return NextResponse.json({
          data:data
        })
    } catch (error) {
        return NextResponse.json({ error})
    }

}