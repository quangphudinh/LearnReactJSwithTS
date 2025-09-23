export type pizza = {
    id? : number;
    title? : string;
    description? : string;
    price?: string;
    thumbnail? : string;
}

export enum FieldPizza {
    Title = 'title',
    Description = 'description',
    Price = 'price'
}