import { handler } from '../../../handlers/HelloWorld';
import { APIGatewayProxyEvent } from 'aws-lambda';

describe('Hello World Handler', () => {
  it('should return a 200 status code and a message', async () => {
    // setup

    // @ts-ignore
    const event: APIGatewayProxyEvent = {};

    // exercise
    const result = await handler(event);

    // verify
    expect(result.statusCode).toEqual(200);
    expect(typeof result.body).toEqual('string');

    const body = JSON.parse(result.body);
    expect(body.message).toEqual('Hello World!!!');
    expect(body.timestamp).toBeTruthy();
  });
});
