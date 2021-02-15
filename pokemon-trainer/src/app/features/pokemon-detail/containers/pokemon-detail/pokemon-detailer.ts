import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "src/app/models/pokemon.model";
import { PokemonDetailService } from "./pokemon-detail.service";


@Component(
    {
        selector:'',
        templateUrl:'./pokemon-detailer.html'
    })
    export class PokemonDetailContainer implements OnInit{
        private pokemonName: any = '';

        constructor(private readonly route:ActivatedRoute, private readonly pokemonDetailService: PokemonDetailService ){
this.pokemonName = this.route.snapshot.paramMap.get('name')
        }
    ngOnInit(): void {
       this.pokemonDetailService.fetchPokemonByName(this.pokemonName)
    }

    get pokemon(): Pokemon {
        return this.pokemonDetailService.pokemon;
    }
    }