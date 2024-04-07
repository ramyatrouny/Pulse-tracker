# Database Integration

## MongoDB and Dependency Injection

The Pulse Tracker project leverages MongoDB, integrated through the framework's dependency injection system. This approach eliminates the need for manual database client initialization, streamlining the data management process within the application.

You just need to add mongodb in the `App.ts`

```typescript
export class App extends Application {
    @dep() private mongodb!: MongoDb;

    override createGlobalScope() {
        const mesh = super.createGlobalScope();
        mesh.service(MongoDb);

        return mesh;
    }
```

Do not forget to add the correct `MONGO_URL` in the `.env` file

## Schema and Domain Model

The application's domain model includes entities such as `ClientService`, which are defined using interfaces and JSON Schema within the framework. Here’s an example of how a `ClientService` entity is structured:

```typescript
// schema/client-service.ts
import { Schema } from '@ubio/framework';
import { UUID } from 'mongodb';

export interface ClientService {
	id: string;
	group: string;
	createdAt: number;
	updatedAt: number;
	meta: Record<string, any>;
}

export const ClientSchema = new Schema<ClientService>({
	schema: {
		type: 'object',
		properties: {
			id: { type: 'string', format: UUID.generate().toString() },
			group: { type: 'string' },
			createdAt: { type: 'number' },
			updatedAt: { type: 'number' },
			meta: { type: 'object', additionalProperties: true },
		},
		required: ['id', 'group', 'createdAt', 'updatedAt'],
		additionalProperties: false,
	},
	defaults: () => ({
		id: UUID.generate().toString(),
		createdAt: Date.now(),
		updatedAt: Date.now(),
		meta: {},
	}),
});
```

In this schema:

- `ClientService` defines the structure for client service instances in the system.

- `ClientSchema` provides a JSON Schema definition, which includes type validation and default values, ensuring data integrity and consistency.

- Default values and UUID generation are handled automatically, simplifying instance creation and maintenance.

## Schema Features and Validation

- Type Safety: Ensures that each property in the schema matches the expected type, reducing common data validation errors.

- Automatic Defaults: Sets default values for id, createdAt, and updatedAt to ensure that new instances are correctly initialized.

- Metadata Flexibility: The meta field can store arbitrary data, offering flexibility to accommodate various client service requirements.
