import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginContainer } from './features/login/containers/login/login.container';
import { PokemonContainer } from './features/pokemon/containers/pokemon/pokemon.container';
import { PokemonDetailContainer } from './features/pokemon-detail/containers/pokemon-detail/pokemon-detailer'
import { TrainerContainer } from './features/trainer/containers/trainer/trainer';
import { AppContainerComponent } from './shared/container/container.component'
import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent }from './features/login/components/login-form/login-form.component'
import {  HttpClientModule } from  '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
,
    //Containers 
    LoginContainer,
    PokemonContainer,
    PokemonDetailContainer,
    TrainerContainer,

    // Components 
    NavbarComponent,
    AppContainerComponent,
    LoginFormComponent 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
