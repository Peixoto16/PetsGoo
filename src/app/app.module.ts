import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { PetsModule } from './pets-manager/pets.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { VeterinariosComponent } from './veterinarios/veterinarios.component';
import { CuidadosComponent } from './cuidados/cuidados.component';
import { SuporteComponent } from './suporte/suporte.component';
import { LoginComponent } from './login/login.component';

import { MeupetComponent } from './pets-manager/meupet/meupet.component';

import { MeuperfilComponent } from './pets-manager/meuperfil/meuperfil.component';
import { FooterComponent } from './footer/footer.component';

import { CadastropetComponent } from './pets-manager/cadastropet/cadastropet.component';
import { TelaPerfilComponent } from './pets-manager/tela-perfil/tela-perfil.component';
import { AuthService } from './services/auth.service';
import { PetService } from './services/pet.service';

import { PetUpdateComponent } from './pets-manager/pet-update/pet-update.component';
import { PetDetalhesComponent } from './pets-manager/pet-detalhes/pet-detalhes.component';
import { CadastroperfilComponent } from './cadastroperfil/cadastroperfil.component';
import { UsuariosService } from './services/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MapComponent,
    VeterinariosComponent,
    CuidadosComponent,
    SuporteComponent,
    LoginComponent,
 // MeupetComponent,
  //  MeuperfilComponent,
    FooterComponent,
//  CadastropetComponent,
//    TelaPerfilComponent,
 //   PetUpdateComponent,
 //  PetDetalhesComponent,
    CadastroperfilComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PetsModule
  ],
  exports: [RouterModule],
  providers: [AuthService,PetService,UsuariosService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
