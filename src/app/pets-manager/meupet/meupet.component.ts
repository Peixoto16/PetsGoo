import { Component, OnInit } from '@angular/core';

import { PetService } from '../../services/pet.service';

import { Pet } from '../../model/pet.model';


@Component({
  selector: 'app-meupet',
  templateUrl: './meupet.component.html',
  styleUrls: ['./meupet.component.css']
})
export class MeupetComponent implements OnInit {

   public petList: Array<Pet>  = [ ];    

  constructor(  private petService: PetService) { }

  ngOnInit(): void {
     this.petService.getAll().subscribe((petList: Pet[])=>{
       this.petList = petList;
     });
  }

}
