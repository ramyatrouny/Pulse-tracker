import { Application } from '@ubio/framework';

export class App extends Application {
    override createGlobalScope() {
        const mesh = super.createGlobalScope();
        return mesh;
    }

    override createHttpRequestScope() {
        const mesh = super.createHttpRequestScope();
        return mesh;
    }

    override async beforeStart() {
        await this.httpServer.startServer();
    }

    override async start() {
        await super.start();
    }

    override async afterStop() {
        await this.httpServer.stopServer();
    }

}
