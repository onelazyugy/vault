import { Component, Output, EventEmitter } from '@angular/core';

import { SessionService } from '../shared/shared-session.service';
import { IUser } from './user';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html'
    
})

export class LoginComponent {
    panelTitle: string = 'Login';
    user: IUser = {'username': '','password': ''};
    messageLabel: string = '';

    @Output() nofityParent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private _sessionService: SessionService){
       
    }

    login(){
        console.log('login button clicked user is: ' + JSON.stringify(this.user));
        if(this.user){
            if(this.user.password != '' && this.user.username != ''){
                this._sessionService.setLoginStatus(true);    
                this.messageLabel = 'success';

                this.nofityParent.emit(true);
            } else {
                this.messageLabel = 'fail';
            }
        } else {
            this.messageLabel = 'fail';
        }
        console.log('after login, status is: ' + this._sessionService.isLoggedIn());
    }
}