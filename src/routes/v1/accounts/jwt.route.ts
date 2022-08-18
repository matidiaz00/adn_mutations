import { Router } from 'express';
import jwt from '../../../controllers/jwt.controller';

const router = Router();

/**
 * @openapi
 * components:
 *  schemas:
 *   get_jwt_response:
 *     type: object
 *     properties:
 *       uid:
 *         type: string
 *       emailVerified:
 *         type: boolean
 *       disabled:
 *         type: boolean
 *       metadata:
 *         type: object
 *         properties:
 *           lastSignInTime:
 *             type: string
 *           creationTime:
 *             type: string
 *       tokensValidAfterTime:
 *         type: string
 *       providerData:
 *         type: array
 *         items:
 *           type: string
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
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/get_jwt_response'
 *             example:
 *               uid: hZfTGeyAUWhq5x1uDZzW3kB7kkb2
 *               emailVerified: false
 *               disabled: false
 *               metadata: 
 *                 lastSignInTime: null
 *                 creationTime: Wed, 17 Aug 2022 22:46:58 GMT
 *               tokensValidAfterTime: Wed, 17 Aug 2022 22:46:58 GMT
 *               providerData: []
 */

router.get('/', jwt);

export default router;