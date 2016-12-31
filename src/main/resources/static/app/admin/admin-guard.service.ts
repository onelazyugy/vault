import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { UserAuthService } from '../services/user-auth.service';
import { IUser } from '../login/user';

@Injectable()
export class AdminRouteGuard implements CanActivate{
    isEnableAdminRoute: boolean = false;

    constructor(private _router: Router, private userAuthService: UserAuthService){
        console.log('inside AdminRouteGuard contructor...');
    }

    canActivate(route: ActivatedRouteSnapshot) {
        //http://stackoverflow.com/questions/37948068/angular-2-routing-canactivate-work-with-observable
        console.log('canActive method from AdminRouteGuard: ' + route.url[0].path);
        return this.userAuthService.isUserLogin().map(
        res => {
            console.log('response from userStillAlive2 is: ' + res);
            if(res){
                console.log('userStillAlive2 is returning: ' + res);
                return true;
            } else {
                console.log('userStillAlive2 is returning: ' + res);
                this._router.navigate(['/home']);
            }
        }).catch(() => {
            console.log('catch block.....');
            this._router.navigate(['/home']);
            return Observable.of(false);
        });
    }
}