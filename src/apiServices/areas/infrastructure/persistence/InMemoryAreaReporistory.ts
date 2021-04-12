import { Area } from '../../domain/Area';
import { InMemoryRepository } from './../../../../infrastructure/persitence/InMemoryRepository';
import { AreaRepository } from './../../domain/AreaRepository';

export class InMemoryAreaRepository extends InMemoryRepository implements AreaRepository {
    getSQL(action: string, file: string): string {
        throw new Error('Method not implemented.');
    }
    
    async getAllAreas(): Promise<any[]> {
        return await this.findAll();
    }

    saveArea(area: Area): Promise<Object | undefined> {
        throw new Error('Method not implemented.');
    }
}