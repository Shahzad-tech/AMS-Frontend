import { Routes } from "@angular/router";

export const presentationRoutes: Routes = [
  {
    path:"",
    loadComponent:()=> import('./login.component').then(p=>p.LoginComponent)
  }
]

