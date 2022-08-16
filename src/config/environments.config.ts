/**
 * @module config/environments
 * @author Jose de Jesus Alvarez Hernandez
 * @desc App enviroments configurations file
 */

import { EnvironmentInterface, swaggerDefinition } from './environments.interface'
import { dev_api_url, prod_api_url } from './main.config'

export const enviroment = (): EnvironmentInterface => {
    return {
        development: getDefinition(dev_api_url),
        production: getDefinition(prod_api_url)
    }
}

const getDefinition = (api_url: string): swaggerDefinition => {
    return {
        swaggerDefinition: {
            info: {
                title: 'API',
                version: '1.0.1',
                description: 'RESTFUL API Documentation',
            },
            host: api_url,
            basePath: '/',
            tags: [
                { name: 'API' },
            ],
        },
    }
}