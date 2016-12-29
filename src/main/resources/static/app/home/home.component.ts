import { Component, OnInit } from '@angular/core';

import { SessionService } from '../shared/shared-session.service';

@Component({
    templateUrl: 'app/home/home.component.html'
})

export class HomeComponent implements OnInit{
    isLogin:boolean = false;
    constructor(private _sessionService: SessionService){
        console.log('inside constructor of HomeComponent..');
        console.log('is user login from HomeComponent: ' + this._sessionService.isLoggedIn());
    }
    ngOnInit(): void {
       //if no session or not login, show the login UI
       console.log("oninit HomeComponent...");
    }
}