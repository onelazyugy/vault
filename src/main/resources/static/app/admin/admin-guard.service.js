"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var user_auth_service_1 = require("../services/user-auth.service");
require("rxjs/add/observable/of");
//
var AdminRouteGuard = (function () {
    //test
    function AdminRouteGuard(_router, userAuthService) {
        this._router = _router;
        this.userAuthService = userAuthService;
        this.isEnableAdminRoute = false;
        console.log('inside AdminRouteGuard contructor...');
        console.log('UserAuthService got injected......');
    }
    AdminRouteGuard.prototype.canActivate = function (route) {
        var _this = this;
        //http://stackoverflow.com/questions/37948068/angular-2-routing-canactivate-work-with-observable
        console.log('canActive method from AdminRouteGuard: ' + route.url[0].path);
        return this.userAuthService.userStillAlive2().map(function (e) {
            console.log('begin of if e is: ' + e);
            if (e) {
                console.log('if(e).....');
                return true;
            }
        }).catch(function () {
            console.log('catch block.....');
            _this._router.navigate(['/home']);
            return Observable_1.Observable.of(false);
        });
        //return Observable.of(true);
    };
    return AdminRouteGuard;
}());
AdminRouteGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, user_auth_service_1.UserAuthService])
], AdminRouteGuard);
exports.AdminRouteGuard = AdminRouteGuard;
//# sourceMappingURL=admin-guard.service.js.map