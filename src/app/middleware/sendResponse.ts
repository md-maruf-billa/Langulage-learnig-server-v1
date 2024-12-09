import { Response } from "express";

const sendResponse = (res: Response, payload: Record<string, any>) => {
    res.status(200)
        .send({
            success: true,
            message: payload.message,
            data: payload.data
        })
}

export default sendResponse;