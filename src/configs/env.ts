import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: '../../.env' });

export const { MONGO_URL }: any = process.env;
