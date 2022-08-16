/** 
 * @module routes/mutations 
 * @author Jose de Jesus Alvarez Hernandez
 * @desc mutation API routes  
 */

/** Express dependency */
import { Router } from 'express';

/** Router dependency */
const router = Router();

import stats from '../../../controllers/stats.controller';

/**
 * @swagger
 * definitions:
 *   error:
 *     properties:
 *       code:
 *         type: integer
 *       message:
 *         type: string
 */
/**
* @swagger
* definitions:
*   DNAObject:
*     properties:
*       dna:
*         type: array   
*         items: 
*           type: string
*/
/**
 * @swagger
 * definitions:
 *   APIDNASuccess:
 *     properties:
 *       count_mutations:
 *         type: number
 *       count_no_mutation:
 *         type: number
 *       ratio:
 *         type: number
 */
/**
* @swagger
* /api/stats:
*   get:
*     tags:
*       - Stats
*     description: Gives the stats of DNAs received
*     produces:
*       - application/json
*     responses:
*       200:
*         description: Successful request
*         schema:
*           $ref: '#/definitions/APIDNASuccess'
*       400:
*         description: Bad request
*         schema:
*           $ref: '#/definitions/error'
*       401:
*         description: Unauthorized access
*         schema:
*           $ref: '#/definitions/error'
*       404:
*         description: Resource not found
*         schema:
*           $ref: '#/definitions/error'
*/
router.get('/', stats);

export default router;