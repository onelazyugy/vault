import { Component, Output, EventEmitter } from '@angular/core';

import { IUser } from './user';
import { LoginService } from './login.service';
import { UserAuthService } from '../services/user-auth.service';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html',

    providers: [UserAuthService]
})

export class LoginComponent {
    panelTitle: string = 'Login';
    user: IUser = {'username': '','password': '', isLogin: false};
    messageLabel: string = '';

    constructor(private loginService: LoginService, private userAuthService: UserAuthService){}

    login(){
        console.log('login button clicked....');
        if(this.user){            
            if(this.user.password != '' && this.user.username != ''){
                //call backend to verify the credentials
                //let uxer: IUser;
                let msg: string;
                let error: string;
                this.userAuthService.login(this.user).subscribe(message => msg = message, error=>error);
                console.log("msg: " + msg);
                //


                this.user.isLogin = true;
                this.messageLabel = 'success';
                //push to message parents but empty the password first
                this.user.password = null;
                this.loginService.announceUserIsLogin(this.user);
            } else {
                this.messageLabel = 'fail';
            }
        } else {
            this.messageLabel = 'fail';
        }
    }
}