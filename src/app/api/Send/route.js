import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_6a511fdD_2CL5KtH7LLsQDAVgXsJBA454");
const fromEmail = "diegofmoreno@diegodev.co.site";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Gracias por contactarme!</p>
          <p>Nuevo mensaje enviado:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}