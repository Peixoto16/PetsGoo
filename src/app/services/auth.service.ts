import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';

import { UsuariosService } from './usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  constructor(private router: Router, 
              private usuariosService:UsuariosService) { }
 
  public fazerLogin(usuario: Usuario){
    console.log('logar')
    this.usuariosService.getAuthUsuario(usuario).subscribe(
      (usuarioAuth: Usuario[])=>{
        const [user] = usuarioAuth;
        if(user.email){
          this.usuarioAutenticado = true; 
          console.log('Aqui Teste!');
          this.router.navigate(['/tela-perfil']);
        }else{
          this.usuarioAutenticado = false; 
          this.router.navigate(['/cadastroperfil']);
        }
      });
    }

    public isAutenticado(): boolean {
      return this.usuarioAutenticado;
    }

}




