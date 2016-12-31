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
var login_observable_service_1 = require("../login/login-observable.service");
var logout_observable_service_1 = require("../login/logout-observable.service");
var HomeComponent = (function () {
    function HomeComponent(loginObservableService, logoutObservableService) {
        var _this = this;
        this.loginObservableService = loginObservableService;
        this.logoutObservableService = logoutObservableService;
        this.isShowSearchBar = false;
        console.log('inside constructor of HomeComponent..');
        //user login notification
        this.subscription = loginObservableService.userLoginAnnounced$.subscribe(function (user) {
            console.log('user object from child to home component is: ' + JSON.stringify(user));
            _this.isShowSearchBar = user.isLogin;
        });
        //user logout notification
        this.subscription = logoutObservableService.userLogoutAnnounced$.subscribe(function (notifyLogout) {
            console.log('message from app component to home compoent is: ' + JSON.stringify(notifyLogout));
            if (notifyLogout === 'logout') {
                console.log("user is logged out, hidding the search bar");
                _this.isShowSearchBar = false;
            }
            if (notifyLogout === 'alive') {
                console.log("user is alive, showing the search bar");
                _this.isShowSearchBar = true;
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        //if no session or not login, show the login UI
        console.log("oninit HomeComponent...");
        //call backend server to check if he/she is login or not when refresh page
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/home/home.component.html',
        providers: [] //a service would go in that array
    }),
    __metadata("design:paramtypes", [login_observable_service_1.LoginObservableService, logout_observable_service_1.LogoutObservableService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map