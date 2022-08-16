import { Request, Response } from 'express'
import { swaggerSpec } from "../services/swagger.services";
import { Router } from "express";

const router = Router();

// Init get
router.get('/', (req: Request, res: Response) => res.status(200).send('API OK!!'));

// serve swagger
router.get('/swagger.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

export default router;