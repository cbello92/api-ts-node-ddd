import { AreaRepository } from './../../domain/AreaRepository';
import { PostgreSQLRepository } from '../../../../infrastructure/persitence/PostgreSQLRepository';

export class PostgreSQLAreaRepository extends PostgreSQLRepository implements AreaRepository {
    async getAllAreas(): Promise<any[]> {
        return await this.findAll(`SELECT * FROM area`);
    }

    async saveArea(body: Object): Promise<Object | undefined>{
        return await this.saveOne({
            query: `INSERT INTO area (nombre) VALUES($1) RETURNING *`,
            values: [...Object.values(body)]
        })
    }
}