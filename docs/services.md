# Service Creation Guide

This guide provides an overview of creating services within an Inversion of Control (IoC) based Node.js framework, focusing on principles and practices without targeting a specific service. The goal is to understand the modular and decoupled architecture facilitated by IoC.

## Understanding IoC

Inversion of Control (IoC) is a design principle that inverts the control flow in a program, enabling more flexible and decoupled code management. It allows for the dynamic resolution of dependencies, promoting loose coupling and making components more manageable and testable.

## Implementing IoC

### Dependency Injection

1. **Define Service Interfaces**: Use abstract classes to define the contract for services. These abstract classes act as service identifiers for dependency injection.

   Example:

   ```typescript
   abstract class MyServiceInterface {
   	abstract myMethod(): void;
   }
   ```

2. **Use Decorators for Dependencies**: Apply decorators like `@dep()` to declare dependencies in your service classes, allowing the IoC container to inject these at runtime.

   Example:

   ```typescript
   import { dep } from 'mesh-ioc';

   class MyService extends MyServiceInterface {
   	@dep() logger!: Logger;

   	myMethod() {
   		this.logger.info('Executing myMethod');
   	}
   }
   ```

### Service Registration

1. **Composition Root**: Define a single location in your application, known as the composition root, where all services and their dependencies are registered.

   Example

   ```typescript
   import { Application } from 'your-framework';
   import { MyService } from './MyService';

   export class App extends Application {
   	createGlobalScope() {
   		const mesh = super.createGlobalScope();
   		mesh.service(MyServiceInterface, MyService);
   		return mesh;
   	}
   }
   ```

2. **Register Services**: In the composition root, use the IoC container to bind service identifiers to their concrete implementations.

### Service Lifecycle

Singleton Scope: Services defined in the global scope are instantiated once per application lifecycle.
Transient Scope: Services defined in a request scope are instantiated per request, living only for the duration of that request-response cycle.

### Best Practices

1. **Separation of Concerns**: Design services to be focused on a single responsibility to enhance modularity.
2. **Loose Coupling**: Use IoC to decouple service implementations from their consumption, facilitating easier testing and maintenance.
3. **Scalable Architecture**: Organize services in a way that supports scalability, allowing for the easy addition, removal, or modification of service components.
