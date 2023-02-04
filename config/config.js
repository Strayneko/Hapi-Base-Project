import dotenv from "dotenv";

dotenv.config();
const config = {
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: +process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  SERVER_HOST: process.env.SERVER_HOST,
  SERVER_PORT: process.env.SERVER_PORT,
};

export default config;
