import { PostgreSQLClient } from './../postgreSQL/PostgreSQLClient';

export class PostgreSQLRepository {
    constructor(private instanceConnection: PostgreSQLClient) { }

    public async findAll(query: string): Promise<any[]> {
        try {
            const connection = await this.instanceConnection.open();
            const { rows } = await connection.query(query);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    public async findOne(queeryAndParams: { query: string; params: [] }): Promise<any[]> {
        try {
            const { query, params } = queeryAndParams;
            const connection = await this.instanceConnection.open();
            const { rows } = await connection.query(query, params);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    public async saveOne(queryAndValues: { query: string; values: any[] }) : Promise<Object | undefined> {
        try {
            const { query, values } = queryAndValues;
            const connection = await this.instanceConnection.open();
            const { rows } = await connection.query(query, values);
            return rows.length > 0 ? rows[0] : undefined;
        } catch (error) {
            throw error;
        }
    }


    public async updateOne(queryAndValues: { query: string; values: any[] }) : Promise<Object | undefined> {
        try {
            const { query, values } = queryAndValues;
            const connection = await this.instanceConnection.open();
            const { rows } = await connection.query(query, values);
            return rows.length > 0 ? rows[0] : undefined;
        } catch (error) {
            throw error;
        }
    }
}