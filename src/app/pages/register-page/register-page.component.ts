import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  registerForm = this.formBuilder.group({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    email: "",
    address: ""
  });

  handleSubmit() : void {
    (this.registerForm.getRawValue().password == this.registerForm.getRawValue().confirmPassword) ? 
      console.log(this.registerForm.value) :
      console.log("Password Does not match...");
  }

}
