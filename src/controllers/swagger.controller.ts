/**
 * @module controllers/mutation
 * @author Jose de Jesus Alvarez Hernandez
 * @desc mutation Controllers
 */

import { Request, Response, NextFunction } from 'express'

/** Swagger JSDoc instance */
import swaggerJSDoc from 'swagger-jsdoc';

/** Swagger JSDoc instance | Environments */
import { getDefinition } from '../config/environments.config';
 
const hasMutation = (req: Request, res: Response, next: NextFunction) => { 
    /** Swagger options/definition object */
    const options = {
        // import swaggerDefinitions
        swaggerDefinition: getDefinition,
        // path to the API docs
        apis: [
            //'../routes/v1/**/*.route.*',
            //'../routes/v1/v1.route.*',
        ],
    };
    /** Swagger specification */
    //const swaggerSpec = swaggerJSDoc(options);
    //res.setHeader('Content-Type', 'application/json');
    //res.send(swaggerSpec);
    res.status(200).send('API swagger!!')
}
  
export default hasMutation;