import { AreaService } from './../services/AreaService';
import { Request, Response } from 'express';
import { route, GET, POST } from "awilix-express";

@route('/areas') 
export default class AreaController {
    constructor(private areaService: AreaService) { }

    @GET() 
    public async GetAreas(req: Request, res: Response) {
        try {
            const areas = await this.areaService.all();
            return res.send(areas);
        } catch (error) {
            return res.status(500).send(error)
        } 
    }


    @POST()
    public async PostArea(req: Request, res: Response) {
        try {
            
            const { body } = req;

            const area = await this.areaService.save(body);

            return res.status(!area?.hasOwnProperty('ok') ? 201 : 400).send(area);
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    }
}