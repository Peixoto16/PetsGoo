import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pet } from '../model/pet.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PetService {
  public petList:Array<Pet> =[];

  constructor(private http: HttpClient) { }

  public getAll():Observable<Pet[]> {
   return this.http.get<Pet[]>('http://localhost:3000/pet');
  }

  public get(id:number):Observable<Pet>{
   return this.http.get<Pet>('http://localhost:3000/pet/'+id);
  }

  public add (pet: Pet):Observable<any>{
      pet.foto = './../../assets/img/fotomeupet.jpg';
      const petJSON = JSON.stringify(pet);
      return this.http.post<Pet>('http://localhost:3000/pet', petJSON, httpOptions);

  }

  public update(pet: Pet):Observable<any>{
    const id = pet.id;
    const petJSON = JSON.stringify(pet);

    return this.http.put(`http://localhost:3000/pet/${id}`,petJSON, httpOptions);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete(`http://localhost:3000/pet/${id}`);

  }

}
