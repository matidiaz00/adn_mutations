
import { resolve } from 'path';

/** Swagger JSDoc instance */
import swaggerJSDoc from 'swagger-jsdoc';

/** Swagger JSDoc instance | Environments */
import { getDefinition } from '../config/environments.config';

/************************************************
 * Swagger doc definition and parameterization
 ************************************************/

/** Swagger options/definition object */
export const options = {
    // import swaggerDefinitions
    swaggerDefinition: getDefinition,
    // path to the API docs
    apis: [
        //'../routes/v1/**/*.route.*',
        //'../routes/v1/v1.route.*',
    ],
};

/** Swagger specification */
export const swaggerSpec = swaggerJSDoc(options);