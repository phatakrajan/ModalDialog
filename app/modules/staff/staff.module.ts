// MODULES PACKAGES
import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// COMPONENTS
import { StaffListComponent } from "./staff-list/staff-list.component";
import { AuthenticationModule } from "~/modules/user-control/authentication.module";


@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AuthenticationModule
    ],
    exports: [],
    declarations: [
        StaffListComponent,
    ],
    providers: []
})
export class StaffModule { }
