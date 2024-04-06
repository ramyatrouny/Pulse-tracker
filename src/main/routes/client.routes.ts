import { BodyParam, PathParam, Post, Router } from '@ubio/framework';
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

}