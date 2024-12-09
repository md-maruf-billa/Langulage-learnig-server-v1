import mongoose from 'mongoose';
import app from './app';
import appConfig from './config/appConfig';



async function main() {
    await mongoose.connect(appConfig.DB_URL as string);
    app.listen(appConfig.PORT, () => {
        console.log(`Example app listening on port ${appConfig.PORT}`)
    })

}

main().catch(err => console.log(err));