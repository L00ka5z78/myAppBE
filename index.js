import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectionDB } from "./database/connectionDB.js";

const app = express();

dotenv.config();

connectionDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.listen(process.env.PORT, () => console.log(`Server is ON and running on PORT ${process.env.PORT}`))
