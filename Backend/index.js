import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import departmentRouter from './Routes/department.js'
import authRouter from './Routes/auth.js'
import connectToDatabase from './DB/db.js'


dotenv.config();
connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/department', departmentRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});