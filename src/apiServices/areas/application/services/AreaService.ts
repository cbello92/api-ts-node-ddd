import { Area } from '../../domain/Area';
import { SaveArea } from './useCases/SaveArea';
import { GetAreas } from './useCases/GetAreas';
import { PostgreSQLAreaRepository } from './../../infrastructure/persistence/PostgreSQLAreaRepository';

export class AreaService {
    constructor(private areaRepository: PostgreSQLAreaRepository) { }

    public async all(): Promise<any[]> {
        return await new GetAreas(this.areaRepository).run();
    }

    public async save(body: Object): Promise<Object | undefined> {
        return await new SaveArea(this.areaRepository).run(body);
    }
}