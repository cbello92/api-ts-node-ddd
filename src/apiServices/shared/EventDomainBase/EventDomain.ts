export interface EventDomain {
    notFound(messages: Array<string>): Object;
    schemaInvalid(messages: Array<string>): Object;
    successfullySaved (messages: Object): Object;
}