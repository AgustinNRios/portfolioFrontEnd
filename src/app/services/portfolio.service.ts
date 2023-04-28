import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Educacion } from '../model/Educacion';
import { Experiencia } from '../model/Experiencia';
import { HardAndSoftSkill } from '../model/HardAndSoftSkill';
import { AcercaDeMi } from '../model/AcercaDeMi';

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
    return this.http.post<Educacion>(`http://localhost:8080/educacion/new`, educacion)
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



  addExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(`http://localhost:8080/experiencia/new`, experiencia)
  }

  getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`http://localhost:8080/experiencia/lista`);
  }

  getExperienciaPorId(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(`http://localhost:8080/experiencia/get/${id}`);
  }

  updateExperiencia(id: number, experiencia:Experiencia): Observable<Experiencia>{
    return this.http.put<Experiencia>(`http://localhost:8080/experiencia/update/${id}`, experiencia)
  }
 
  deleteExperiencia(id: number): Observable<Experiencia>{
   return this.http.delete<Experiencia>(`http://localhost:8080/experiencia/delete/${id}`);
  }



  ///////////////////      CRUD HardAndSoftSkills     /////////////////////////////



  addHardAndSoftSkill(hardAndSoftSkill:HardAndSoftSkill): Observable<HardAndSoftSkill>{
    return this.http.post<HardAndSoftSkill>(`http://localhost:8080/hardAndSoftSkill/new`, hardAndSoftSkill)
  }

  getHardAndSoftSkill(): Observable<HardAndSoftSkill[]>{
    return this.http.get<HardAndSoftSkill[]>(`http://localhost:8080/hardAndSoftSkill/lista`);
  }

  getHardAndSoftSkillPorId(id: number): Observable<HardAndSoftSkill>{
    return this.http.get<HardAndSoftSkill>(`http://localhost:8080/hardAndSoftSkill/get/${id}`);
  }

  updateHardAndSoftSkill(id: number, hardAndSoftSkill:HardAndSoftSkill): Observable<HardAndSoftSkill>{
    return this.http.put<HardAndSoftSkill>(`http://localhost:8080/hardAndSoftSkill/update/${id}`, hardAndSoftSkill)
  }
 
  deleteHardAndSoftSkill(id: number): Observable<HardAndSoftSkill>{
   return this.http.delete<HardAndSoftSkill>(`http://localhost:8080/hardAndSoftSkill/delete/${id}`);
  }



  ///////////////////      CRUD AcercaDeMi    /////////////////////////////
  


  addAcercaDeMi(acercaDeMi:AcercaDeMi): Observable<AcercaDeMi>{
    return this.http.post<AcercaDeMi>(`http://localhost:8080/acercaDeMi/new`, acercaDeMi)
  }

  getAcercaDeMi(): Observable<AcercaDeMi[]>{
    return this.http.get<AcercaDeMi[]>(`http://localhost:8080/acercaDeMi/lista`);
  }

  getAcercaDeMiPorId(id: number): Observable<AcercaDeMi>{
    return this.http.get<AcercaDeMi>(`http://localhost:8080/acercaDeMi/get/${id}`);
  }

  updateAcercaDeMi(id: number, acercaDeMi:AcercaDeMi): Observable<AcercaDeMi>{
    return this.http.put<AcercaDeMi>(`http://localhost:8080/acercaDeMi/update/${id}`, acercaDeMi)
  }
 
  deleteAcercaDeMi(id: number): Observable<AcercaDeMi>{
   return this.http.delete<AcercaDeMi>(`http://localhost:8080/acercaDeMi/delete/${id}`);
  }



}

