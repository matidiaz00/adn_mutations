import { api } from '../../../index';
import request from 'supertest';

jest.useRealTimers();

const URL = '/v1/accounts/json-web-token';

describe(`GET ${URL}`, () => {

    it("Should response with a 200 status code", async () => {
        const res = await request(api).get(URL).send();
        expect(res.statusCode).toBe(200);
    })

    it("Should have a content-type: application/json in header", async () => {
        const res = await request(api).get(URL).send();
        expect(res.headers['content-type']).toEqual(
            expect.stringContaining('application/json')
        );
    })

    it("Should response with a specific json", async () => {
        const res = await request(api).get(URL).send();
        expect(typeof res.body.uid).toBe('string');
        expect(res.body.disabled).toBe(false);
        expect(typeof res.body.tokensValidAfterTime).toBe('string');
    })

})