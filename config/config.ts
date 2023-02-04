import dotenv from "dotenv";

dotenv.config();
// application config
const config = {
  SERVER_HOST: process.env.SERVER_HOST,
  SERVER_PORT: process.env.SERVER_PORT
};

export default config;
