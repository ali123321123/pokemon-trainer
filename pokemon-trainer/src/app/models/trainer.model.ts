import { Pokemon } from "./pokemon.model";

export interface Trainer {
    id:number;
    name:string;
    pokemon:Pokemon[];
}