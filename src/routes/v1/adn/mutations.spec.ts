import { app } from './../../../index';
import request from 'supertest';

jest.useRealTimers();

describe('POST /v1/dna/mutations', async () => {

    const dna_examples = { 
        hasMutation: { dna: [ "ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "AGTCAG", "TCACTG" ] },
        noMutation: { dna: [ "ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG" ] }
    }
    const response = request(app).post('/v1/dna/mutations');
    const res_with_mutation = await response.send(dna_examples.hasMutation);
    const res_without_mutation = await response.send(dna_examples.noMutation);
    const res_without_request_body = await response.send();

    it("Should response with a 200 status code", async () => {
        expect(res_with_mutation.statusCode).toBe(200);
    })

    it("Should response with a 403 status code", async () => {
        expect(res_without_request_body.statusCode).toBe(403);
    })

    it("Should have a content-type: application/json in header", async () => {
        expect(res_with_mutation.headers['content-type']).toEqual(
            expect.stringContaining('application/json')
        );
    })

    it("Should response with a specific json", async () => {
        const body = res_with_mutation.body;
        expect(typeof body.hasMutation).toBe('boolean');
        expect(typeof body.message).toBe('string');
    })

    it("Should response with a dna NOT have mutation", async () => {
        expect(res_without_mutation.body.hasMutation).toBe(false);
    })

    it("Should response with a dna have mutation", async () => {
        expect(res_with_mutation.body.hasMutation).toBe(true);
    })

    // Que pasa si se envia un request body incorrecto o no se envia ninguno
    //- En el caso de POST tambien chequea todos los casos de envio del body request diferentes

})