import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Observable, of } from 'rxjs';
import Login from 'src/app/models/Login';

import { BackendServiceService } from 'src/app/services/backend-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private backendService : BackendServiceService) {}
  ngOnInit(): void {}

  loginForm = this.formBuilder.group<Login>({
    userName: "",
    password: ""
  });

  handleSubmit() : void {
    var response = "";
    this.backendService.login(this.loginForm.value)
      .subscribe(data => {
        console.log(data)
        response = data;
      });
    console.log(response);
  }

}
