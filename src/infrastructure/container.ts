import { AreaService } from './../apiServices/areas/application/services/AreaService';
import { PostgreSQLAreaRepository } from './../apiServices/areas/infrastructure/persistence/PostgreSQLAreaRepository';
import { PostgreSQLClient } from './postgreSQL/PostgreSQLClient';
import express from 'express';
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";
import "reflect-metadata";
import { InMemoryAreaRepository } from '../apiServices/areas/infrastructure/persistence/InMemoryAreaReporistory';
// import * as AreaService from '../apiServices/areas/application/services/index'

export default (app: express.Application): void => {
    const container = createContainer({
        injectionMode: 'CLASSIC'
    });

    container.register({
        instanceConnection: asClass(PostgreSQLClient).scoped(),
        areaRepository: asClass(PostgreSQLAreaRepository).scoped(),
        areaRepositoryInMemory: asClass(InMemoryAreaRepository).scoped(),
        // services
        areaService: asClass(AreaService).scoped()
    });

    app.use(scopePerRequest(container));
};