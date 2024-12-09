import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import appConfig from '../../config/appConfig';
import zodErrorHandler from './zodErrorHandler';
import AppError from './appError';
import mongooseErrorHandler from './mongooseValidationErr';
const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    // pre defiend valriable
    let statusCode = 500;
    let message = 'Something went wrong!!';
    let errorSources = [
        {
            message: '',
            path: '',
        },
    ];
    const stack = appConfig.env_mode === 'development' ? err.stack : null;

    // check zod err
    if (err instanceof ZodError) {
        const zodErr = zodErrorHandler(err);
        statusCode = zodErr.statusCode;
        message = zodErr.message;
        errorSources = zodErr.errorSources;
    }
    // check mongoose error
    else if (err.name === 'ValidationError') {
        const zodErr = mongooseErrorHandler(err);
        statusCode = zodErr.statusCode;
        message = zodErr.message;
        errorSources = zodErr.errorSources;
    } else if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
        errorSources = [
            {
                message: err.message,
                path: '',
            },
        ];
    } else if (err instanceof Error) {
        message = err.message;
        errorSources = [
            {
                message: err.message,
                path: '',
            },
        ];
    }

    // send error res
    res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        stack,
    });
};

export default globalErrorHandler;
