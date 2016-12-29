//http://stackoverflow.com/questions/36364365/angular2-central-session-service
import {Injectable} from '@angular/core';

@Injectable()
export class SessionService {
    private _status:boolean;

    constructor () {
        console.log('inside constructor of SessionService');
        if(1 == 1) {
            this._status = true;
        }
        console.log("New SessionService");
    }

    isLoggedIn() {
        return this._status;
    }

    logOut() {
        this._status = !this._status;
    }
}