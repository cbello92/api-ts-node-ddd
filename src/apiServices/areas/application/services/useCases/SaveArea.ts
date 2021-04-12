import { EventDomainArea } from './../../../domain/events/EventDomainArea';
import { Area } from '../../../domain/Area';
import { PostgreSQLAreaRepository } from './../../../infrastructure/persistence/PostgreSQLAreaRepository';

export class SaveArea {
    constructor(private areaRepository: PostgreSQLAreaRepository) { }

    async run(body: Object): Promise<Object | undefined> {
        const areaDomain = new Area();
        
        const validations = await areaDomain.isValidSchema(body);
        if(validations.hasOwnProperty('ok') && validations.ok === false) {
            return new EventDomainArea().schemaInvalid(validations.messages || []);
        }

        return await this.areaRepository.saveArea(body);
    }
}