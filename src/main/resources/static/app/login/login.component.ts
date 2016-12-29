import { Component } from '@angular/core';

import { SessionService } from '../shared/shared-session.service';
import { IUser } from './user';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html'
    
})

export class LoginComponent {
    panelTitle: string = 'Login';
    user: IUser = {'username': '','password': ''};

    login(){
        console.log('login button clicked user is: ' + JSON.stringify(this.user));
    }
}