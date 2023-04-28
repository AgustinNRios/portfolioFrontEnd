import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/Experiencia';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  public experiencias: Experiencia[]=[];
  public isLoged: boolean = false;

  constructor(
    private portfolioService: PortfolioService,
  ) { }

  ngOnInit(): void {
    this.cargarExperiencia()
  }

  cargarExperiencia(): void{
    this.portfolioService.getExperiencia().subscribe(
      data =>{
        this.experiencias = data;
      }
    )
    this.isLoged = this.portfolioService.isLoged();
  }

  deleteExperiencia(id?: number){
    if( id != undefined){
      this.portfolioService.deleteExperiencia(id).subscribe(
        data => {    this.cargarExperiencia()
        }, err => {
          alert("No se pudo eliminar Experiencia");
        }
      )
    }
  }
  

}
