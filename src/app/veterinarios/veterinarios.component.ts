import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.component.html',
  styleUrls: ['./veterinarios.component.css']
})
export class VeterinariosComponent implements OnInit {
  public vetList: Array<any>=[
    {
      nome:"Bernardo Figueredo",
      especialidade:"Especialista em castração de cães e gatos.",
      local: "Rua Fernão Dias 777, Jardim Laguana - BH",
      telefone:"(31) 98977-8687",
      imagem:'assets/img/vet0.jpeg'
    },
    {
      nome:"Fernanda Peixoto",
      especialidade:"Especializada em cuidados com caes",
      local: "Rua Machado Sem Cabo, Buritis - BH",
      telefone:"(31) 99977-6578",
      imagem:'assets/img/vet_atuaram_saude_familia.jpg'
    },

    {
      nome:"Ana Vitoria",
      especialidade:"Especializada em cardiologia canina.",
      local: "Rua Parafuso Sem Porca, Ferros - BH",
      telefone:"(31) 99931-8765",
      imagem:'assets/img/vet2.jpeg'
    },

    {
      nome:"Noeli Silva",
      especialidade:"Especializada em cuidados com gatos e caes.",
      local: "Rua Poeira Em Alto Mar, Canoas - BH",
      telefone:"(31) 96969-6699",
      imagem:'assets/img/vet-cao-gato.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {

    
  }

}
