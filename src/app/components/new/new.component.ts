import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/Educacion';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  img: String;
  institucion: String;
  titulo: String;
  estado: String;
  descripcion: String;

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.img, this.institucion, this.titulo, this.estado, this.descripcion);
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

}

