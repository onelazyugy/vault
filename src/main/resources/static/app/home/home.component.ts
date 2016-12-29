import { Component, OnInit } from '@angular/core';

import { SessionService } from '../shared/shared-session.service';

@Component({
    templateUrl: 'app/home/home.component.html'
})

export class HomeComponent implements OnInit{
    isLogin:boolean = false;
    constructor(private _sessionService: SessionService){
        console.log('inside constructor of HomeComponent..');
        this.isLogin = this._sessionService.isLoggedIn();
        console.log('isLogin flag is: ' + this.isLogin);
    }
    ngOnInit(): void {
       //if no session or not login, show the login UI
       console.log("oninit HomeComponent...");
    }
}