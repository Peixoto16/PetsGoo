import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaPerfilComponent } from './tela-perfil/tela-perfil.component';
import { PetsComponent } from './pets.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { MeupetComponent } from './meupet/meupet.component';
import { CadastropetComponent } from './cadastropet/cadastropet.component';
import { PetUpdateComponent } from './pet-update/pet-update.component';
import { PetDetalhesComponent } from './pet-detalhes/pet-detalhes.component';
const routes:Routes=[
    {
        path:'',
        component:PetsComponent,
        children:[
            
            
    {
        path:'pet-detalhes/:id',
        component:PetDetalhesComponent,
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
        path:'meuperfil',
        component:TelaPerfilComponent,
        canActivate: [AuthGuardService]
      },
     
      {
        path:'tela-perfil',
        component:TelaPerfilComponent,
        canActivate: [AuthGuardService]
      },
      {
        path:'cadastropet',
        component:CadastropetComponent,
        canActivate: [AuthGuardService]
      },
             
        ]
        
        
    }, 
   
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PetsRoutingModule{

}