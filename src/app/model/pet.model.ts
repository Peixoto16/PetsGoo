export class Pet{
    public id: number;
    public name : string;
    public genero : string;
    public status: boolean;
    public peso : number;
    public foto: string;

    constructor()
    constructor(id?: number, name?: string, genero?: string,status?: boolean,
                peso?:number,foto?:string){
        this.id =  (id)? id : 0;
        this.name = (name)?name:'';                
        this.genero = (genero)?genero:'';
        this.status = (status)? status :true;         
        this.peso = (peso)? peso : 0;          
        this.foto = (foto)?foto:'';

    }

}