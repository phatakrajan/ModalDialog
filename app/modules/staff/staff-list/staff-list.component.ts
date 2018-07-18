import { Component, OnInit, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { ChangeLocationComponent } from '../../user-control/change-location/change-location.component';

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
        let options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this._vcRef,
            backdrop: "static"
        };
        this._modal.showModal(ChangeLocationComponent, options).then(() => {
            console.log('modal closed');
        });
        this._chRef.detectChanges();
    }
}