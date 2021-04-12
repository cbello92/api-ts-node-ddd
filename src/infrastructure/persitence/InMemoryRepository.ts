export class InMemoryRepository {
    private areas: [] = [];

    public async findAll(): Promise<any[]> {
        try {
            return this.areas;
        } catch (error) {
            throw error;
        }
    }
}