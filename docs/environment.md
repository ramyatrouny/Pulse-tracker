# Environment Variable

Configuring applications through environment variables is a standard practice, as advocated by [12factor](https://12factor.net/config). In this framework, environment variables are seamlessly integrated using the `@config` decorator.

## Setting up Environment Variables

To integrate environment variables into your application, follow these steps:

1. **Import the Config Module:**

   Start by importing the `config` function from `@ubio/framework`. This function allows you to specify which environment variables your application will use.

   ```ts
   import { config } from '@ubio/framework';
   ```

2. **Define Configuration Properties::**

   ```ts
   export class MyStorageService {
   	// This one does not have a default, app will fail to start if not provided
   	@config() SECRET_KEY!: string;
   	// The default is used
   	@config({ default: 'some-bucket-name' }) BUCKET_NAME!: string;
   	// You can use string, number and boolean types. Types are automatically coerced.
   	@config({ default: 8080 }) PORT!: number;
   }
   ```

## Creating a .env File

For local development and testing, you should create a .env file in the root of your project directory. This file should contain all the necessary environment variables for your application to run.

### Generate .env.example:

To facilitate the setup of environment variables, you can generate a .env.example file which acts as a template.

```bash
npx generate-env
```

### Create Your .env File:

Copy .env.example to .env and fill in the necessary values for your environment variables.

```bash
cp .env.example .env
```

Open the .env file in your text editor and specify the values for each environment variable.

## Conclusion

Using environment variables with the @config decorator in the framework provides a robust and flexible way to manage your application's configuration. Remember to create a .env file for your local development environment, and never commit sensitive keys and secrets to your version control system.
