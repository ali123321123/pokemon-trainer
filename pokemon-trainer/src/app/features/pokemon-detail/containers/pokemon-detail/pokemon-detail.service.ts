import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "src/app/models/pokemon.model";
import { environment } from "src/environments/environment";

const {pokeAPI} = environment
@Injectable( {
 providedIn: 'root'   
})

export class PokemonDetailService {
  public pokemon!: Pokemon; 

  constructor(private readonly http: HttpClient){

  }


public fetchPokemonByName(name: string ):void{
 this.http.get<Pokemon>(`${pokeAPI}/pokemon/${name}`)
 .subscribe((pokemon: Pokemon) => {
   this.pokemon =  pokemon; 
 }
 )
}
}