import { Component, OnInit, OnDestroy} from '@angular/core';

import { LoginObservableService } from './login/login-observable.service';
import { LogoutObservableService } from '../app/login/logout-observable.service';
import { Subscription }   from 'rxjs/Subscription';
import { IUser } from '../app/login/user';
import { UserAuthService } from '../app/services/user-auth.service';

import { Router } from '@angular/router';

@Component({
    selector: 'vault',
    templateUrl: 'app/app.component.html',
    providers: [LoginObservableService, LogoutObservableService, UserAuthService]//a service would go in that array
})

export class AppComponent implements OnInit, OnDestroy{
    isShowAdminMenuOption:boolean = false;
    subscription: Subscription;
    user: IUser;
    currentLoggedUser: string;

    constructor(private _router: Router, private loginObservableService: LoginObservableService, private logoutObservableService: LogoutObservableService, private userAuthService: UserAuthService){
        console.log('inside constructor of AppComponent...');
        //receive notification from child
        this.subscription = loginObservableService.userLoginAnnounced$.subscribe(
            user =>{
                console.log('user object from child to app component is: ' + JSON.stringify(user));
                this.currentLoggedUser = user.username;      
                this.isShowAdminMenuOption = user.isLogin;
            });
    }
    
    logout(){
        console.log('logout clicked!');
        this.userAuthService.logout().subscribe(
           data => {
               console.log('data from logout: ' + data);
               if(data){
                   console.log('hidding the admin menu since user is logged out');
                   this.isShowAdminMenuOption = false;
                   //call home component to hide the login ui
                   let logout: string = 'logout';
                   this.logoutObservableService.announceUserIsLogout(logout);
                   //success login, navigate to /home route
                   this._router.navigate(['/home']);
               }
           } 
        );
    }

    ngOnInit(): void {
        console.log("oninit AppComponent..." );
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
                        this.isShowAdminMenuOption = true;
                        this.currentLoggedUser = currentName;
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
