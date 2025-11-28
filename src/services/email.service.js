import nodemailer from "nodemailer";

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
    }

    async sendPasswordReset(email, token) {
        const link = `${process.env.FRONT_URL}/reset-password?token=${token}`;

        return await this.transporter.sendMail({
            from: `"Ecommerce" <${process.env.MAIL_USER}>`,
            to: email,
            subject: "Restablecer contraseña",
            html: `
                <h1>Restablecer contraseña</h1>
                <p>Haz clic en el botón para cambiar tu contraseña</p>
                <a href="${link}" style="padding:10px;border-radius:4px;background:#005eff;color:white">
                    Restablecer contraseña
                </a>
                <p>Este enlace expira en 1 hora.</p>
            `
        });
    }
}

export default new EmailService();
