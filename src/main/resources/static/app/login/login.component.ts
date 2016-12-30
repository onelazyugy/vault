import { Component, Output, EventEmitter } from '@angular/core';

import { IUser } from './user';
import { LoginObservableService } from './login-observable.service';
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

    constructor(private loginService: LoginObservableService, private userAuthService: UserAuthService){}

    login(){
        console.log('login button clicked....');
        if(this.user){            
            if(this.user.password != '' && this.user.username != ''){
                //call backend to verify the credentials
                this.userAuthService.login(this.user).subscribe(
                        data => {
                            console.log('data from login: ' + data);
                            if(data){
                                this.messageLabel = 'success';
                                //push to message parents but empty the password first
                                this.user.isLogin = true;
                                this.user.password = null;
                                this.loginService.announceUserIsLogin(this.user);
                            }                            
                        },
                        error => {
                            console.log('Error login: ' + error);
                            this.user.isLogin = false;
                            this.messageLabel = 'failed login';
                            return false;
                        }
                    );                
            } else {
                this.messageLabel = 'field cannot be empty';
            }
        } else {
            this.messageLabel = 'fail';
        }
    }
}