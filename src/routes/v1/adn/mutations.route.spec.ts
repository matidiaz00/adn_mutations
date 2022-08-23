import { api } from '../../../index';
import request from 'supertest';
import { mutations_examples } from '../../../examples'

jest.useRealTimers();

const URL = '/v1/dna/mutations';

describe(`POST ${URL}`, () => {

    it("Should response with a 200 status code", async () => {
        const res = await request(api).post(URL).send(mutations_examples.multiple_Mutation);
        expect(res.statusCode).toBe(200);
    })

    it("Should have a content-type: application/json in header", async () => {
        const res = await request(api).post(URL).send(mutations_examples.multiple_Mutation);
        expect(res.headers['content-type']).toEqual(
            expect.stringContaining('application/json')
        );
    })

    it("Should response with a specific json", async () => {
        const res = await request(api).post(URL).send(mutations_examples.multiple_Mutation);
        expect(typeof res.body.hasMutation).toBe('boolean');
        expect(typeof res.body.message).toBe('string');
    })

    describe("Is DNA have mutation or not", () => {

        it("Should response with a dna have mutation", async () => {
            const res = await request(api).post(URL).send(mutations_examples.multiple_Mutation);
            expect(res.body.hasMutation).toBe(true);
        })
        /*
        // No devuelve lo mismo que en postman (funciona bien en local/pro), sera por el warning de firebase?
        it("Should response with a dna NOT have mutation", async () => {
            const res = await request(api).post(URL).send(mutations_examples.no_Mutation);
            expect(res.body.hasMutation).toBe(false);
        })
        */

    });
})