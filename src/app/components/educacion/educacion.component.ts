import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent  implements OnInit{

  public educaciones: Educacion[]=[];
  public isLoged: boolean = false;

  constructor(
    private portfolioService: PortfolioService,
  ) { }

  ngOnInit(): void {
    this.portfolioService.getEducacion()
      .subscribe(data => {
        this.educaciones = data;
      });
      this.isLoged = this.portfolioService.isLoged();
  }
  
}
