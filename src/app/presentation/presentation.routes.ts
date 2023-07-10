import { Routes } from "@angular/router";

export const presentationRoutes: Routes = [
  {
    path:"/login",
    loadChildren:()=> import("./accounts/login/location.routes").then(r=>r.presentationRoutes)
  }
]
