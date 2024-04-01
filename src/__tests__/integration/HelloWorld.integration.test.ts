import request from 'supertest';

const API: string = process.env.SERVICE_API || 'http://127.0.0.1:4002/offline';

describe('Integration Test', () => {
    it('should return a 200 status code and a message', async () => {

        // exercise

        const response = await request(API)
            .get('/helloworld')
            .send();

        // verify

        expect(response.status).toEqual(200);
        expect(response.body.message).toEqual('Hello World!');
        expect(response.body.timestamp).toBeTruthy();
    });
});
