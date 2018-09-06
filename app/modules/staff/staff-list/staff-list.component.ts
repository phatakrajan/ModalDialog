import { Component, OnInit, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { ChangeLocationComponent } from '../../user-control/change-location/change-location.component';
import { available } from "nativescript-appavailability";
import { openUrl } from "tns-core-modules/utils/utils";
import { isIOS } from "platform";

@Component({
    selector: 'staff-list',
    moduleId: module.id,
	templateUrl: './staff-list.component.html',
	styleUrls: ['./staff-list.component.css']
})

export class StaffListComponent implements OnInit {

	constructor(
        private _modal: ModalDialogService,
        private _vcRef: ViewContainerRef,
        private _chRef: ChangeDetectorRef,
	) { }

	ngOnInit() { }

	onTapSelector() {
        // let options = {
        //     context: {},
        //     fullscreen: false,
        //     viewContainerRef: this._vcRef,
        //     backdrop: "static"
        // };
        // this._modal.showModal(ChangeLocationComponent, options).then(() => {
        //     console.log('modal closed');
        // });
        // this._chRef.detectChanges();
        const umaScheme = "uma://";
        available(umaScheme).then(available => {
          if (available) {
            // open in the app
            openUrl(umaScheme + (isIOS ? "/user?screen_name=" : "user?user_id=") + "eddyverbruggen");
          } else {
            // open in the default browser
            openUrl("https://twitter.com/eddyverbruggen");
          }
        })

    }
}