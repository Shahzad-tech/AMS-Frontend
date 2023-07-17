import { Routes } from "@angular/router";

export const LoginRoutes: Routes = [
  {
    path:'',
    loadComponent:()=> import('./login.component').then(p=>p.LoginComponent)
  }
]

