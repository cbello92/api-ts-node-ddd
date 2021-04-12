import { EventDomain } from '../../../shared/EventDomainBase/EventDomain';

export class EventDomainArea implements EventDomain {
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