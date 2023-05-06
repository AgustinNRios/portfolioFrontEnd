import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDeMi } from 'src/app/model/AcercaDeMi';
import { Educacion } from 'src/app/model/Educacion';
import { Experiencia } from 'src/app/model/Experiencia';
import { HardAndSoftSkill } from 'src/app/model/HardAndSoftSkill';
import { ImageService } from 'src/app/services/image.service';
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
    private router: Router,
    
    public imageService: ImageService,
    
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

    if(this.area=="perfil")
    {
      //imagen
      this.aDM.img = this.imageService.url
      //resto
      this.portfolioService.updateAcercaDeMi(id, this.aDM).subscribe(
        data => {
          this.router.navigate(['/AcercaDe']);
        }, err => {
          alert("Error al modificar la aDM");
          this.router.navigate(['/AcercaDe']);
        }
      )
    }
    if(this.area=="acercaDeMi")
    {
      //imagen
      this.aDM.img = this.imageService.url
      //resto
      this.portfolioService.updateAcercaDeMi(id, this.aDM).subscribe(
        data => {
          this.router.navigate(['/AcercaDe']);
        }, err => {
          alert("Error al modificar la aDM");
          this.router.navigate(['/AcercaDe']);
        }
      )
    }
    if(this.area=="educacion")
    {
      //imagen
      this.educacion.img = this.imageService.url

      this.portfolioService.updateEducacion(id, this.educacion).subscribe(
        data => {
          this.router.navigate(['/Educacion']);
        }, err => {
          alert("Error al modificar la educacion");
          this.router.navigate(['/Educacion']);
        }
      )
    }
    if(this.area=="hardAndSoftSkill")
    {
      //imagen
      this.hASS.img = this.imageService.url

      this.portfolioService.updateHardAndSoftSkill(id, this.hASS).subscribe(
        data => {
          this.router.navigate(['/hardAndSoftSkills']);
        }, err => {
          alert("Error al modificar la hASS");
          this.router.navigate(['/hardAndSoftSkills']);
        }
      )
    }
    if(this.area=="experiencia")
    {
      //imagen
      this.exp.img = this.imageService.url

      this.portfolioService.updateExperiencia(id, this.exp).subscribe(
        data => {
          this.router.navigate(['/Experiencia']);
        }, err => {
          alert("Error al modificar la exp");
          this.router.navigate(['/Experiencia']);
        }
      )
    }

  }
  
  uploadImage($event:any){
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

    this.imageService.uploadImage($event, name)
  }

    uploadImagePerfil($event:any){
      let namePerfil = "perfil.png";
      this.imageService.uploadImage($event, namePerfil)
    }

    uploadImageBanner($event:any){
      let nameBanner = "banner.png";
      this.imageService.uploadImage($event, nameBanner)
    }
   
}
