export type EnumDataResult = {
    id: string,
    values: {
        name: string,
        shortName?: string,
        imageHref?: string,
        models?: {
            name: string,
            imageHref: string
        }[]
    }
};

export type EnumsState = {
    loading: boolean,
    error: string,
    fetched: boolean,
    enums: {
        brands: any[],
        coupeTypes: any[]
    },
    mappers: {
        brandsMapper: {[brandShortName: string]: string}
    }
};