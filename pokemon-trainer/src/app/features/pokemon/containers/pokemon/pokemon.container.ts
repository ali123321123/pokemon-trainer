import { Component, OnInit } from "@angular/core"
import { Pokemon } from "src/app/models/pokemon.model";
import { PokemonService } from "../../services/pokemon.service";


@Component(
    {
        selector:'app-pokemon-container',
        templateUrl:'./pokemon.container.html'
    })
    export class PokemonContainer implements OnInit  {
        
        
constructor( private readonly pokemonService:PokemonService ){

}

get pokemon() : Pokemon[] {
    return this.pokemonService.pokemon;
}

    ngOnInit(): void {
        this.pokemonService.fetchPokemon();
    }
    }