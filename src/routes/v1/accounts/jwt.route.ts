import { Router } from 'express';
import jwt from '../../../controllers/jwt.controller';

const router = Router();

/**
 * @openapi
 * components:
 *   metadata:
 *     type: object
 *     properties:
 *       lastSignInTime:
 *         type: string
 *         example: 
 *       creationTime:
 *         type: string
 *         example: Wed, 17 Aug 2022 22:46:58 GMT
 */

/**
 * @openapi
 * components:
 *   jwt:
 *     type: object
 *     properties:
 *       uid:
 *         type: string
 *         example: hZfTGeyAUWhq5x1uDZzW3kB7kkb2
 *       emailVerified:
 *         type: boolean
 *         example: false
 *       disabled:
 *         type: boolean
 *         example: false
 *       metadata:
 *         $ref: '#/components/metadata'
 *       tokensValidAfterTime:
 *         type: string
 *         example: Wed, 17 Aug 2022 22:46:58 GMT
 *       providerData:
 *         type: array
 *         example: []
 */

/**
 * @openapi
 * /accounts/json-web-token:
 *   get:
 *     summary: Gives the JSON Web Token or JWT.
 *     tags:
 *       - Accounts
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/jwt'
 */

router.get('/', jwt);

export default router;