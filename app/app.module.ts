// MODULES PACKAGES
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptI18nModule } from "nativescript-i18n/angular";
import { TNSFontIconModule } from "nativescript-ng2-fonticon";
import { NSNUMKEY_DIRECTIVES } from "nativescript-numeric-keyboard/angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

// MODULES
import { AuthenticationModule } from "./modules/user-control/authentication.module";
import { StaffModule } from "./modules/staff/staff.module";
import { routes } from "./app.routing";
import { ModalDialogService } from "nativescript-angular/modal-dialog";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        StaffModule,
        AuthenticationModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        NativeScriptI18nModule,
        TNSFontIconModule.forRoot({
            mdi: "material-design-icons.css"
        })
    ],
    declarations: [
        AppComponent,
        NSNUMKEY_DIRECTIVES
    ],
    providers: [
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }