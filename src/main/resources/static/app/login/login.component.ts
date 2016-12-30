import { Component, Output, EventEmitter } from '@angular/core';

import { IUser } from './user';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html',

    providers: []
})

export class LoginComponent {
    panelTitle: string = 'Login';
    user: IUser = {'username': '','password': '', isLogin: false};
    messageLabel: string = '';

    constructor(private loginService: LoginService){}

    login(){
        console.log('login button clicked....');
        if(this.user){
            if(this.user.password != '' && this.user.username != ''){
                this.user.isLogin = true;
                this.messageLabel = 'success';
                //push to message parent
                let messageToParent = `${this.user.username}`;
                this.loginService.announceUserIsLogin(this.user);
            } else {
                this.messageLabel = 'fail';
            }
        } else {
            this.messageLabel = 'fail';
        }
    }
}