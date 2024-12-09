import { ZodError } from 'zod';
import { TErrorRes } from './errorTypes';


const zodErrorHandler = (err: ZodError): TErrorRes => {
    const errors = err.issues.map((issue) => {
        return {
            message: issue.message,
            path: issue.path[issue.path.length - 1] as string,
        };
    });

    return {
        statusCode: 500,
        message: 'Validation Failed !!',
        errorSources: errors,
    };
};

export default zodErrorHandler;
