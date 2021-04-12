export interface AreaRepository {
    getAllAreas(): Promise<any[]>;
    saveArea(body: Object): Promise<Object | undefined>;
}