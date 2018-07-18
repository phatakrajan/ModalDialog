
import { Routes } from "@angular/router";

import { SelectLocationComponent } from "./modules/user-control/select-location/select-location.component";
import { StaffListComponent } from "./modules/staff/staff-list/staff-list.component";
import { LoginShortComponent } from "~/modules/user-control/login-short/login-short.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "staff-list",
    //redirectTo: "staff-checkout",
    pathMatch: "full"
  },
  {
    path: "staff-list",
    component: StaffListComponent,
    children: [
      {
        path: "login", component: LoginShortComponent
      },
      {
        path: "location", component: SelectLocationComponent
      }
    ]
  }
];



