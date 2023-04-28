import { Component, OnInit } from '@angular/core';
import { HardAndSoftSkill } from 'src/app/model/HardAndSoftSkill';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.css']
})
export class HardAndSoftSkillsComponent implements OnInit {
  public skillList: HardAndSoftSkill[]=[];
  public isLoged: boolean = false;

  constructor(
    private portfolioService: PortfolioService,
  ) { }

  ngOnInit(): void {
    this.cargarHardAndSoftSkill()
    /*
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.skillList=data.hardYSoftSkills;
    });
    */
  }

  cargarHardAndSoftSkill(): void{
    this.portfolioService.getHardAndSoftSkill().subscribe(
      data =>{
        this.skillList = data;
      }
    )
    this.isLoged = this.portfolioService.isLoged()
  }

  deleteHardAndSoftSkill(id?: number){
    if( id != undefined){
      this.portfolioService.deleteHardAndSoftSkill(id).subscribe(
        data => {    this.cargarHardAndSoftSkill()
        }, err => {
          alert("No se pudo eliminar HardAndsoftSkill");
        }
      )
    }
  }

}