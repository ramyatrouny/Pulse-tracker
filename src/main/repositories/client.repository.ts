import { MongoDb } from '@ubio/framework/modules/mongodb';
import { dep } from 'mesh-ioc';

/**
 * Handles the storage and retrieval of client data in MongoDB.
 */
export class ClientRepository {
    @dep() private mongodb!: MongoDb;

    /**
     * Gets the MongoDB collection for clients.
     * @private
     * @returns The MongoDB collection for clients.
     */
    private get collection() {
        return this.mongodb.db.collection('clients');
    }

    /**
     * Inserts a new client or updates an existing one in the database.
     * @param group The group to which the client belongs.
     * @param id The unique identifier for the client.
     * @param meta Arbitrary metadata related to the client.
     * @returns A promise that resolves when the operation is complete.
     */
    async insertOrUpdateClient(group: string, id: string, meta: any): Promise<void> {
        const now = new Date();
        await this.collection.updateOne(
            { id, group },
            { $set: { updatedAt: now, meta }, $setOnInsert: { createdAt: now } },
            { upsert: true }
        );
    }

    /**
     * Retrieves an array of clients belonging to the specified group.
     * Clients are returned in descending order by their last update time.
     * @param group The group whose clients are to be retrieved.
     * @returns A promise that resolves with an array of clients.
     */
    async getClientsByGroup(group: string): Promise<any[]> {
        return this.collection
            .find({ group }, { projection: { _id: 0 } })
            .sort({ updatedAt: -1 })
            .toArray();
    }

    /**
     * Deletes a client record from the database.
     * @param group The group to which the client belongs.
     * @param id The unique identifier for the client.
     * @returns A promise that resolves when the operation is complete.
     */
    async deleteClient(group: string, id: string): Promise<void> {
        await this.collection.deleteOne({ id, group });
    }

    /**
     * Retrieves a summary of clients, grouped by their group identifier.
     * @returns A promise that resolves to an array containing the summary of clients.
     */
    async getClientSummary(): Promise<any[]> {
        return this.collection.aggregate([
            {
                $group: {
                    _id: '$group',
                    instances: { $sum: 1 },
                    createdAt: { $min: '$createdAt' },
                    lastUpdatedAt: { $max: '$updatedAt' }
                }
            },
            {
                $match: {
                    instances: { $gt: 0 }
                }
            }
        ]).toArray();
    }
}
