import { Injectable } from "@angular/core";
import { getStorage } from "src/app/utils/storage.utils";




@Injectable({
providedIn: 'root'
})
export class SessionService{
active(): boolean {
    const trainer = getStorage('pk-tr')
    return Boolean(trainer);
}
}