import { BodyParam, Delete, PathParam, Post, Router } from '@ubio/framework';
import { dep } from 'mesh-ioc';

import { ClientService } from '../services/client.service.js';

export class ClientRouter extends Router {
    @dep() private clientService!: ClientService;

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
        const result = await this.clientService.registerClient(group, id, meta);
        return result;
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
        await this.clientService.unregisterClient(group, id);
        return { message: 'Client unregistered successfully' };
    }

}
