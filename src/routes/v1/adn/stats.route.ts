import { Router } from 'express';
import stats from '../../../controllers/stats.controller';

const router = Router();

/**
 * @openapi
 * components:
 *   stats:
 *     type: object
 *     properties:
 *       count_mutations:
 *         type: number
 *         example: 40
 *       count_no_mutation:
 *         type: number
 *         example: 100
 *       ratio:
 *         type: number
 *         example: 0.4
 */

/**
 * @openapi
 * /dna/stats:
 *   get:
 *     summary: Gives the stats of DNAs received.
 *     security:
 *       - bearerAuth: []
 *     tags: 
 *       - DNA
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/stats'
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Access token does not have the required scope
 */

router.get('/', stats);

export default router;