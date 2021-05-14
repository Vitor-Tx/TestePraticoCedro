export interface Form{
    radios : {
        id:string;
            title:string;
            answers:string[];}[];
    selects : {
        id:string;
        title:string;
    }[];
}