import { Request, Response } from 'express';

interface ResponseError extends Error {
    status?: number;
}

const errorMiddleware = (
    err: ResponseError,
    req: Request,
    res: Response
): void => {
    console.error(err);

    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({ message });
};

export default errorMiddleware;
