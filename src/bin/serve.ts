import { App } from '../main/app.js';

const app = new App();

try {
    await app.start();
} catch (error: any) {
    app.logger.error('Failed to start', { error });
    process.exit(1);
}
