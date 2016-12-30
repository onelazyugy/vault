import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from '../login/login.service';
import { Subscription }   from 'rxjs/Subscription';

import { IUser } from '../login/user';

@Component({
    templateUrl: 'app/home/home.component.html',
    providers: [] //a service would go in that array
})

export class HomeComponent implements OnInit, OnDestroy{
    isShowSearchBar:boolean = false;

    subscription: Subscription;
    user: IUser;

    constructor(private loginService: LoginService){
        console.log('inside constructor of HomeComponent..');
        this.subscription = loginService.userLoginAnnounced$.subscribe(
            user =>{
                console.log('user object from child to home component is: ' + JSON.stringify(user));
                this.isShowSearchBar = user.isLogin;
        });
    }

    ngOnInit(): void {
       //if no session or not login, show the login UI
       console.log("oninit HomeComponent...");
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}