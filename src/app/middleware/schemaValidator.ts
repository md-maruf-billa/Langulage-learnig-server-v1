import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

const schemaValidator = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);
        } catch (err) {
            return next(err);
        }
        return next();
    }
}
export default schemaValidator;