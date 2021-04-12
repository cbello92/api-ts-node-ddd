import { PostgreSQLAreaRepository } from '.././../../infrastructure/persistence/PostgreSQLAreaRepository';
import * as AreaDTO from '../../serializers/AreaDTO';

export class GetAreas {
    constructor(private areaRepository: PostgreSQLAreaRepository) { }

    public async run(): Promise<any[]> {
        return AreaDTO.multiple(await this.areaRepository.getAllAreas());
    }
}