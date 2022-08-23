import { Request, Response, NextFunction } from 'express'
import path from 'path';
import swaggerJSDoc, { SwaggerDefinition, Options,  } from 'swagger-jsdoc';
import { prod_api_url } from '../environment'

const swaggerDefinition: SwaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'DNA Mutatios API',
        version: '1.0.1',
        description: 'This is REST API documentation made with Express. It retrieves data from DNA.',
    },
    license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
        name: 'Matias Diaz',
        url: 'https://matidiaz.com',
    },
    servers: [
        { url: prod_api_url, description: 'Production Server'}
    ],
    host: "https://us-central1-adn-mutations.cloudfunctions.net",
    basePath: "/",
    components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer'
          }
        }
    },
    security: [{
        bearerAuth: []
    }]
}

const options: Options = {     
    swaggerDefinition,
    apis: [
        path.join(__dirname, '../routes/v1/**/*.route.js')
    ],
};
 
const swaggerController = (req: Request, res: Response, next: NextFunction) => { 
    const swaggerSpec = swaggerJSDoc(options);
    res.send(swaggerSpec);
}
  
export default swaggerController;