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
    user: IUser = {'username': '','password': ''};
    messageLabel: string = '';

    constructor(private loginService: LoginService){}

    login(){
        console.log('login button clicked user is: ' + JSON.stringify(this.user));
        if(this.user){
            if(this.user.password != '' && this.user.username != ''){
                this.messageLabel = 'success';
                //push to message parent
                let messageToParent = `${this.user.username}`;
                this.loginService.announceUserIsLogin(messageToParent);
            } else {
                this.messageLabel = 'fail';
            }
        } else {
            this.messageLabel = 'fail';
        }
    }
}