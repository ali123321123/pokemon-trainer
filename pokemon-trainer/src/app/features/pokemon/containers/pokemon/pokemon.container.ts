import { Component, OnInit } from "@angular/core"
import { PokemonService } from "../../services/pokemon.service";


@Component(
    {
        selector:'app-pokemon-container',
        templateUrl:'./pokemon.container.html'
    })
    export class PokemonContainer implements OnInit  {
        pokemon: any[] = [];
        error:String = ' '
        
constructor( private readonly pokemonService:PokemonService ){

}
    ngOnInit(): void {
        this.pokemonService.fetchPokemon().subscribe(
            pokemon => {
                this.pokemon = pokemon;
            },
            error => {
                this.error = error.message;
            }
            
            
            );
    }
    }