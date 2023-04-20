import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  
  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }
  
  /*
  form:FormGroup;
  constructor (private formBuilder:FormBuilder){
    this.form=this.formBuilder.group(
      {
        
      }
    )
  }
  */
  ngOnInit(): void {

  }

}
