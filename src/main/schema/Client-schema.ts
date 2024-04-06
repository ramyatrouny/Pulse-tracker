import { Schema } from '@ubio/framework';
import { UUID } from 'mongodb';

export interface ClientService {
    id: string;
    group: string;
    createdAt: number;
    updatedAt: number;
    meta: Record<string, any>;
}

/**
 * Represents a client service within the discovery service framework.
 * This model tracks the registration and activity status of client service instances.
 * @typedef {Object} ClientService
 * @property {string} id - The unique identifier for the client service, in UUID format.
 * @property {string} group - The group or category to which the client service belongs.
 * @property {number} createdAt - The timestamp when the client service was first registered.
 * @property {number} updatedAt - The timestamp when the client service was last updated.
 * @property {Record<string, any>} meta - An object containing arbitrary metadata related to the client service.
 */
export const ClientSchema = new Schema<ClientService>({
    schema: {
        type: 'object',
        properties: {
            id: { type: 'string', format: UUID.generate().toString() },
            group: { type: 'string' },
            createdAt: { type: 'number' },
            updatedAt: { type: 'number' },
            meta: {
                type: 'object',
                properties: {},
                additionalProperties: true
            }
        },
        required: ['id', 'group', 'createdAt', 'updatedAt'],
        additionalProperties: false
    },
    defaults: () => ({
        id: UUID.generate().toString(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        meta: {}
    })
});
