import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	selector: 'change-location',
	moduleId: module.id,
	templateUrl: './change-location.component.html',
	styleUrls: ['./change-location.component.css']
})

export class ChangeLocationComponent implements OnInit {

	constructor(
		private _routerExtensions: RouterExtensions,
		private _activeRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this._routerExtensions.navigate(["login"], { relativeTo: this._activeRoute });
	 }
}