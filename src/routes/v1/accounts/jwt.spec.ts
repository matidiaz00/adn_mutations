import { app } from './../../../index';
import request from 'supertest';

jest.useRealTimers();

describe('GET /v1/accounts/json-web-token', async () => {

    const response = await request(app).get('/v1/accounts/json-web-token').send()

    it("Should response with a 200 status code", async () => {
        expect(response.statusCode).toBe(200);
    })

    it("Should have a content-type: application/json in header", async () => {
        expect(response.headers['content-type']).toEqual(
            expect.stringContaining('application/json')
        );
    })

    it("Should response with a specific json", async () => {
        const body = response.body;
        expect(typeof body.uid).toBe('string');
        expect(body.disabled).toBe(false);
        expect(typeof body.tokensValidAfterTime).toBe('string');
    })

})