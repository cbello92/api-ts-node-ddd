import { EventDomainBase } from '../../../shared/EventDomainBase/EventDomainBase';

export class EventDomainArea implements EventDomainBase {
    notFound(messages: string[]): Object {
        return {
            type: 'NOT_FOUND',
            ok: false,
            statusCode: 404,
            messages
        }    
    }

    schemaInvalid(messages: string[]): Object {
        return {
            type: 'SCHEMA_INVALID',
            ok: false,
            statusCode: 400,
            messages
        }    
    }
    
    successfullySaved(data: Object): Object {
        return {
            type: 'SAVED_RESOURCE',
            ok: true,
            statusCode: 201,
            data
        }    
    }    
}