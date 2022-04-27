import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Pet } from '../../model/pet.model';

import { PetService } from '../../services/pet.service';



@Component({
  selector: 'app-pet-detalhes',
  templateUrl: './pet-detalhes.component.html',
  styleUrls: ['./pet-detalhes.component.css']
})
export class PetDetalhesComponent implements OnInit {


  public pet: Pet = new Pet();

  constructor(private rotaAtiva: ActivatedRoute,
              private petService: PetService  ) { }

  ngOnInit(): void {
    const codigo = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    console.log(codigo);

       this.petService.get(codigo).subscribe((pet:Pet)=>{
       this.pet = pet;
     });
  }

}
