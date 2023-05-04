import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio:any;
  public isLoged: boolean = false;

  constructor(
    private portfolioService:PortfolioService,
    private userService: UserService,
    )
  {

  }
  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });
    this.isLoged = this.portfolioService.isLoged();
  }

  onLogOut(): void {
    this.userService.logout();
    sessionStorage.setItem("tokenKey", "false");
    window.location.reload();
  }


}
