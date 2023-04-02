import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {connectionDB} from "./database/connectionDB.js";
import todosRoutes from './routes/todos.route.js';
import usersRoutes from './routes/users.route.js';

const app = express();

dotenv.config();
connectionDB()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/api/todos", todosRoutes)
app.use('/api/users', usersRoutes)

app.listen(process.env.PORT, () => console.log(`Server is ON and running on PORT ${process.env.PORT}`))
