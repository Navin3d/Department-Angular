import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackendServiceService } from "src/app/services/backend-service.service";
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-emplpoyees-page',
  templateUrl: './add-emplpoyees-page.component.html',
  styleUrls: ["../../styles/add-record-style.css"]
})
export class AddEmplpoyeesPageComponent implements OnInit {

  private employeeId!: number;
  private isUpdate!: boolean;
  employee!: any;

  postEmployee = this.formBuilder.group({
    firstName: "",
    lastName: "",
    gender: "M",
    age: 10,
    email: "",
    phoneNumber: "",
    hireDate: new Date(),
    salary: 0,
    createdBy: "ADMIN",
    departmentId: "4",
  });

  constructor(private route: ActivatedRoute, private backendService: BackendServiceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.route.url.subscribe((path) => {
      console.log(path[1].path);
      if (path[1].path == "update") {
        this.isUpdate = true;
        this.reloadData();
        this.postEmployee.setValue({
          firstName: this.employee.firstName,
          lastName: this.employee.lastName,
          gender: this.employee.gender,
          age: this.employee.age,
          email: this.employee.email,
          phoneNumber: this.employee.phoneNumber,
          hireDate: this.employee.hireDate,
          salary: this.employee.salary,
          createdBy: this.employee.createdBy,
          departmentId: this.employee.departmentId,
        });
      } else {
        this.isUpdate = false;
      }
    });
    this.route.params.subscribe((params: Params) => {
      this.employeeId = +params["id"];
    });
    console.log(this.isUpdate + " - " + this.employeeId);
  }

  reloadData(): void {
    this.employee = this.backendService.getEmployees(this.employeeId);
  }

  handleSubmit(): void {
    console.log(this.postEmployee.value);
    if(!this.isUpdate) {
      const isCreated = this.backendService.postEmployees(this.postEmployee.value);
      isCreated && this.router.navigateByUrl("/department/list");
    } else {
      const isCreated = this.backendService.putEmployees(this.employeeId, this.postEmployee.value);
      isCreated && this.router.navigateByUrl("/department/list");
    }
  }

}
