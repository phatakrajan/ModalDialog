// MODULES PACKAGES
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptI18nModule } from "nativescript-i18n/angular";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

// COMPONENTS
import { SelectLocationComponent } from "./select-location/select-location.component";
import { LoginShortComponent } from "./login-short/login-short.component";
import { ChangeLocationComponent } from "../user-control/change-location/change-location.component";



@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptI18nModule,
  ],
  exports: [],
  declarations: [
    SelectLocationComponent,
    LoginShortComponent,
    ChangeLocationComponent
  ],
  entryComponents:[
    LoginShortComponent,
    ChangeLocationComponent
  ],
  providers: [     
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthenticationModule { }
