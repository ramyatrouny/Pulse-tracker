# Pulse Tracker

Pulse Tracker is a RESTful horizontally scalable discovery service built using the [Node Framework](https://github.com/ubio/node-framework), a library encapsulating common conventions in microservices development. This service tracks heartbeat signals from various client applications, maintaining their active status and metadata in a structured manner.

## Features

- **Domain-Driven Design**: Adopts a structured approach to organizing application logic around the business domain.
- **Application Structuring**: Follows a clear and scalable application structure as outlined by the Node Framework.
- **Environment Variables Handling**: Efficient management of environment configurations for different stages of deployment.
- **Logging**: Comprehensive logging mechanisms for effective monitoring and debugging.
- **HTTP Routing and Validation**: Robust routing and request validation ensuring reliable API interactions.
- **Entity Validation, Presentation, and (De)Serialization**: Ensures data integrity and proper representation across different layers of the application.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Access to a MongoDB database for storing the heartbeat data.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ramyatrouny/pulse-tracker.git
```

2. Navigate into the project directory:

```bash
cd pulse-tracker
```

3. Install the dependencies:

```bash
npm install
```

## Documentation

A comprehensive, step-by-step guide is available in the application's documentation for detailed reference.

[Application Documentation](docs/README.md)

## API Endpoints

- `POST /:group/:id`: Register or update an application instance in the specified `group`.
- `DELETE /:group/:id`: Unregister an application instance.
- `GET /`: Get a summary of all currently registered groups.
- `GET /:group`: Get details of instances within a specific `group`.

## Development

To contribute to Pulse Tracker, you can follow the steps below:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.
