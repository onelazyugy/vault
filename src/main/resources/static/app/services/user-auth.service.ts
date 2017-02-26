import {Location} from '@angular/common';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IUser } from '../login/user';

@Injectable()
export class UserAuthService {
    private _location: Location;
    private _loginUrl = "";
    private _isUserStillAliveUrl = "";
    private _isUserLoggedIn = "";
    private _logoutUrl = "";

    constructor(private _http: Http){}

    login(user: IUser): Observable<string> {
        this._loginUrl = this.buildRequestURL() + "/rs/login";
        console.log("LOGIN URL: " + this._loginUrl);
        let bodyRequest = JSON.stringify(user);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._http.post(this._loginUrl, bodyRequest, options)
                .map((res: Response) => <string> res.json())
                .do(data => console.log('/login api result ==>: ' + JSON.stringify(data)))
                .catch(this.handleError);   
    }

    userStillAlive(){
        this._isUserStillAliveUrl = this.buildRequestURL() + "/rs/userStillAlive";
        console.log("ISUSERSTILLALIVE URL: " + this._isUserStillAliveUrl);
        return this._http.get(this._isUserStillAliveUrl)
                .map((res: Response) => <IUser> res.json())
                .do(data => console.log('/isUserStillAlive api result ==>: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }
    
    isUserLogin(): Observable<boolean> {
        this._isUserLoggedIn = this.buildRequestURL() + "/rs/isUserLoggedIn";
        console.log("ISUSERLOGGEDIN URL: " + this._isUserLoggedIn);
        return this._http.get(this._isUserLoggedIn)
                    .map((res: Response) => <boolean> res.json())
                    .do(data => console.log('/isUserLoggedIn api result ==>: ' + JSON.stringify(data)))
                    .catch(this.handleError);;
    }

    logout(){
        this._logoutUrl = this.buildRequestURL() + "/rs/logout";
        console.log("LOGOUT URL: " + this._logoutUrl);
        return this._http.get(this._logoutUrl)
                .map((res: Response) => <string> res.json())
                .do(data => console.log('/logout api result ==>: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }
    
    private handleError(error: Response){
        console.error('handleError ==>: ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private buildRequestURL() : string{
        let hostname = location.hostname;
        let port = location.port;
        let protocol = location.protocol;
        console.log("protocol: " + protocol + " hostname: " + hostname + " port: " + port);
        if(port != ""){
            console.log("PORT IS NOT EMPTY");
            return location.protocol + "//" + location.hostname + ":" + location.port;
        }else{
            console.log("PORT IS EMPTY");
            return location.protocol + "//" + location.hostname;
        }
    }

    //TODO remove me
    test(): Observable<IUser> {
        return this._http.get('http://localhost:8085/rs/test')
                    .map((res: Response) => <IUser> res.json())
                    .do(data => console.log('/test api result ==>: ' + JSON.stringify(data)))
                    .catch(this.handleError);;
    }
}