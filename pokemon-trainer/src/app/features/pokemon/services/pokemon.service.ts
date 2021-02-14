import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

const {pokeApi}:any = environment

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    constructor(private readonly http:HttpClient){

    }

  fetchPokemon(): Observable<any> {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon`)
      .pipe(
          map((response:any) => response.results)
        )
  }
}