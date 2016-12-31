import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IUser } from '../login/user';

@Injectable()
export class UserAuthService {
    private _loginUrl = 'http://localhost:8085/rs/login';
    private _isUserStillAliveUrl = 'http://localhost:8085/rs/userStillAlive';
    private _logoutUrl = 'http://localhost:8085/rs/logout';
    private _isUserLoggedIn = 'http://localhost:8085/rs/isUserLoggedIn';

    constructor(private _http: Http){}

    login(user: IUser): Observable<string> {
        let bodyRequest = JSON.stringify(user);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._http.post(this._loginUrl, bodyRequest, options)
                .map((res: Response) => <string> res.json())
                .do(data => console.log('/login api result ==>: ' + JSON.stringify(data)))
                .catch(this.handleError);   
    }

    userStillAlive(){
        return this._http.get(this._isUserStillAliveUrl)
                .map((res: Response) => <IUser> res.json())
                .do(data => console.log('/isUserStillAlive api result ==>: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }
    
    isUserLogin(): Observable<boolean> {
        return this._http.get(this._isUserLoggedIn)
                    .map((res: Response) => <boolean> res.json())
                    .do(data => console.log('/isUserLoggedIn api result ==>: ' + JSON.stringify(data)))
                    .catch(this.handleError);;
    }

    logout(){
        return this._http.get(this._logoutUrl)
                .map((res: Response) => <string> res.json())
                .do(data => console.log('/logout api result ==>: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }
    
    private handleError(error: Response){
        console.error('handleError ==>: ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }
}