export interface AreaRepository {
    getSQL(action: string, file: string): string;
    getAllAreas(): Promise<any[]>;
    saveArea(body: Object): Promise<Object | undefined>;
}