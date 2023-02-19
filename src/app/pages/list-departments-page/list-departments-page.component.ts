import { Component, Directive, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/services/backend-service.service';

@Component({
  selector: 'app-list-departments-page',
  templateUrl: './list-departments-page.component.html',
})
export class ListDepartmentsPageComponent implements OnInit {

  departments: any;

  constructor(private backendService: BackendServiceService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.departments = this.backendService.getAllDepartments();
  }

  deleteDepartment(id: number): void {
    window.alert("Are you sure want to delete the Department: " + id)
    this.backendService.deleteDepartments(id);
    window.location.reload();
  }

}
