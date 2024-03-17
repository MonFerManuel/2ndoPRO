import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Likes } from "../interfaces/likes"
import { HttpClient } from "@angular/common/http";

//importamos interfaz like para que sirva de modelo. Creamos los servicios del front para likes
@Injectable({
  providedIn: 'root'
})
export class LikesService {

  myAppUrl: string = environment.endpoint;
  myApiUrl: string = 'api/likes/like';

  constructor(private http: HttpClient ){}
  //insertamos un like en la bbdd
  putLike(like: Likes): Observable<Likes>{
    return this.http.post<Likes>(this.myAppUrl + this.myApiUrl, like);
}

}
