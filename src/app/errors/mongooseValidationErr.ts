import mongoose from 'mongoose';
import { TErrorRes } from './errorTypes';


const mongooseErrorHandler = (
    err: mongoose.Error.ValidationError,
): TErrorRes=> {
    const errors = Object.values(err.errors).map((issue) => {
        return {
            message: issue.message,
            path: issue.name,
        };
    });

    return {
        statusCode: 500,
        message: 'Validation Failed !!',
        errorSources: errors,
    };
};

export default mongooseErrorHandler;
