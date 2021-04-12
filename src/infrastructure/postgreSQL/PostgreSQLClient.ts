import { Pool } from 'pg';
import config from '../../config/config';


export const configurationDatabase: Object = {
    "user": config.DB_PG_USER,
    "host": config.DB_PG_HOST,
    "database": config.DB_PG_DATABASE,
    "password": config.DB_PG_PASSWORD,
    "port": config.DB_PG_PORT,
    "connectionTimeoutMillis": 15000,
    "requestTimeout": 120000,
    "idleTimeoutMillis": 30000,
    "max": 50
};

export class PostgreSQLClient {
    private pool: Pool;

    constructor() {
        this.pool = new Pool(configurationDatabase);
    }

    public async open() {
        try {
            await this.pool.connect();
            await this.pool.query(`SET search_path TO seguridad, public`);
            return this.pool;
        } catch (error) {
            throw error;
        }
    }

    public close () {
        if(this.pool) {
            // this.pool.end();
        }
    }
}