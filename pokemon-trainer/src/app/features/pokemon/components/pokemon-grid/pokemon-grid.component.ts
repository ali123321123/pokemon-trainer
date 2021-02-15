import { Component, Input } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";

@Component({
    selector:'app-pokemon-grid',
    templateUrl:'./pokemon-grid.component.html',
    styles: [
        `
          .pokemon-grid{
            list-style-type:none;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            grid-column-gap: 1em;
            grid-row-gap: 1em;
          }
        `,
      ],
})


export class PokemonGridComponent{
    @Input()pokemon:Pokemon[] = [];
}