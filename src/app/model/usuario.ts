    export class  Usuario  {
      public id: number;
      public name: string;
      public login: string;
      public status: boolean;
      public password: string;
      public foto: string;  
      public email: string;
        

        constructor()
        constructor(id?:number,
                    name?:string, 
                    login?:string,
                    status?: boolean,
                    password?: string,
                    foto?:string,
                    email?: string,
                    ){
            this.id = (id)? id : 0;
            this.name = (name)? name : '';
            this.login = (login)? login : '';
            this.status = (status)? status :true;
            this.password = (password)? password : '';
            this.foto = (foto)? foto : '';
            this.email = (email)? email : '';
        }

    }