import { api } from '../../../index';
import request from 'supertest';

jest.useRealTimers();

const URL = '/v1/dna/stats';

describe(`GET ${URL}`, () => {

    it("Should response with a 200 status code", async () => {
        const res = await request(api).get(URL).send()
        expect(res.statusCode).toBe(200);
    })

    it("Should have a content-type: application/json in header", async () => {
        const res = await request(api).get(URL).send()
        expect(res.headers['content-type']).toEqual(
            expect.stringContaining('application/json')
        );
    })

    it("Should response with a specific json", async () => {
        const res = await request(api).get(URL).send()
        expect(typeof res.body.count_mutations).toBe('number');
        expect(typeof res.body.count_no_mutation).toBe('number');
        expect(typeof res.body.ratio).toBe('number');
    })

})