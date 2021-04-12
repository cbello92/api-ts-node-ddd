import { PostgreSQLAreaRepository } from '.././../../infrastructure/persistence/PostgreSQLAreaRepository';

export class GetAreas {
    constructor(private areaRepository: PostgreSQLAreaRepository) { }

    public async run(): Promise<any[]> {
        return await this.areaRepository.getAllAreas();
    }
}