interface swaggerInfoInterface {
    title: string;
    version: string;
    description: string;
}

interface swaggerTagInterface { name: 'API' }

interface swaggerDefinitionDataInterface {
    info: swaggerInfoInterface;
    host: string;
    basePath: string;
    tags: swaggerTagInterface[];
}

export interface swaggerDefinition {
    swaggerDefinition: swaggerDefinitionDataInterface;
}

export interface EnvironmentInterface {
    development: swaggerDefinition;
    production: swaggerDefinition;
}