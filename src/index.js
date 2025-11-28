import express from "express";
import dotenv from "dotenv";
import "./config/db.js";

import router from "./app.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`SV en puerto ${PORT}`));
