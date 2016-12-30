import { Component, OnInit, OnDestroy} from '@angular/core';

import { LoginService } from './login/login.service';
import { Subscription }   from 'rxjs/Subscription';
import { IUser } from '../app/login/user';
import { UserAuthService } from '../app/services/user-auth.service';

@Component({
    selector: 'vault',
    templateUrl: 'app/app.component.html',
    providers: [LoginService, UserAuthService]//a service would go in that array
})

export class AppComponent implements OnInit, OnDestroy{
    isShowAdminMenuOption:boolean = false;
    subscription: Subscription;
    user: IUser;
    currentLoggedUser: string;

    constructor(private loginService: LoginService, private userAuthService: UserAuthService){
        console.log('inside constructor of AppComponent...');
        this.subscription = loginService.userLoginAnnounced$.subscribe(
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
                   //call home component to show the login ui
                   
               }
           } 
        );
    }

    ngOnInit(): void {
       //if no session or not login, don't show Admin URL 
       console.log("oninit AppComponent..." );
       //call backend server to check if he/she is login or not when refresh page
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}
