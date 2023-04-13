import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Usuarios } from "../interfaces/usuarios";

@Injectable({
    providedIn: 'root'
})
export class UsuariosService{

    myAppUrl: string = environment.endpoint;
    myApiUrl: string = 'api/usuarios';

    constructor(private http: HttpClient ){}

    getUsuarios(): Observable<any>{
        
    return this.http.get<Usuarios[]>(this.myAppUrl + this.myApiUrl)

    }

    getUsuario(nombreUsuario: string): Observable<any>{
        return this.http.get<Usuarios>(this.myAppUrl + this.myApiUrl + "/" +nombreUsuario)
    }
}