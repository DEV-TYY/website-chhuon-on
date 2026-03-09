import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const resend = new Resend(config.resendApiKey);

  try {
    await resend.emails.send({
      from: "suontii2023@gmail.com",
      to: config.emailAddressTo,
      subject: `New Contact - ${config.appName}`,
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Phone: ${body.code} ${body.phone}
        Message: ${body.message}
      `,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Phone:</b> ${body.code} ${body.phone}</p>
        <p><b>Message:</b> ${body.message}</p>
      `
    });

    return { success: true, message: "Email sent successfully" };
  } catch (error: any) {
    console.error("Email error:", error);
    return { success: false, message: "Email failed to send" };
  }
});