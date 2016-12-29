import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class AdminRouteGuard implements CanActivate{
    isLogin:boolean = false;
    constructor(private _router: Router){}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        console.log('canActive method from AdminRouteGuard: ' + route.url[0].path)
        return true;
    }
}