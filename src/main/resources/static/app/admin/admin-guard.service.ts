import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { UserAuthService } from '../services/user-auth.service';
import { IUser } from '../login/user';

//test
import { Response } from '@angular/http';
import 'rxjs/add/observable/of';
//

@Injectable()
export class AdminRouteGuard implements CanActivate{
    isEnableAdminRoute: boolean = false;

    //test
    user: IUser;
    isLoggedIn: Observable<boolean>;
    //test

    constructor(private _router: Router, private userAuthService: UserAuthService){
        console.log('inside AdminRouteGuard contructor...');
        console.log('UserAuthService got injected......');
    }

    canActivate(route: ActivatedRouteSnapshot) {
        //http://stackoverflow.com/questions/37948068/angular-2-routing-canactivate-work-with-observable
        console.log('canActive method from AdminRouteGuard: ' + route.url[0].path);
        return this.userAuthService.userStillAlive2().map(
            e => {
                console.log('begin of if e is: ' + e);
                if(e){
                    console.log('if(e).....');
                    return true;
                }
            }).catch(()=>{
                console.log('catch block.....');
                this._router.navigate(['/home']);
                return Observable.of(false);
            });
        //return Observable.of(true);
    }

    
/*
    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        //https://continuousdeveloper.com/2016/07/06/protecting-routes-in-angular-2/
        console.log('canActive method from AdminRouteGuard: ' + route.url[0].path);
        //
        if(this.userAuthService.userStillAlive2()){
            console.log('TRUE..');
            return Observable.of(true);
            //return true;
        }
        console.log('FALSE..')
        return Observable.of(false);
        //
    }
*/
/*
    canActivate(route: ActivatedRouteSnapshot): boolean {
        console.log('canActive method from AdminRouteGuard: ' + route.url[0].path)
        let user: IUser;
        this.userAuthService.userStillAlive().subscribe(
            data => {
                console.log('success: ' + JSON.stringify(data));
                this.isEnableAdminRoute = data.isLogin;
            },
            error => {
                console.log('Error: ', error)
            },
            () =>{
                console.log('done');
            });
        return this.isEnableAdminRoute;
    }
*/
 
    /*
    canActivate(route: ActivatedRouteSnapshot): boolean {
        console.log('canActive method from AdminRouteGuard: ' + route.url[0].path)
        let ux: IUser;
        let isEnableAdminRoute: boolean = false;
        this.userAuthService.userStillAlive().subscribe(
            ux => {
                console.log('data from userStillAlive from AdminRouteGuard service: ' + JSON.stringify(ux));
                if(ux){
                    console.log('isAlive: ' + ux.userLogin + ' | currentName: ' + ux.username);
                    if(ux.userLogin){
                        console.log('User is ALIVE, letting user see the Admin route...');
                        isEnableAdminRoute = ux.userLogin;
                    } else {
                        console.log('User is NOT ALIVE...back to /home route..');
                        this._router.navigate(['/home']);
                    }
                }
            });
        return true;
    }
    */
}