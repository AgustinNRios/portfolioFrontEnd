import { Component, OnInit } from '@angular/core';
import { AcercaDeMi } from 'src/app/model/AcercaDeMi';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{

  public listaAcercaDeMi: AcercaDeMi[]=[];
  public isLoged: boolean = false;

  constructor(
    private portfolioService: PortfolioService,
  ) { }

  ngOnInit(): void {
    
    this.cargarAcercaDeMi()
    
  }

  cargarAcercaDeMi(): void{
    this.portfolioService.getAcercaDeMi().subscribe(
      data =>{
        this.listaAcercaDeMi = data;
      }
    )
    this.isLoged = this.portfolioService.isLoged()
  }

  deleteAcercaDeMi(id?: number){
    if( id != undefined){
      this.portfolioService.deleteAcercaDeMi(id).subscribe(
        data => {    this.cargarAcercaDeMi()
        }, err => {
          alert("No se pudo eliminar AcercaDeMi");
        }
      )
    }
  }

}
