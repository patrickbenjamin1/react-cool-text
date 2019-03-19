import {Request} from 'express';

export const getsession = (req: Request): string => {
    return (req.headers as any).session;
}