import express, { Request, Response } from 'express';
import sendResponse from './app/middleware/sendResponse';
const app = express()

app.get('/', (req: Request, res: Response) => {
    sendResponse(res, { message: "App is running!!", data: {} })
})




// export this app
export default app