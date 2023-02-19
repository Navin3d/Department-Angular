import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackendServiceService } from 'src/app/services/backend-service.service';


@Component({
  selector: 'app-add-departments-page',
  templateUrl: './add-departments-page.component.html',
  styleUrls: ["../../styles/add-record-style.css"]
})
export class AddDepartmentsPageComponent implements OnInit {

  isUpdate!: boolean;
  id!: number;

  postDepartmentForm = this.formBuilder.group({
    name: "",
    isRegular: "S",
    creatorName: ""
  });

  constructor(private route: ActivatedRoute, private backendService: BackendServiceService, private formBuilder: FormBuilder, private router: Router) { }
  
  ngOnInit(): void {
    this.route.url.subscribe((path) => {
      console.log(path[1].path);
      if (path[1].path == "update") {
        this.isUpdate = true;
      } else {
        this.isUpdate = false;
      }
    });
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
    });
  }

  handleSubmit(): void {
    console.log(this.postDepartmentForm.value);

    if(!this.isUpdate) {
      const isCreated = this.backendService.postDepartments(this.postDepartmentForm.value);
      isCreated && this.router.navigateByUrl("/department/list");
    } else {
      const isCreated = this.backendService.putDepartments(this.id, this.postDepartmentForm.value);
      isCreated && this.router.navigateByUrl("/department/list");
    }

  }

}
