import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { PokemonResponse } from "src/app/models/pokemon-response.model";
import { Pokemon } from "src/app/models/pokemon.model";



@Injectable({
    providedIn: 'root'
})
export class PokemonService {


 public pokemon: Pokemon[] = [];
 public error: string = ' ';



    constructor(private readonly http:HttpClient){

    }

  fetchPokemon(): void{
      this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon`)
      .pipe(
        map((response: PokemonResponse) => {
          return response.results.map((pokemon: Pokemon) => ({
            ...pokemon,
            ...this.getIdAndImage(pokemon.url),
          }));
        })
      )
        .subscribe(
          (pokemon: Pokemon[]) => {
              this.pokemon = pokemon;
          },
          error => {
             this.error = error.message;
              
          }

        );
  }


  private getIdAndImage(url: string): any {
    const id = url.split('/').filter(Boolean).pop();
    return {
      id: Number(id),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  }



}