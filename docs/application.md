# Application Scope Overview

The `App` class, defined in our codebase, extends the `Application` class provided by `@ubio/framework`. It serves as the core of our application, orchestrating the lifecycle and scope management. Key features of this class include:

- **Global Scope Management**: Through `createGlobalScope()`, the application initializes global resources and configurations. This setup is crucial for creating a shared context for the app's runtime environment.

- **HTTP Request Scope**: The `createHttpRequestScope()` method allows for the creation of a separate context for each HTTP request. This ensures that request-specific processing is handled efficiently and independently.

- **Server Lifecycle Control**: With `beforeStart()` and `afterStop()` methods, the application manages the HTTP server's lifecycle, starting it before the app fully activates and gracefully shutting it down after the app stops.

This structure not only provides a robust foundation for building scalable web applications but also ensures that the system's resources are managed efficiently, adhering to best practices in modern application development.

```js
import { Application } from '@ubio/framework';

export class App extends Application {
    // Global Scope
    override createGlobalScope() {
        const mesh = super.createGlobalScope();
        return mesh;
    }

    // HTTP Request Scope
    override createHttpRequestScope() {
        const mesh = super.createHttpRequestScope();
        return mesh;
    }

    // Before Start
    override async beforeStart() {
        await this.httpServer.startServer();
    }

    // Start
    override async start() {
        await super.start();
    }

    // After Start
    override async afterStop() {
        await this.httpServer.stopServer();
    }
}
```
