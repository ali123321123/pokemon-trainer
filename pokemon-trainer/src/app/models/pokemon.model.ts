export interface Pokemon {
    id?: string;
    name: string;
    url: string;
    image?:string;
    weight?: number;
types?:PokemonType[];
stats?: PokemonStat[];
sprites?: any [];

}

export interface PokemonSprite {

   back_shiny:string;
   front_shiny: string;
   other: any 
}

export interface PokemonSpriteOther {
    dream_world:any;
    'official-artwork':PokemonSpriteOfficial;
}


export interface PokemonSpriteOfficial {
    front_default: string;
}




export interface PokemonType{
    slot:number;
    type:PokemonTypeType ;

}



export interface PokemonTypeType {
    name:string;
    url:string;

}

export interface PokemonStat{
    base_stat: number;
    effort:number;
    stat: PokemonStatStat;
}

export interface PokemonStatStat {
    name:string;
    url:string;
}