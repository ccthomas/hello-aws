import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import pino from 'pino'

export const logger = pino({
    name: process.env.SERVICE || "hello-aws",
    level: process.env.LOG_LEVEL || "info"
});

/**
 * Hello World API handler.
 *
 * @param event APIGatewayProxyEvent
 * @returns {APIGatewayProxyResult}
 */
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.info('Hello World handler hit.');
    logger.info('Hello World handler hit from logger.');
    console.debug('Event', event);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello World!!",
            timestamp: new Date().toISOString(),
        })
    } as APIGatewayProxyResult;
};