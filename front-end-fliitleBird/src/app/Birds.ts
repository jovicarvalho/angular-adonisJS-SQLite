export interface Birds {
    id?: number,
    speciev:string,
    place:string,
    image:string,
    created_at?:string;
    updated_at?:string;
    comments?:[{text: string; username: string}];

}