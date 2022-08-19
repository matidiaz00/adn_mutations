import { Router } from 'express';
import stats from '../../../controllers/stats.controller';

const router = Router();

/**
 * @openapi
 * components:
 *  schemas:
 *   get_stats_response:
 *     type: object
 *     properties:
 *       count_mutations:
 *         type: number
 *       count_no_mutation:
 *         type: number
 *       ratio:
 *         type: number
 */

/**
 * @openapi
 * /dna/stats:
 *   get:
 *     summary: Gives the stats of DNAs received.
 *     tags: 
 *       - DNA
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/get_stats_response'
 *             example:
 *               count_mutations: 40
 *               count_no_mutation: 100
 *               ratio: 0.4
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Access token does not have the required scope
 */

router.get('/', stats);

export default router;