import nodemailer from "nodemailer";

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });
  }

  async sendPasswordReset(email, link) {
    await this.transporter.sendMail({
      from: "Ecommerce <no-reply@ecommerce.com>",
      to: email,
      subject: "Recuperación de contraseña",
      html: `
        <h2>Reestablecer contraseña</h2>
        <p>Haz click en el siguiente botón:</p>
        <a href="${link}" style="background:#4caf50;color:white;padding:10px 20px;text-decoration:none;">Reestablecer</a>
        <p>El enlace expira en 1 hora.</p>
      `
    });
  }
}

export default new MailService();
