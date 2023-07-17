import { Routes } from "@angular/router";

export const presentationRoutes: Routes = [
  {
    path:'',
    loadChildren:()=> import("./accounts/login/login.routes").then(r=>r.LoginRoutes)
  }
]
