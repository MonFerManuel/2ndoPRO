import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Usuarios } from "../interfaces/usuarios";

//importamos interfaz usuarios para que sirva de modelo. Creamos los servicios del front para usuarios

@Injectable({
    providedIn: 'root'
})
export class UsuariosService{

    myAppUrl: string = environment.endpoint;
    myApiUrl: string = 'api/usuarios';

    constructor(private http: HttpClient ){}

    //recuperamos usaruarios
    getUsuarios(): Observable<any>{
        
    return this.http.get<Usuarios[]>(this.myAppUrl + this.myApiUrl)

    }
    //recuperamos un usuario en concreto
    getUsuario(nombreUsuario: string): Observable<any>{
        return this.http.get<Usuarios>(this.myAppUrl + this.myApiUrl + "/" +nombreUsuario)
    }

    //insertamos un usuario
    postUsuario(usuario: Usuarios){
        return this.http.post(this.myAppUrl + this.myApiUrl, usuario)
    }
}