export interface Birds {
    id?: number,
    spiciev:string,
    place:string,
    image:string,
    created_at?:string;
    updated_at?:string;
    comments?:[{text: string; username: string}];

}