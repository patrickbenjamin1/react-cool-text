import express from 'express';

export default (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.json({ error: err.message })
}