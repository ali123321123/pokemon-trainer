import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment"
import { map } from 'rxjs/operators';
import { setStorage } from "src/app/utils/storage.utils"
import { Trainer } from "src/app/models/trainer.model";
const { trainerAPI } = environment;

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor( private readonly http: HttpClient){}
private setTrainer(trainer: Trainer):void{
    setStorage<Trainer>('pk-tr',trainer);
}
    register(name: string):Observable<any>{
        return this.http.post(`${trainerAPI}/trainers`,{
            name,
            pokemon: []
        }).pipe(
         map((trainer)=>{

            return trainer;
         
         })   
        )
      
    }


   login(trainerName: string): Observable<any>{
        return this.http.
        get<Trainer[]>(`${trainerAPI}/trainers?name=${trainerName}`)
        .pipe(
            map((response: Trainer[]) => {
             const  trainer  = response.pop() as Trainer;
             if(!trainer){
                throw Error(`The trainer "${trainerName}" does not exist. `) 
             }
             this.setTrainer(trainer)
             return trainer;
            })
            )
    }
}

