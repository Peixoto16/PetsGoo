import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { Pet } from '../model/pet.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  public listPets: Pet[]=[]
  public pet: Pet = new Pet();
  constructor(private petsServ: PetService, private rota: Router) { }

  ngOnInit(): void {
    this.petsServ.getAll().subscribe((pets:Pet[])=>{
      this.listPets = pets;
    })

  }
public cadastrar(idPet:number){
  this.petsServ.add(this.pet).subscribe((resposta)=>{
    console.log(resposta)
    this.rota.navigate(['/tela-perfil'])

})}

}
