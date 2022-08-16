/** Swagger JSDoc instance */
import { resolve } from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

/** Swagger JSDoc instance | Environments */
import { enviroment } from '../config/environments.config';

/** Node Environment */
import { nodeEnv } from '../config/main.config';

/** Get definition object */
const definition: any = enviroment()

/************************************************
 * Swagger doc definition and parameterization
 ************************************************/

/** Swagger options/definition object */
const options = {
    // import swaggerDefinitions
    swaggerDefinition: definition[nodeEnv].swaggerDefinition,
    // path to the API docs
    apis: [
        resolve(__dirname, '../') + '/routes/**/*.route.js',
    ],
};

/** Swagger specification */
export const swaggerSpec = swaggerJSDoc(options);