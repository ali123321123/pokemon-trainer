import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        component:PokemonContainer
    },
    {
        path:'pokemon/:name',
        component:PokemonDetailContainer
    },
    {
        path:'trainer',
        component:TrainerContainer
    },
    {
        path: '**',
        component: NotFoundContainer
    }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
