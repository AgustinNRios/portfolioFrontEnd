import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient){ }

  obtenerDatos():Observable<any>{
    console.log("el servicio esta corriendo");
    return this.http.get('json');
  }
}

