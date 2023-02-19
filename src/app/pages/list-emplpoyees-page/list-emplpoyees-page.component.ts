import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/services/backend-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-emplpoyees-page',
  templateUrl: './list-emplpoyees-page.component.html'
})
export class ListEmplpoyeesPageComponent implements OnInit {

  employees: any;

  constructor(private backendServiceService: BackendServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.employees = this.backendServiceService.getAllEmployees();
  }

  handleDelete(employeeId: number): void {
    window.alert("Are you sure want to delete Employee: " + employeeId);
    const returnVlaue: boolean = this.backendServiceService.deleteEmployees(employeeId);
    window.location.reload();
  }

}
