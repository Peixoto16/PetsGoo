import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PetService } from '../../services/pet.service';

import { Pet } from '../../model/pet.model';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {
  public pet!: Pet;

  constructor(private petService: PetService,
              private rotaAtiva: ActivatedRoute,
              private rota: Router,
             ){}

  ngOnInit(): void {
    const codigo: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    this.petService.get(codigo).subscribe((pet)=>{
      this.pet = pet;
    });
  }

  public atualizar (){
    if(this.pet.id){
      this.petService.update(this.pet).subscribe((resposta)=>{
        console.log(resposta);
        this.rota.navigate(['/tela-perfil']);  
      });
      
    }else{
      alert('Verifique se os campos estão preechidos');
    }
  }
  public deletar (){
    if (this.pet?.id || this.pet?.id ===0){
      this.petService.delete(this.pet.id).subscribe((resposta)=>{
        this.rota.navigate(['/tela-perfil']);
      })
      
    }
  }

}
