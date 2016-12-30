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
var login_service_1 = require("./login.service");
var user_auth_service_1 = require("../services/user-auth.service");
var LoginComponent = (function () {
    function LoginComponent(loginService, userAuthService) {
        this.loginService = loginService;
        this.userAuthService = userAuthService;
        this.panelTitle = 'Login';
        this.user = { 'username': '', 'password': '', isLogin: false };
        this.messageLabel = '';
    }
    LoginComponent.prototype.login = function () {
        console.log('login button clicked....');
        if (this.user) {
            if (this.user.password != '' && this.user.username != '') {
                //call backend to verify the credentials
                //let uxer: IUser;
                var msg_1;
                var error = void 0;
                this.userAuthService.login(this.user).subscribe(function (message) { return msg_1 = message; }, function (error) { return error; });
                console.log("msg: " + msg_1);
                //
                this.user.isLogin = true;
                this.messageLabel = 'success';
                //push to message parents but empty the password first
                this.user.password = null;
                this.loginService.announceUserIsLogin(this.user);
            }
            else {
                this.messageLabel = 'fail';
            }
        }
        else {
            this.messageLabel = 'fail';
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'app/login/login.component.html',
        providers: [user_auth_service_1.UserAuthService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, user_auth_service_1.UserAuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map