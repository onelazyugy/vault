//http://stackoverflow.com/questions/36364365/angular2-central-session-service
import {Injectable} from '@angular/core';

@Injectable()
export class SessionService {
    private _status:boolean;

    constructor () {
        console.log('inside constructor of SessionService');
    }

    setLoginStatus(status:boolean){
        console.log('inside init method of SessionService')
        this._status = status;
        console.log('this._status is set to: ' + this._status);
        if(this._status){
            console.log('inside if');
            this._status = true;
        }else{
            console.log('inside else');
            this._status = false;
        }
    }

    isLoggedIn() {
        return this._status;
    }

    logOut() {
        this._status = !this._status;
    }
}