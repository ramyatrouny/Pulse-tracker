# Routing Guide

This guide explains how to define and manage HTTP routes in a Node.js application using the UBIO framework, which utilizes routers and decorators for routing requests.

## Understanding Routing in UBIO Framework

In the UBIO framework, routing is the process of directing incoming HTTP requests to the correct handlers. Routers are classes where methods are annotated with routing decorators, handling the matching of request methods and paths, and organizing the request processing logic.

## Defining Routes

1. **Create a Router Class**: Define a class that extends `Router` from the UBIO framework. This class will contain methods representing different endpoints.

   Example:

   ```typescript
   import { Router, Get } from '@ubio/framework';

   export class MyRouter extends Router {
   	@Get({
   		path: '/my-endpoint',
   		responses: { 200: { description: 'Successful response' } },
   	})
   	async myEndpoint() {
   		return { message: 'This is my endpoint' };
   	}
   }
   ```

2. **Use Routing Decorators**: Decorate methods with `@Get`, `@Post`, `@Put`, `@Delete`, etc., to define the HTTP method and path for each route. Decorators also allow defining the response format and request parameter specifications.

   Example:

   ```typescript
   @Post({
   path: '/submit',
   responses: { 200: { description: 'Submit successful' } }
   })
   async submitData(@BodyParam('data', { schema: { type: 'object' } }) data: any) {
       // Process submission
       return { status: 'Submitted', data };
   }
   ```

## Routing Mechanism

- **Endpoint Matching**: The framework matches incoming requests to the first endpoint with a corresponding method and path.
- **Middleware Execution**: Middleware methods, defined in the same router, execute in order before the endpoint method. Middleware can alter the request or response, or terminate the request cycle.
- **Request Handling**: Endpoint methods process the request, with parameters automatically extracted and validated based on the provided schemas.

## Registering Routers

Include the router in the application's request scope to activate its routes.

Example:

```typescript
import { Application } from '@ubio/framework';
import { MyRouter } from './routes/MyRouter';

export class App extends Application {
	createHttpRequestScope() {
		const mesh = super.createHttpRequestScope();
		mesh.service(MyRouter);
		return mesh;
	}
}
```

## Request Parameters

Request parameters are defined and validated using decorators like `@PathParam`, `@QueryParam`, and `@BodyParam`. These decorators specify the parameter's source and validation rules.

Example:

```typescript
@Get({
    path: '/details/{userId}',
    responses: { 200: { description: 'User details' } }
})
async getUserDetails(@PathParam('userId', { schema: { type: 'string' } }) userId: string) {
    // Fetch and return user details
}
```
