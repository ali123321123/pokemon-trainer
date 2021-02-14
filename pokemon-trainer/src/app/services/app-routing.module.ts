import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer } from '../features/login/containers/login/login.container';
import { PokemonDetailContainer } from '../features/pokemon-detail/containers/pokemon-detail/pokemon-detailer';
import { PokemonContainer } from '../features/pokemon/containers/pokemon/pokemon.container';
import { TrainerContainer } from '../features/trainer/containers/trainer/trainer';
import { SessionGuard } from '../guards/session.guard';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path:'login',
        component:LoginContainer
    },
    {
        path:'pokemon',
        component:PokemonContainer,
        canActivate: [SessionGuard]
    },
    {
        path:'pokemon/:name',
        component:PokemonDetailContainer,
        canActivate: [SessionGuard]
    },
    {
        path:'trainer',
        component:TrainerContainer,
        canActivate: [SessionGuard]
    }
   
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
