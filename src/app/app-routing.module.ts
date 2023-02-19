import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentsPageComponent } from './pages/add-departments-page/add-departments-page.component';
import { AddEmplpoyeesPageComponent } from './pages/add-emplpoyees-page/add-emplpoyees-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListDepartmentsPageComponent } from './pages/list-departments-page/list-departments-page.component';
import { ListEmplpoyeesPageComponent } from './pages/list-emplpoyees-page/list-emplpoyees-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "register", component: RegisterPageComponent },
  { path: "department/add", component: AddDepartmentsPageComponent },
  { path: "department/list", component: ListDepartmentsPageComponent },
  { path: "employee/add", component: AddEmplpoyeesPageComponent },
  { path: "employee/update/:id", component: AddEmplpoyeesPageComponent },
  { path: "employee/list", component: ListEmplpoyeesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
