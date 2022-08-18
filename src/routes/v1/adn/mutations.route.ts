import { Router } from 'express';
import mutation from '../../../controllers/mutations.controller';

const router = Router();

/**
 * @openapi
 * components:
 *   examples:
 *     type: object
 *     properties:
 *       dna:
 *         type: array
 */

/**
 * @openapi
 * components:
 *   dna_request:
 *     type: object
 *     properties:
 *       dna:
 *         type: array
 */

/**
 * @openapi
 * components:
 *   data_example:
 *     type: object
 *     properties:
 *       dna:
 *         type: array
 *         example: [
 *           "ATGCGA", "CAGTGC", "TTATGT",
 *           "AGAAGG", "AGTCAG", "TCACTG"
 *         ]
 *       hasMutation:
 *         type: boolean
 *         example: true
 *       upsert:
 *         type: boolean
 *         example: true
 *       new:
 *         type: boolean
 *         example: true
 *       setDefaultsOnInsert:
 *         type: boolean
 *         example: true
 */

/**
 * @openapi
 * components:
 *   mutation_success:
 *     type: object
 *     properties:
 *       hasMutation:
 *         type: boolean
 *         example: true
 *       message:
 *         type: string
 *         example: Has mutation
 *       data:
 *         $ref: '#/components/data_example'
 */

/**
 * @openapi
 * /dna/mutations:
 *   post:
 *     summary: Indicates if a DNA has been mutated.
 *     security: 
 *       - bearerAuth: []
 *     tags:
 *       - DNA
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/dna_request'
 *           examples:
 *             hasMutation1:
 *                value:
 *                  { dna: [ "ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "AGTCAG", "TCACTG" ] }
 *             hasMutation2:
 *                value:
 *                  { dna: [ "ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG" ] }
 *             noMutation:
 *                value:
 *                  { dna: [ "ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG" ] }
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/mutation_success'
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Access token does not have the required scope
 */

router.post('/', mutation);

export default router;