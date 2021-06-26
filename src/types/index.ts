export type CarEntry = {
    _id: string,
    id?: string,
    imageHref: string,
    name: string,
    shortName?: string,
    brandShortName?: string,
};

export type Brand = {
    imageHref: string;
    models: Model[];
    name: string;
    shortName: string;
};

export type Model = {
    imageHref: string;
    name: string;
}