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

    messageToParent: string = 'no message';

    constructor(private loginService: LoginService){

    }

    login(){
        console.log('login button clicked user is: ' + JSON.stringify(this.user));
        if(this.user){
            if(this.user.password != '' && this.user.username != ''){
                this.messageLabel = 'success';
                
                let messageToParent = 'I AM A CHILD MESSAGE TO MY PARENTS';
                this.loginService.announceUserIsLogin(messageToParent);

            } else {
                this.messageLabel = 'fail';
            }
        } else {
            this.messageLabel = 'fail';
        }
    }
}