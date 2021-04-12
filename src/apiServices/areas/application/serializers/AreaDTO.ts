import { AreaInterface } from './AreaInterface';
export const single = (resource?: AreaInterface) => {
    return resource ? {
        areaId: Number(resource?.id_area),
        areaName: resource?.nombre?.trim()
    } : undefined
};

export const multiple = (resources: Array<AreaInterface>) => {
    return resources.map((resource) => single(resource));
};
