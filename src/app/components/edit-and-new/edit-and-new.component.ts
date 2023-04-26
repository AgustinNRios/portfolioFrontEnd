import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/Educacion';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-and-new',
  templateUrl: './edit-and-new.component.html',
  styleUrls: ['./edit-and-new.component.css']
})
export class EditAndNewComponent implements OnInit {

  
  educacion: Educacion = null;
  
  constructor(
    private portfolioService: PortfolioService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.portfolioService.getEducacionPorId(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.portfolioService.updateEducacion(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }
}
