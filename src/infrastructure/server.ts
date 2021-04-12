import express, { Application } from 'express';
import { loadControllers } from 'awilix-express';
import loadContainer from './container'
import "reflect-metadata";

class Server {

    private app: Application;  
    private port: String;

    constructor() {
        this.port = process.env.PORT || '8001';
        this.app = express();
        this.app.use(express.json());

        loadContainer(this.app);

        this.app.use("/api/v1", loadControllers(
            '../routes/index.ts',
            { cwd: __dirname }
        ));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        })
    }
}

export default Server;