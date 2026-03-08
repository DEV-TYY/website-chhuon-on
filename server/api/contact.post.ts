import { readBody } from 'h3'
import nodemailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig() // server runtime config

  const transporter = nodemailer.createTransport(
    sgTransport({ auth: { api_key: config.sendgridApiKey } })
  )

  try {
    await transporter.sendMail({
      from: `"${config.public.appName}" <${config.emailAddress}>`,
      to: config.emailAddressTo,
      subject: `New message from ${body.name}`,
      text: `Name: ${body.name}\nPhone: ${body.code} ${body.phone}\nEmail: ${body.email}\nMessage:\n${body.message}`,
      html: `<p><strong>Name:</strong> ${body.name}</p>
             <p><strong>Phone:</strong> ${body.code} ${body.phone}</p>
             <p><strong>Email:</strong> ${body.email}</p>
             <p><strong>Message:</strong><br/>${body.message}</p>`,
    })

    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, message: 'Failed to send email.' }
  }
})