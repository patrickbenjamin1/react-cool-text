import express from 'express';
import cors from 'cors';
import * as config from '../config';

let router = express.Router();

router.use(cors({
    credentials: true,
    origin: [
        'http://localhost:8000',
        ...config.productionUrls
    ],
    methods: ['PUT', 'GET', 'POST', 'OPTIONS', 'DELETE'],
    allowedHeaders: ['session', 'content-type']
}))

export default router;