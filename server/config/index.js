import dotenv from 'dotenv';
dotenv.config();

export const { PORT, DB_CONNECT, PASSWORD_SECRET, JWT_SECRET } = process.env;