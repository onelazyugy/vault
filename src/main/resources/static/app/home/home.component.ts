import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginObservableService } from '../login/login-observable.service';
import { LogoutObservableService } from '../login/logout-observable.service';
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
    nofigyLogout: string;

    constructor(private loginObservableService: LoginObservableService, private logoutObservableService: LogoutObservableService){
        console.log('inside constructor of HomeComponent..');
        //user login notification
        this.subscription = loginObservableService.userLoginAnnounced$.subscribe(
            user =>{
                console.log('user object from child to home component is: ' + JSON.stringify(user));
                this.isShowSearchBar = user.isLogin;
        });

        //user logout notification
        this.subscription = logoutObservableService.userLogoutAnnounced$.subscribe(
            notifyLogout =>{
                console.log('message from app component to home compoent is: ' + JSON.stringify(notifyLogout));
                if(notifyLogout === 'logout'){
                    console.log("user is logged out, hidding the search bar")
                    this.isShowSearchBar = false;
                }
                if(notifyLogout === 'alive'){
                    console.log("user is alive, showing the search bar");
                    this.isShowSearchBar = true;
                }
            });
    }

    ngOnInit(): void {
       //if no session or not login, show the login UI
       console.log("oninit HomeComponent...");
       //call backend server to check if he/she is login or not when refresh page
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}