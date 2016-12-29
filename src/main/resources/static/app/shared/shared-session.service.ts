//http://stackoverflow.com/questions/36364365/angular2-central-session-service
import {Injectable} from '@angular/core';

@Injectable()
export class SessionService {
    private _status:boolean = false;

    constructor () {
        console.log('inside constructor of SessionService');
    }

    setLoginStatus(status:boolean){
        console.log('inside setLoginStatus method of SessionService')
        this._status = status;
        if(this._status){
            this._status = true;
        } else{
            this._status = false;
        }
         console.log('this._status is set to: ' + this._status);
    }

    isLoggedIn() {
        return this._status;
    }

    logOut() {
        this._status = !this._status;
    }
}