
 export class ModelSchemaBase {

    private schemaModel: any;

    constructor(schema: any) {
        this.schemaModel = schema;
    }

    async isValidSchema(body: any) {
        let keysBodyEntry: Array<string> = Object.keys(body);
        let keysSchema: Array<string> = Object.keys(this.schemaModel);
        let errors: Array<string> = [];

        let orderBody = {};

        for (let index = 0; index < keysSchema.length; index++) {
            const element: string = keysSchema[index];
            
            let findKey = keysBodyEntry.find(x => x === element);

            if (findKey && typeof body[element] === 'string') {
                body[element] = body[element].trim();
            }

            if ((!findKey && this.schemaModel[element].required) 
                || (findKey && typeof body[element] === 'string' && body[element].length === 0)
                || (findKey && this.schemaModel[element].required && body[element] === null)
            ) {
                errors = [...errors, `${this.schemaModel[element].alias} es requerido`];
            } else {
                if (body[element] && typeof body[element] !== this.schemaModel[element].type) {
                    errors = [...errors, `${this.schemaModel[element].alias} debe ser de tipo ${this.schemaModel[element].type}`];
                }
            }

            if(findKey && typeof body[element] === 'string' && this.schemaModel[element].hasOwnProperty('maxLength') && body[element].length > this.schemaModel[element].maxLength) {
                errors = [...errors, `${this.schemaModel[element].alias} puede contener hasta ${this.schemaModel[element].maxLength} caracteres`];
            }

            if(this.schemaModel[element].hasOwnProperty('validate') && body[element]) {
                let validate = this.schemaModel[element].validate(body[element]);
                if(validate.hasOwnProperty('ok') && validate.ok === false) {
                    errors = [...errors, `${this.schemaModel[element].alias}: ${validate?.message}`];
                } else {
                    if(validate[element]) {
                        body[element] = validate[element];
                    }
                }
            }

            orderBody = { ...orderBody, [element]: body[element] };
        }
        
        if (errors.length > 0) {
            return {
                ok: false,
                messages: errors
            };
        }

        return {
            ok: true,
            body: orderBody
        }
    }
}
