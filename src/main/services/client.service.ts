import { Logger } from '@ubio/framework';
import { dep } from 'mesh-ioc';

import { ClientRepository } from '../repositories/client.repository.js';

/**
 * Service for managing client instances in the discovery service framework.
 * This service is responsible for handling the registration, updating, and removal of client instances.
 * It also provides functionalities to retrieve summaries and detailed information of the registered clients.
 * The service ensures that client instances that have not sent heartbeats within a configurable time frame
 * are periodically removed to maintain the accuracy of the registered instances.
 */
export class ClientService {
    @dep() private logger!: Logger;
    @dep() private clientRepository!: ClientRepository;

    /**
     * Registers or updates a client instance within a specified group. If the client instance
     * already exists, its 'updatedAt' timestamp and metadata will be updated; otherwise, a new
     * instance will be created with the provided information.
     *
     * @param {string} group - The group to which the client belongs.
     * @param {string} id - The unique identifier of the client.
     * @param {any} meta - The metadata associated with the client.
     * @returns {Promise<any>} A promise that resolves with the details of the registered or updated client instance.
     */
    async registerClient(group: string, id: string, meta: any): Promise<any> {
        await this.clientRepository.insertOrUpdateClient(group, id, meta);
        this.logger.info(`Client ${id} in group ${group} has been registered or updated.`);
        return this.clientRepository.getClientsByGroup(group);
    }
}
