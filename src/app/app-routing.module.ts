import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuardService } from './auth/auth-guard.service';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { VeterinariosComponent } from './veterinarios/veterinarios.component';
import { CuidadosComponent } from './cuidados/cuidados.component';
import { SuporteComponent } from './suporte/suporte.component';
import { LoginComponent } from './login/login.component';

import { MeuperfilComponent } from './pets-manager/meuperfil/meuperfil.component';

import { TelaPerfilComponent } from './pets-manager/tela-perfil/tela-perfil.component';


import { FooterComponent } from './footer/footer.component';
import { CadastroperfilComponent } from './cadastroperfil/cadastroperfil.component';
import { PetsModule } from './pets-manager/pets.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
   path:'map',
   component:MapComponent 
  },
  {
    path:'veterinarios',
    component:VeterinariosComponent 
   },
   {
    path:'cuidados',
    component:CuidadosComponent 
   },
   {  
    path:'suporte',
    component:SuporteComponent

   },
   {  
    path:'login',
    component:LoginComponent

   },
  
  
  {
    path:'pets',
    loadChildren: ()=> import('src/app/pets-manager/pets-routing.module').then(m=> m.PetsRoutingModule),
    canActivate: [AuthGuardService]
  },/*
   {
    path:'meuperfil',
    component:MeuperfilComponent,
    canActivate: [AuthGuardService]
  },
 
  {
    path:'tela-perfil',
    component:TelaPerfilComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'meupet',
    component:MeupetComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'pet-update/:id',
    component:PetUpdateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'pet-detalhes/:id',
    component:PetDetalhesComponent,
   canActivate: [AuthGuardService]
  }, 
  {
    path:'cadastropet',
    component:CadastropetComponent,
    canActivate: [AuthGuardService],
  }, */
  {
    path:'cadastroperfil',
    component:CadastroperfilComponent
  },
    


];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }
