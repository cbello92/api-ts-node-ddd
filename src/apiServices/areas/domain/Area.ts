import { ModelSchemaBase } from '../../shared/ModelSchemaBase/ModelSchemaBase';

export class Area extends ModelSchemaBase {
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