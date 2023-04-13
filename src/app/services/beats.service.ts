import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Beats } from "../interfaces/beats";

@Injectable({
    providedIn: 'root'
})
export class BeatService{

    myAppUrl: string = environment.endpoint;
    myApiUrl: string = 'api/beats';

    constructor(private http: HttpClient ){}

    getBeats(): Observable<any>{
        
    return this.http.get<Beats[]>(this.myAppUrl + this.myApiUrl)

    }

    putBeat(beat: Beats): Observable<Beats>{
        return this.http.post<Beats>(this.myAppUrl + this.myApiUrl + "/post", beat);
    }

    deleteBeat(nombreBeat: string): Observable<void>{
        return this.http.delete<void>(this.myAppUrl + this.myApiUrl + "/" + nombreBeat);
    }
    updateBeat(beat: Beats, nombreBeat: string): Observable<Beats>{
        return this.http.put<Beats>(this.myAppUrl + this.myApiUrl + "/" + nombreBeat, beat);
    }
    
    
}