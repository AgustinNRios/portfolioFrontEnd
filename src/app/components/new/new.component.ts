import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDeMi } from 'src/app/model/AcercaDeMi';
import { Educacion } from 'src/app/model/Educacion';
import { Experiencia } from 'src/app/model/Experiencia';
import { HardAndSoftSkill } from 'src/app/model/HardAndSoftSkill';
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
  hASSNivel: String;
  hASSCategoria: String;

  expImg: String;
  expEmpresa: String;
  expCargo: String;
  expPeriodo: String;
  expDescripcion: String;


  constructor(
    private portfolioService: PortfolioService, 
    private router: Router,
    private activatedRouter : ActivatedRoute, ) { }

  ngOnInit(): void {
    this.area = this.activatedRouter.snapshot.params['area'];
  }

  onCreate(): void{

    if(this.area=="acercaDeMi")
    {
      const aDM = new AcercaDeMi(this.aDMImg, this.aDMTitulo, this.aDMDescripcion);

      this.portfolioService.addAcercaDeMi(aDM).subscribe(
        data =>{
          alert("aDM añadida correctamente");
          this.router.navigate(['']);
        }, err =>{
          alert("falló");
          this.router.navigate(['']);
        }
      )
    }
    if(this.area=="educacion")
    {
      const educacion = new Educacion(this.educacionImg, this.educacionInstitucion, this.educacionTitulo, this.educacionEstado, this.educacionDescripcion);

      this.portfolioService.addEducacion(educacion).subscribe(
        data =>{
          alert("Educacion añadida correctamente");
          this.router.navigate(['']);
        }, err =>{
          alert("falló");
          this.router.navigate(['']);
        }
      )
    }
    if(this.area=="hardAndSoftSkill")
    {
      const hASS = new HardAndSoftSkill(this.hASSImg, this.hASSArea, this.hASSNombre, this.hASSNivel, this.hASSCategoria);

      this.portfolioService.addHardAndSoftSkill(hASS).subscribe(
        data =>{
          alert("hASS añadida correctamente");
          this.router.navigate(['']);
        }, err =>{
          alert("falló");
          this.router.navigate(['']);
        }
      )
    }
    if(this.area=="experiencia")
    {
      const exp = new Experiencia(this.expImg, this.expEmpresa, this.expCargo, this.expPeriodo, this.expDescripcion);

      this.portfolioService.addExperiencia(exp).subscribe(
        data =>{
          alert("exp añadida correctamente");
          this.router.navigate(['']);
        }, err =>{
          alert("falló");
          this.router.navigate(['']);
        }
      )
    }

    





  }

}

