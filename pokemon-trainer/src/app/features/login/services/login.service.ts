import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment"
import { map } from 'rxjs/operators';
import { setStorage } from "src/app/utils/storage.utils"
const { trainerAPI } = environment;

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor( private readonly http: HttpClient){}
private setTrainer(trainer: any){
    setStorage('pk-tr',trainer);
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
        get<any>(`${trainerAPI}/trainers?name=${trainerName}`)
        .pipe(
            map((response: any[]) => {
             const  trainer  = response.pop();
             if(!trainer){
                throw Error(`The trainer "${trainerName}" does not exist. `) 
             }
             this.setTrainer(trainer)
             return trainer;
            })
            )
    }
}

