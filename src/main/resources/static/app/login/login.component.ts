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

    constructor(private loginObservableService: LoginObservableService, private userAuthService: UserAuthService){}

    login(){
        if(this.user){            
            if(this.user.password != '' && this.user.username != ''){
                //call backend to verify the credentials
                this.userAuthService.login(this.user).subscribe(
                        data => {
                            console.log('/login result ==>: ' + data);
                            if(data){
                                //notify parents but empty the password first
                                this.user.isLogin = true;
                                this.user.password = null;
                                this.loginObservableService.announceUserIsLogin(this.user);
                            } else {
                                this.user.isLogin = false;
                                this.messageLabel = 'incorrect credentials';
                            }                      
                        },
                        error => {
                            console.log('Error login: ' + error);
                            this.user.isLogin = false;
                            this.messageLabel = 'failed login';
                            return false;
                        },
                        () => {
                            console.log('Completed login request');
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