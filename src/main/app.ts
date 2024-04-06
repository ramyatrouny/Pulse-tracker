import { Application } from '@ubio/framework';
import { MongoDb } from '@ubio/framework/modules/mongodb';
import { dep } from 'mesh-ioc';

export class App extends Application {
    @dep() private mongodb!: MongoDb;

    override createGlobalScope() {
        const mesh = super.createGlobalScope();
        mesh.service(MongoDb);
        return mesh;
    }

    override createHttpRequestScope() {
        const mesh = super.createHttpRequestScope();
        return mesh;
    }

    override async beforeStart() {
        await this.mongodb.start();
        await this.httpServer.startServer();
    }

    override async start() {
        await super.start();
    }

    override async afterStop() {
        await this.httpServer.stopServer();
        await this.mongodb.stop();
    }

}
