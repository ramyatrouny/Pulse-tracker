import { BodyParam, Delete, Get, PathParam, Post, Router } from '@ubio/framework';
import { dep } from 'mesh-ioc';

import { ClientService } from '../services/client.service.js';
import { ErrorHandler } from '../util/error-handler.js';

export class ClientRouter extends Router {
    @dep() private clientService!: ClientService;
    @dep() private errorHandler!: ErrorHandler;

    @Post({
        path: '/{group}/{id}',
        responses: {
            200: { description: 'Client registered or updated successfully' },
            400: { description: 'Bad request' }
        }
    })
    async registerClient(
        @PathParam('group', { schema: { type: 'string' } }) group: string,
        @PathParam('id', { schema: { type: 'string' } }) id: string,
        @BodyParam('meta', { schema: { type: 'object' } }) meta: any
    ) {
        try {
            return await this.clientService.registerClient(group, id, meta);
        } catch (error) {
            return this.errorHandler.handle(error);
        }
    }

    @Delete({
        path: '/{group}/{id}',
        responses: {
            200: { description: 'Client unregistered successfully' },
            404: { description: 'Client not found' }
        }
    })
    async unregisterClient(
        @PathParam('group', { schema: { type: 'string' } }) group: string,
        @PathParam('id', { schema: { type: 'string' } }) id: string
    ) {
        try {
            await this.clientService.unregisterClient(group, id);
            return { message: 'Client unregistered successfully' };
        } catch (error) {
            return this.errorHandler.handle(error);
        }
    }

    @Get({
        path: '/',
        responses: {
            200: { description: 'Summary of all client groups' }
        }
    })
    async getClientsSummary() {
        try {
            return await this.clientService.getClientsSummary();
        } catch (error) {
            return this.errorHandler.handle(error);
        }
    }

    @Get({
        path: '/{group}',
        responses: {
            200: { description: 'Details of clients in the specified group' },
            404: { description: 'Group not found' }
        }
    })
    async getClientDetails(
        @PathParam('group', { schema: { type: 'string' } }) group: string,
    ) {
        try {
            return await this.clientService.getClientDetails(group);
        } catch (error) {
            return this.errorHandler.handle(error);
        }
    }
}
