/**
 * @module config/environments
 * @author Jose de Jesus Alvarez Hernandez
 * @desc App enviroments configurations file
 */

import { swaggerDefinition } from './environments.interface'
import { dev_api_url, prod_api_url } from './main.config'
import { nodeEnv } from './main.config';

export const getDefinition: swaggerDefinition = {
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
}