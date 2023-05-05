import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Educacion } from '../model/Educacion';
import { Experiencia } from '../model/Experiencia';
import { HardAndSoftSkill } from '../model/HardAndSoftSkill';
import { AcercaDeMi } from '../model/AcercaDeMi';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService{

  constructor(private http:HttpClient,private router: Router,){ }

  public isLog: boolean= false;
  //url: string= environment.apiURL
  url: string= "http://localhost:8080/"//url local

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
    return this.http.post<Educacion>(this.url+`educacion/new`, educacion)
  }

  getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url+`educacion/lista`);
  }

  getEducacionPorId(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.url+`educacion/get/${id}`);
  }

  updateEducacion(id: number, educacion:Educacion): Observable<Educacion>{
    return this.http.put<Educacion>(this.url+`educacion/update/${id}`, educacion)
  }
 
  deleteEducacion(id: number): Observable<Educacion>{
   return this.http.delete<Educacion>(this.url+`educacion/delete/${id}`);
  }



  ///////////////////      CRUD Experiencia     /////////////////////////////



  addExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(this.url+`experiencia/new`, experiencia)
  }

  getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url+`experiencia/lista`);
  }

  getExperienciaPorId(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url+`experiencia/get/${id}`);
  }

  updateExperiencia(id: number, experiencia:Experiencia): Observable<Experiencia>{
    return this.http.put<Experiencia>(this.url+`experiencia/update/${id}`, experiencia)
  }
 
  deleteExperiencia(id: number): Observable<Experiencia>{
   return this.http.delete<Experiencia>(this.url+`experiencia/delete/${id}`);
  }



  ///////////////////      CRUD HardAndSoftSkills     /////////////////////////////



  addHardAndSoftSkill(hardAndSoftSkill:HardAndSoftSkill): Observable<HardAndSoftSkill>{
    return this.http.post<HardAndSoftSkill>(this.url+`hardAndSoftSkill/new`, hardAndSoftSkill)
  }

  getHardAndSoftSkill(): Observable<HardAndSoftSkill[]>{
    return this.http.get<HardAndSoftSkill[]>(this.url+`hardAndSoftSkill/lista`);
  }

  getHardAndSoftSkillPorId(id: number): Observable<HardAndSoftSkill>{
    return this.http.get<HardAndSoftSkill>(this.url+`hardAndSoftSkill/get/${id}`);
  }

  updateHardAndSoftSkill(id: number, hardAndSoftSkill:HardAndSoftSkill): Observable<HardAndSoftSkill>{
    return this.http.put<HardAndSoftSkill>(this.url+`hardAndSoftSkill/update/${id}`, hardAndSoftSkill)
  }
 
  deleteHardAndSoftSkill(id: number): Observable<HardAndSoftSkill>{
   return this.http.delete<HardAndSoftSkill>(this.url+`hardAndSoftSkill/delete/${id}`);
  }



  ///////////////////      CRUD AcercaDeMi    /////////////////////////////
  


  addAcercaDeMi(acercaDeMi:AcercaDeMi): Observable<AcercaDeMi>{
    return this.http.post<AcercaDeMi>(this.url+`acercaDeMi/new`, acercaDeMi)
  }

  getAcercaDeMi(): Observable<AcercaDeMi[]>{
    return this.http.get<AcercaDeMi[]>(this.url+`acercaDeMi/lista`);
  }

  getAcercaDeMiPorId(id: number): Observable<AcercaDeMi>{
    return this.http.get<AcercaDeMi>(this.url+`acercaDeMi/get/${id}`);
  }

  updateAcercaDeMi(id: number, acercaDeMi:AcercaDeMi): Observable<AcercaDeMi>{
    return this.http.put<AcercaDeMi>(this.url+`acercaDeMi/update/${id}`, acercaDeMi)
  }
 
  deleteAcercaDeMi(id: number): Observable<AcercaDeMi>{
   return this.http.delete<AcercaDeMi>(this.url+`acercaDeMi/delete/${id}`);
  }



}

