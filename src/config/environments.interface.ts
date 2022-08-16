interface swaggerInfoInterface {
    title: string;
    version: string;
    description: string;
}

interface swaggerTagInterface { name: 'API' }

export interface swaggerDefinition {
    info: swaggerInfoInterface;
    host: string;
    basePath: string;
    tags: swaggerTagInterface[];
}