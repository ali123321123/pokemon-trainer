import { Component } from "@angular/core"
import { Router } from "@angular/router";
import { AppRoutes } from "src/app/enums/app-routes.enum";

@Component(
    {
        selector:'app-login-container',
        templateUrl:'./login.container.html',
       
    })
    export class LoginContainer {
constructor(private readonly router:Router ){

}


        public handleSuccessfullLogin() : void {
            console.log("Navigate")
this.router.navigateByUrl(AppRoutes.POKEMON);
        }

    }