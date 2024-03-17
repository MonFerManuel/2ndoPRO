import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Beats } from "../interfaces/beats";

//importamos interfaz beats para que sirva de modelo. Creamos los servicios del front para beats

@Injectable({
    providedIn: 'root'
})
export class BeatService{

    myAppUrl: string = environment.endpoint;
    myApiUrl: string = 'api/beats';

    constructor(private http: HttpClient ){}

    //obtener beats
    getBeats(): Observable<any>{
        
    return this.http.get<Beats[]>(this.myAppUrl + this.myApiUrl)

    }

    //actualizar beats con post
    putBeat(beat: Beats): Observable<Beats>{
        return this.http.post<Beats>(this.myAppUrl + this.myApiUrl + "/post", beat);
    }

    //borrar beats
    deleteBeat(nombreBeat: string): Observable<void>{
        return this.http.delete<void>(this.myAppUrl + this.myApiUrl + "/" + nombreBeat);
    }
    //actualizar con put beats
    updateBeat(beat: Beats, nombreBeat: string): Observable<Beats>{
        return this.http.put<Beats>(this.myAppUrl + this.myApiUrl + "/" + nombreBeat, beat);
    }

    //devuelve un beat en concreto
    getBeat(nombreBeat: string): Observable<Beats>{
        return this.http.get<Beats>(this.myAppUrl + this.myApiUrl + "/" + nombreBeat)
    }
    
    
}