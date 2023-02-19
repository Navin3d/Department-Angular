import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ListEmplpoyeesPageComponent } from './pages/list-emplpoyees-page/list-emplpoyees-page.component';
import { ListDepartmentsPageComponent } from './pages/list-departments-page/list-departments-page.component';
import { AddDepartmentsPageComponent } from './pages/add-departments-page/add-departments-page.component';
import { AddEmplpoyeesPageComponent } from './pages/add-emplpoyees-page/add-emplpoyees-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    ListEmplpoyeesPageComponent,
    ListDepartmentsPageComponent,
    AddDepartmentsPageComponent,
    AddEmplpoyeesPageComponent,
    RegisterPageComponent,
    NavbarComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
