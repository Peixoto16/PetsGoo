import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-meuperfil',
  templateUrl: './meuperfil.component.html',
  styleUrls: ['./meuperfil.component.css']
})
export class MeuperfilComponent implements OnInit {
 
  constructor(private authService: AuthService) { }
  
  
  public perfilList: Array<any>  = [
    {
      name:"Raphael",
      login:"raphael",
      email:"raphael@gmail.com",
      foto:'assets/img/foto-perfil-meupet.png',
      password:'123456'
    },
  ];
  

  ngOnInit(): void {
  }

}
