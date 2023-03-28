import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private datosPortfolio:PortfolioService)
  {

  }
  ngOnInit(): void
  {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
    });
  }

}
