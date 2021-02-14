import { Pokemon } from "./pokemon.model";

export interface PokemonResponse {
    next: string;
    count: number;
    results:Pokemon[];
    prev: string;
}
    