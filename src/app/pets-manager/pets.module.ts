import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PetsComponent } from './pets.component'
import { PetsRoutingModule } from './pets-routing.module';
import { MeuperfilComponent } from './meuperfil/meuperfil.component';
import { MeupetComponent } from './meupet/meupet.component';
import { CadastropetComponent } from './cadastropet/cadastropet.component';
import { PetUpdateComponent } from './pet-update/pet-update.component';
import { PetDetalhesComponent } from './pet-detalhes/pet-detalhes.component';
import { TelaPerfilComponent } from './tela-perfil/tela-perfil.component';
@NgModule({
    declarations:[
    MeupetComponent,
    CadastropetComponent,
    PetDetalhesComponent,
    PetUpdateComponent,
    PetsComponent,
    TelaPerfilComponent,
    MeuperfilComponent,
  ],
    imports:[CommonModule,
        FormsModule,
        PetsRoutingModule],
    providers:[]
})

export class PetsModule{

}