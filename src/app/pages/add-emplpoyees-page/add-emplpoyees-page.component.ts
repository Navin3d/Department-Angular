import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BackendServiceService } from "src/app/services/backend-service.service";

@Component({
  selector: 'app-add-emplpoyees-page',
  templateUrl: './add-emplpoyees-page.component.html',
  styleUrls: ["../../styles/add-record-style.css"]
})
export class AddEmplpoyeesPageComponent implements OnInit {

  private employeeId!: number;
  private idUpdate!: boolean;
  private employee!: any;

  constructor(private route: ActivatedRoute, private backendService: BackendServiceService) {}

  ngOnInit(): void {
    this.route.url.subscribe((path) => {
      console.log(path[1].path);
      if(path[1].path == "update") {
        this.idUpdate = true;
        this.reloadData();
      } else {
        this.idUpdate = false;
      }
    });
    this.route.params.subscribe((params: Params) => {
      this.employeeId = +params["id"];
    });
    console.log(this.idUpdate + " - " + this.employeeId);
  }

  reloadData(): void {
    this.employee = this.backendService.getEmployees(this.employeeId);
  }

}
