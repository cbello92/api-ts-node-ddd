import { AreaRepository } from './../../domain/AreaRepository';
import { PostgreSQLRepository } from '../../../../infrastructure/persitence/PostgreSQLRepository';
import fs from 'fs';
import path from 'path'

export class PostgreSQLAreaRepository extends PostgreSQLRepository implements AreaRepository {

    getSQL(action: string, file: string): string {
        return fs.readFileSync(`${path.resolve(__dirname, "../sql")}/${action}/${file}.sql`).toString();
    }

    async getAllAreas(): Promise<any[]> {
        return await this.findAll(this.getSQL('read', 'readAreas'));
    }

    async saveArea(body: Object): Promise<Object | undefined>{
        return await this.saveOne({
            query: this.getSQL('create', 'createArea'),
            values: [...Object.values(body)]
        })
    }
}