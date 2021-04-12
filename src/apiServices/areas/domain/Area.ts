import { ModelSchema } from '../../shared/ModelSchemaBase/ModelSchema';

export class Area extends ModelSchema {
    constructor() {
        super({
            "areaName": {
                "alias": "Nombre de area",
                "type": "string",
                "maxLength": 20,
                'required': true,
            }
        });
    }
}