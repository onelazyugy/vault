import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { LoginObservableService } from '../login/login-observable.service';
import { LogoutObservableService } from '../login/logout-observable.service';
import { IUser } from '../login/user';
import { UserAuthService } from '../services/user-auth.service';

@Component({
    templateUrl: 'app/home/home.component.html',
    providers: [UserAuthService] //a service would go in that array
})

export class HomeComponent implements OnInit, OnDestroy{
    isShowSearchBar:boolean = false;
    subscription: Subscription;
    user: IUser;
    nofigyLogout: string;

    constructor(private loginObservableService: LoginObservableService, private logoutObservableService: LogoutObservableService, private userAuthService: UserAuthService){
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
       console.log("oninit HomeComponent...");
       //call backend server to check if user is login or not when refresh page
       let ux: IUser;
        this.userAuthService.userStillAlive().subscribe(
            ux => {
                console.log('data from userStillAlive: ' + JSON.stringify(ux));
                if(ux){
                    let isAlive: boolean = ux.userLogin;
                    let currentName: string = ux.username;
                    console.log('isAlive: ' + isAlive + ' | currentName: ' + currentName);
                    if(isAlive){
                        this.isShowSearchBar = true;                       
                        //notify home component the show the search bar
                        let alive: string = 'alive';
                        this.logoutObservableService.announceUserIsLogout(alive);
                    }
                }
            });
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}