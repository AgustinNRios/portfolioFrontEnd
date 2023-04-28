import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDeMi } from 'src/app/model/AcercaDeMi';
import { Educacion } from 'src/app/model/Educacion';
import { Experiencia } from 'src/app/model/Experiencia';
import { HardAndSoftSkill } from 'src/app/model/HardAndSoftSkill';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-and-new',
  templateUrl: './edit-and-new.component.html',
  styleUrls: ['./edit-and-new.component.css']
})
export class EditAndNewComponent implements OnInit {
  aDM: AcercaDeMi = null;
  educacion: Educacion = null;
  hASS: HardAndSoftSkill = null;
  exp: Experiencia = null;
  
  area: String = "";
  
  constructor(
    private portfolioService: PortfolioService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.area = this.activatedRouter.snapshot.params['area'];
    if(this.area=="acercaDeMi")
    {
      this.portfolioService.getAcercaDeMiPorId(id).subscribe(
        data =>{
          this.aDM = data;
        }, err =>{
           alert("Error al modificar aDM");
           this.router.navigate(['']);
        }
      )
    }
    if(this.area=="educacion")
    {
      this.portfolioService.getEducacionPorId(id).subscribe(
        data =>{
          this.educacion = data;
        }, err =>{
           alert("Error al modificar educacion");
           this.router.navigate(['']);
        }
      )
    }
    if(this.area=="hardAndSoftSkill")
    {
      this.portfolioService.getHardAndSoftSkillPorId(id).subscribe(
        data =>{
          this.hASS = data;
        }, err =>{
           alert("Error al modificar hASS");
           this.router.navigate(['']);
        }
      )
    }
    if(this.area=="experiencia")
    {
      this.portfolioService.getExperienciaPorId(id).subscribe(
        data =>{
          this.exp = data;
        }, err =>{
           alert("Error al modificar exp");
           this.router.navigate(['']);
        }
      )
    }

  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    if(this.area=="acercaDeMi")
    {
      this.portfolioService.updateAcercaDeMi(id, this.aDM).subscribe(
        data => {
          //this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la aDM");
          //this.router.navigate(['']);
        }
      )
    }
    if(this.area=="educacion")
    {
      this.portfolioService.updateEducacion(id, this.educacion).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la educacion");
          this.router.navigate(['']);
        }
      )
    }
    if(this.area=="hardAndSoftSkill")
    {
      this.portfolioService.updateHardAndSoftSkill(id, this.hASS).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la hASS");
          this.router.navigate(['']);
        }
      )
    }
    if(this.area=="experiencia")
    {
      this.portfolioService.updateExperiencia(id, this.exp).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la exp");
          this.router.navigate(['']);
        }
      )
    }

  }
}
