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
  public isLog: boolean= false;

  isLoged(): boolean
  {
    console.log(sessionStorage.getItem("tokenKey"))
    if(sessionStorage.getItem("tokenKey")=="true")
    {
      this.isLog=true;
    }
    else
    {
      this.isLog=false;
    }
    return this.isLog;
  }

  obtenerDatos():Observable<any>{
    console.log("el servicio esta corriendo");
    return this.http.get('/assets/data/data.json');
  }

  ///////////////////      CRUD Educación       /////////////////////////////

  addEducacion(educacion:Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(`http://localhost:8080/educacion/ver`, educacion)
  }

  getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`http://localhost:8080/educacion/lista`);
  }

  getEducacionPorId(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(`http://localhost:8080/educacion/get/${id}`);
  }

  updateEducacion(id: number, educacion:Educacion): Observable<Educacion>{
    return this.http.put<Educacion>(`http://localhost:8080/educacion/update/${id}`, educacion)
  }
 
  deleteEducacion(id: number): Observable<Educacion>{
   return this.http.delete<Educacion>(`http://localhost:8080/educacion/delete/${id}`);
  }

  ///////////////////      CRUD Experiencia     /////////////////////////////



}

