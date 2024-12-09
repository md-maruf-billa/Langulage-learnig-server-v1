import 'dotenv/config';

const appConfig = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    env_mode: process.env.ENV_MODE,

}

export default appConfig;