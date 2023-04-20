import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Educacion } from '../model/Educacion';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService{

  constructor(private http:HttpClient,private router: Router,){ }

  obtenerDatos():Observable<any>{
    console.log("el servicio esta corriendo");
    return this.http.get('/assets/data/data.json');
  }

  getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`http://localhost:8080/reqmapeduc/ver/educacion`);
   }

}

