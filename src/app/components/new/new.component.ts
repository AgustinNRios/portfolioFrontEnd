import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDeMi } from 'src/app/model/AcercaDeMi';
import { Educacion } from 'src/app/model/Educacion';
import { Experiencia } from 'src/app/model/Experiencia';
import { HardAndSoftSkill } from 'src/app/model/HardAndSoftSkill';
import { ImageService } from 'src/app/services/image.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  area: String = "";

  aDMImg: String;
  aDMTitulo: String;
  aDMDescripcion: String;

  educacionImg: String;
  educacionInstitucion: String;
  educacionTitulo: String;
  educacionEstado: String;
  educacionDescripcion: String;

  hASSImg: String;
  hASSArea: String;
  hASSNombre: String;
  hASSNivel: number;
  hASSCategoria: String;

  expImg: String;
  expEmpresa: String;
  expCargo: String;
  expPeriodo: String;
  expDescripcion: String;


  constructor(
    private portfolioService: PortfolioService, 
    private router: Router,
    private activatedRouter : ActivatedRoute,
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.area = this.activatedRouter.snapshot.params['area'];
  }

  onCreate(): void{

    if(this.area=="acercaDeMi")
    {
      let aDM;
      if(this.aDMImg!="")
      {
        aDM = new AcercaDeMi(this.imageService.url, this.aDMTitulo, this.aDMDescripcion);
      }
      else
      {
        aDM = new AcercaDeMi(this.aDMImg, this.aDMTitulo, this.aDMDescripcion);
      }


      this.portfolioService.addAcercaDeMi(aDM).subscribe(
        data =>{
          alert("aDM añadida correctamente");
          this.router.navigate(['/AcercaDe']);
        }, err =>{
          alert("falló");
          this.router.navigate(['/AcercaDe']);
        }
      )
    }
    if(this.area=="educacion")
    {
      
      let educacion;
      if(this.educacionImg!="")
      {
        educacion = new Educacion(this.imageService.url, this.educacionInstitucion, this.educacionTitulo, this.educacionEstado, this.educacionDescripcion);
      }
      else
      {
        educacion = new Educacion(this.educacionImg, this.educacionInstitucion, this.educacionTitulo, this.educacionEstado, this.educacionDescripcion);
      }
      this.portfolioService.addEducacion(educacion).subscribe(
        data =>{
          alert("Educacion añadida correctamente");
          this.router.navigate(['/Educacion']);
        }, err =>{
          alert("falló");
          this.router.navigate(['/Educacion']);
        }
      )
    }
    if(this.area=="hardAndSoftSkill")
    {
      let hASS;
      if(this.hASSImg!="")
      {
        hASS = new HardAndSoftSkill(this.imageService.url, this.hASSArea, this.hASSNombre, this.hASSNivel, this.hASSCategoria);
      }
      else
      {
        hASS = new HardAndSoftSkill(this.hASSImg, this.hASSArea, this.hASSNombre, this.hASSNivel, this.hASSCategoria);
      }
     

      this.portfolioService.addHardAndSoftSkill(hASS).subscribe(
        data =>{
          alert("hASS añadida correctamente");
          this.router.navigate(['HardAndSoftSkill']);
        }, err =>{
          alert("falló");
          this.router.navigate(['HardAndSoftSkill']);
        }
      )
    }
    if(this.area=="experiencia")
    {
      
      let exp;
      if(this.expImg!="")
      {
        exp = new Experiencia(this.imageService.url, this.expEmpresa, this.expCargo, this.expPeriodo, this.expDescripcion);
      }
      else
      {
        exp = new Experiencia(this.expImg, this.expEmpresa, this.expCargo, this.expPeriodo, this.expDescripcion);
      }

      this.portfolioService.addExperiencia(exp).subscribe(
        data =>{
          alert("exp añadida correctamente");
          this.router.navigate(['Experiencia']);
        }, err =>{
          alert("falló");
          this.router.navigate(['Experiencia']);
        }
      )
    }
  }

  uploadNewImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    let name = "";
    if(this.area=="acercaDeMi")
    {
      name = "imgAcercaDeMi_" + id;
    }
    if(this.area=="educacion")
    {
      name = "imgEducacion_" + id;
    }
    if(this.area=="hardAndSoftSkill")
    {
      name = "imgHardAndSoftSkill_" + id;
    }
    if(this.area=="experiencia")
    {
      name = "imgExperiencia_" + id;
    }

    this.imageService.uploadImage($event, name)}

}

