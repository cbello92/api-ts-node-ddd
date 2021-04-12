import { config } from 'dotenv';
config();

export default {
    PORT: process.env.PORT,
    DB_PG_USER: process.env.DB_PG_USER,
    DB_PG_HOST: process.env.DB_PG_HOST,
    DB_PG_PASSWORD: process.env.DB_PG_PASSWORD,
    DB_PG_DATABASE: process.env.DB_PG_DATABASE,
    DB_PG_PORT: process.env.DB_PG_PORT,
    API_CENTRAL: process.env.API_CENTRAL
};