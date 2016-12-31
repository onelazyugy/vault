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
var login_observable_service_1 = require("./login/login-observable.service");
var logout_observable_service_1 = require("../app/login/logout-observable.service");
var user_auth_service_1 = require("../app/services/user-auth.service");
var AppComponent = (function () {
    function AppComponent(loginObservableService, logoutObservableService, userAuthService) {
        var _this = this;
        this.loginObservableService = loginObservableService;
        this.logoutObservableService = logoutObservableService;
        this.userAuthService = userAuthService;
        this.isShowAdminMenuOption = false;
        console.log('inside constructor of AppComponent...');
        this.subscription = loginObservableService.userLoginAnnounced$.subscribe(function (user) {
            console.log('user object from child to app component is: ' + JSON.stringify(user));
            _this.currentLoggedUser = user.username;
            _this.isShowAdminMenuOption = user.isLogin;
        });
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        console.log('logout clicked!');
        this.userAuthService.logout().subscribe(function (data) {
            console.log('data from logout: ' + data);
            if (data) {
                console.log('hidding the admin menu since user is logged out');
                _this.isShowAdminMenuOption = false;
                //call home component to hide the login ui
                var logout = 'logout';
                _this.logoutObservableService.announceUserIsLogout(logout);
            }
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("oninit AppComponent...");
        //call backend server to check if he/she is login or not when refresh page
        var ux;
        this.userAuthService.userStillAlive().subscribe(function (ux) {
            console.log('data from userStillAlive: ' + JSON.stringify(ux));
            if (ux) {
                var isAlive = ux.userLogin;
                var currentName = ux.username;
                console.log('isAlive: ' + isAlive + ' | currentName: ' + currentName);
                if (isAlive) {
                    _this.isShowAdminMenuOption = true;
                    _this.currentLoggedUser = currentName;
                }
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'vault',
        templateUrl: 'app/app.component.html',
        providers: [login_observable_service_1.LoginObservableService, logout_observable_service_1.LogoutObservableService, user_auth_service_1.UserAuthService] //a service would go in that array
    }),
    __metadata("design:paramtypes", [login_observable_service_1.LoginObservableService, logout_observable_service_1.LogoutObservableService, user_auth_service_1.UserAuthService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map