# Technical Design

- [APIs](#apis)
- [Environment](#environment)
- [External Dependencies](#external-dependencies)

## Environment
```mermaid
flowchart LR
  api("<img src='resources/api-svgrepo-com.svg' width='25' height='25' />"API)
  helloworld("<img src='resources/aws-icons/Arch_AWS-Lambda_16.svg' width='25' height='25' />"helloWorld)
  subgraph AWS
    direction TB
    helloworld
  end
  api <--> helloworld
```

## Sequence Diagrams

```mermaid
sequenceDiagram
    actor postman 
    box AWS
    participant apiGateway
    participant helloWorld
    end
    postman->>+apiGateway: GET /helloworld
    apiGateway->>+helloWorld: Invoke Hello World Handler
    helloWorld->>-apiGateway: Return API Response
    apiGateway->>-postman: API Response
```

## External Dependencies

| Name       | Version    | License | Purpose       |
|------------|------------|---------|---------------|
| [aws-lambda](https://www.npmjs.com/package/aws-lambda) | ^1.0.7 | [MIT](https://github.com/awspilot/cli-lambda-deploy/blob/master/LICENSE) | AWS Lambda SDK |
| [aws-sdk](https://www.npmjs.com/package/aws-sdk)| ^2.1359.0 | [Apache-2.0](https://github.com/aws/aws-sdk-js/blob/master/LICENSE.txt) | AWS SDK       |
| [dotenv-cli](https://www.npmjs.com/package/dotenv-cli) | ^7.3.0 | [MIT](https://github.com/entropitor/dotenv-cli/blob/master/LICENSE) | Load environment variables from .env files |
| [pino](https://www.npmjs.com/package/pino) | ^8.19.0 | [MIT](https://github.com/pinojs/pino/blob/master/LICENSE) | Logging library |

### External Dev Dependencies

| Name            | Version       | License | Purpose                        |
|-----------------|---------------|---------|--------------------------------|
| [@types/aws-lambda](https://www.npmjs.com/package/@types/aws-lambda) | ^8.10.114  | [MIT](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE) | TypeScript definitions for AWS Lambda |
| [@types/node](https://www.npmjs.com/package/@types/node)       | ^18.16.2   | [MIT](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE) | TypeScript definitions for Node.js |
| [dotenv](https://www.npmjs.com/package/dotenv) | ^16.0.3    | [BSD-2-Clause](https://github.com/motdotla/dotenv/blob/master/LICENSE) | Load environment variables from .env files |
| [serverless-offline](https://www.npmjs.com/package/serverless-offline?activeTab=readme) | ^12.0.4   |     [MIT](https://github.com/dherault/serverless-offline/blob/master/LICENSE)    | Emulate AWS Lambda and API Gateway locally |
| [ts-node](https://www.npmjs.com/package/ts-node) | ^10.9.1 | [MIT](https://github.com/TypeStrong/ts-node/blob/main/LICENSE) | TypeScript execution environment for Node.js |
| [typescript](https://www.npmjs.com/package/typescript) | ^5.3.2 | [Apache-2.0](https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt) | TypeScript language compiler |
