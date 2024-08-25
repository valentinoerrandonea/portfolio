import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json(); // Asegúrate de que los datos se estén recibiendo correctamente
    const { email, subject, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'valentino@landtail.net',  // Tu correo
      subject: `Nuevo mensaje de ${email}: ${subject}`,
      text: `Mensaje: ${message}\n\nDe: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}