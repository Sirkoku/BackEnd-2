import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

const startServer = async () => {
try {
    await connectDB();
    app.listen(PORT, () => {
    console.log(` Servidor funcionando en http://localhost:${PORT}`);
    });
} catch (error) {
    console.error(" Error al iniciar el servidor:", error);
}
};

startServer();
