export const Port: string | number = process.env.port || process.env.PORT || 3001;

export const dev_api_url: string = `http://localhost:${Port}/adn-mutations/us-central1/app/api/v1`;
export const prod_api_url: string = `https://us-central1-adn-mutations.cloudfunctions.net/app/api/v1`;

export const nodeEnv: string = process.env.NODE_ENV || 'development';