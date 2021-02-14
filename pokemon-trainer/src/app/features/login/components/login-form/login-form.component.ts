import { Component, Output } from "@angular/core";
import { LoginService } from "../../services/login.service"
import {
    FormGroup,
    FormControl,
    Validators,
  } from '@angular/forms';
  import {  OnInit } from '@angular/core';
  import { EventEmitter } from '@angular/core';
import { finalize } from "rxjs/operators";
import { getStorage } from "src/app/utils/storage.utils";

@Component({
selector: 'app-login-form',
templateUrl: './login-form.component.html',
styles: [
    `label {
        display: block;
        margin-bottom: 1em;
    }
    input {
        display: block;
        width: 100%;
        margin-bottom: 1em;
    }
    `
]
})
export class LoginFormComponent implements OnInit  {

@Output() success: EventEmitter<void> = new EventEmitter();




    loading: boolean = false; 
    error:string = '';

        public loginForm: FormGroup = new FormGroup({
            trainerName: new FormControl('', [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(20),
            ]),
          });


          constructor( private readonly loginService: LoginService ) {


          }
  ngOnInit(): void {
   const existingTrainer = getStorage<any>('pk-tr');
   if(existingTrainer !== null) {
     this.success.emit();
   }
  }



 get trainerName(){
    return this.loginForm.get('trainerName');
  }


onStartClick() {
    const { trainerName } = this.loginForm.value;
    this.loading = true;
this.loginService.login( trainerName )
.pipe(
 finalize(()=>{
   this.loading = false;
 })
)
.subscribe(
    this.handleSuccessfullLogin.bind(this),
    this.handleLoginError.bind(this)
)
}

onRegisterClick(){
  const { trainerName } = this.loginForm.value;
  this.loginService.register(trainerName).subscribe(response =>{
    this.success.emit();
  });
}

handleSuccessfullLogin(trainer:any): void {
    this.success.emit();
  }

  handleLoginError({message="error"}): void {
   this.error = message
    console.log(message);
  }

}