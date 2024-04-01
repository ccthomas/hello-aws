# Hello AWS

Demo [TypeScript](https://www.typescriptlang.org) micro-service for [AWS](https://aws.amazon.com) Deployments.

## Getting Started

A Postman Collection is provided for hitting service endpoints.

### Offline - Locally

1. Run Serverless AWS Services

    Run serverless offline.
    ```bash
    npm run start
    ```

### Testing

This service supports both unit & integration tests.

#### Integration - Offline

Offline integration tests verify the service runs successfully in a controlled environment.

```bash
npm run test:integration
```

#### Unit

Unit tests verify that each individual chunk of code works as expected.

```bash
npm run test:unit
```

## Technical Design

[Technical Design Document](docs/TECHNICAL_DESIGN.md)

## Contributing

This project follows [Feature branch workflow](https://docs.gitlab.com/ee/gitlab-basics/feature_branch_workflow.html)

## License

[ISC License](LICENSE)
