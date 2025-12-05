import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config();
const prisma = new PrismaClient({
  // In v7, you **must** pass either adapter or accelerateUrl
  accelerateUrl: process.env.DATABASE_URL, // treat your Neon URL as accelerateUrl if you want a quick fix
});

export default prisma;
