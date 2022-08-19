import { app } from './../../../index';
import request from 'supertest';

jest.useRealTimers();

describe('GET /v1/dna/stats', async () => {

    const response = await request(app).get('/v1/dna/stats').send()

    it("Should response with a 200 status code", () => {
        expect(response.statusCode).toBe(200);
    })

    it("Should have a content-type: application/json in header", () => {
        expect(response.headers['content-type']).toEqual(
            expect.stringContaining('application/json')
        );
    })

    it("Should response with a specific json", () => {
        const body = response.body;
        expect(typeof body.count_mutations).toBe('number');
        expect(typeof body.count_no_mutation).toBe('number');
        expect(typeof body.ratio).toBe('number');
    })

})