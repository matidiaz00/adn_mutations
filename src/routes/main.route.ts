import { Request, Response } from 'express'
import SwaggerController from "../controllers/swagger.controller";
import { Router } from "express";

const router = Router();

// Init get
router.get('/', (req: Request, res: Response) => res.status(200).send('API OK!!'));

// serve swagger
router.get('/swagger.json', SwaggerController);

export default router;