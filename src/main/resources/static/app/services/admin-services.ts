import {Location} from '@angular/common';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { AddEntryModel } from '../admin/addentrymodel';

@Injectable()
export class AdminService {
    private _location: Location;
    private _addEntryURL = '';

    constructor(private _http: Http){}

    addEntry(addEntry: AddEntryModel): Observable<string> {
        this._addEntryURL = this.buildRequestURL() + "/rs/addEntry";
        console.log("ADD ENTRY URL: " + this._addEntryURL);
        let bodyRequest = JSON.stringify(addEntry);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._http.post(this._addEntryURL, bodyRequest, options)
                .map((res: Response) => <string> res.json())
                .do(data => console.log('/addEntry api result ==>: ' + JSON.stringify(data)))
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
}