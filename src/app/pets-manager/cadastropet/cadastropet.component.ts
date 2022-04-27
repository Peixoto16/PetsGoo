import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PetService } from '../../services/pet.service';

import { Pet } from '../../model/pet.model';

@Component({
  selector: 'app-cadastropet',
  templateUrl: './cadastropet.component.html',
  styleUrls: ['./cadastropet.component.css']
})
export class CadastropetComponent implements OnInit {
  public pet: Pet = new Pet();

  constructor(private petService: PetService,
              private rota: Router,) { }

  ngOnInit(): void {
  }

  public cadastrar(){
    if(this.pet.name){
        this.petService.add(this.pet).subscribe((resposta)=>{
        console.log(resposta)
        this.rota.navigate(['/tela-perfil'])
        location.reload();
      })
      
    }else{
      alert('CAMPO VAZIO');
    }
  }


}
