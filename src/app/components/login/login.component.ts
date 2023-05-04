import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup;
  isLoged: boolean=false;

  constructor(
    private portfolioService: PortfolioService,
    private userService: UserService,
    private router: Router,
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

//15.2

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then( response=> {
        console.log(response);
        sessionStorage.setItem("tokenKey", "true");
        this.isLoged = this.portfolioService.isLoged();
        location.reload();
        //this.router.navigateByUrl("/AcercaDe")
      })
      .catch((error) => console.log(error));
      
  }
 
  ngOnInit(): void {
  }

}
