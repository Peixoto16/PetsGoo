import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../model/usuario';
import {NgForm} from '@angular/forms';
import { MeuperfilComponent } from '../pets-manager/meuperfil/meuperfil.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  public usuario: Usuario =  new Usuario();
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }
  public realizarLogin(form: any) {

    console.log(form);

    if (form.valid) {
      this.authService.fazerLogin(this.usuario);
    } else {
      console.log('O formulário não está pronto!');
    } 
  }

}
export class SimpleFormComp {
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}


