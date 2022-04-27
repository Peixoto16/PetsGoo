import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';;

import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../model/usuario';


@Component({
  selector: 'app-cadastroperfil',
  templateUrl: './cadastroperfil.component.html',
  styleUrls: ['./cadastroperfil.component.css']
})
export class CadastroperfilComponent implements OnInit {

  public usuarioForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      name:['', Validators.compose ([Validators.required,Validators.minLength(4), Validators.maxLength(150)])
           ],
      login:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.compose ([Validators.required, Validators.email])
            ],
    })
  }
 public submit() {
  let usuario =  null;
   console.log(this.usuarioForm)
   console.log(this.usuarioForm.value)
   if (this.usuarioForm.valid){
      usuario = {
        id:0,
        name: this.usuarioForm.value.name,
        login: this.usuarioForm.value.login,
        status:true,
        password: this.usuarioForm.value.password,
        foto: 'assets/img/foto-perfil-meupet.png',
        email: this.usuarioForm.value.email
      };
    

      this.usuarioService.add( usuario ).subscribe((resposta)=>{
      
      console.log(resposta);

      this.router.navigate(['/login']);
    });


  }else{
    console.log('O formulario n esta pronto')
    }
  
  }
  
 }
/*
  this.usuarioService.add( this.usuario ).subscribe((resposta)=>{
    console.log(resposta);

    this.router.navigate(['/login']);
    
  });
 /*    let usuario = null;
    
     if (this.usuarioForm.valid) {
      usuario = {
        id: 0,
        name: this.usuarioForm.value.name,
        login: this.usuarioForm.value.login,
        password: this.usuarioForm.value.password,
        email: this.usuarioForm.value.email,
      };


        this.usuarioService.add( this.usuario ).subscribe((resposta)=>{
        console.log(resposta);

        this.router.navigate(['/login']);
      });

  
    }else{
      console.log('O formulario n esta pronto')
    }*/
