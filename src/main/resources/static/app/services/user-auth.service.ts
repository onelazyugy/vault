//https://scotch.io/tutorials/angular-2-http-requests-with-observables
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IUser } from '../login/user';

@Injectable()
export class UserAuthService {
    private _loginUrl = "http://localhost:8085/rs/login";

    constructor(private _http: Http){}

    login(user: IUser): Observable<string> {
        let bodyRequest = JSON.stringify(user);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});

        return this._http.post(this._loginUrl, bodyRequest, options)
                .map((response: Response) => <string> response.json())
                //peak at the response data
                .do(data => console.log('Login Result: ' + JSON.stringify(data)))
                .catch(this.handleError);   
        
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}