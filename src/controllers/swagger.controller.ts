/**
 * @module controllers/mutation
 * @author Jose de Jesus Alvarez Hernandez
 * @desc mutation Controllers
 */

import { Request, Response, NextFunction } from 'express'

/** Swagger JSDoc instance */
import swaggerJSDoc from 'swagger-jsdoc';

/** Swagger JSDoc instance | Environments */
//import { getDefinition } from '../config/environments.config';
import { swaggerDefinition } from '../config/environments.interface'
import { dev_api_url, prod_api_url } from '../config/main.config'
import { nodeEnv } from '../config/main.config';
 
const hasMutation = (req: Request, res: Response, next: NextFunction) => { 
    /** Swagger options/definition object */
    const options = {
        failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
        // import swaggerDefinitions
        definition: {
            info: {
                title: 'API',
                version: '1.0.1',
                description: 'RESTFUL API Documentation',
            },
            host: nodeEnv === 'development' ? dev_api_url : prod_api_url,
            basePath: '/',
            tags: [
                { name: 'API' },
            ],
        },
        // path to the API docs
        apis: [
            //'../routes/v1/**/*.route.*',
            //'../routes/v1/v1.route.*',
        ],
    };
    /** Swagger specification */
    const swaggerSpec = swaggerJSDoc(options);
    if (swaggerSpec) {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    } else res.send('hola');
}
  
export default hasMutation;