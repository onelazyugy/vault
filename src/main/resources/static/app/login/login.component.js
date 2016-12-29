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
var shared_session_service_1 = require("../shared/shared-session.service");
var LoginComponent = (function () {
    function LoginComponent(_sessionService) {
        this._sessionService = _sessionService;
        this.panelTitle = 'Login';
        this.user = { 'username': '', 'password': '' };
        this.messageLabel = '';
        this.nofityParent = new core_1.EventEmitter();
    }
    LoginComponent.prototype.login = function () {
        console.log('login button clicked user is: ' + JSON.stringify(this.user));
        if (this.user) {
            if (this.user.password != '' && this.user.username != '') {
                this._sessionService.setLoginStatus(true);
                this.messageLabel = 'success';
                this.nofityParent.emit(true);
            }
            else {
                this.messageLabel = 'fail';
            }
        }
        else {
            this.messageLabel = 'fail';
        }
        console.log('after login, status is: ' + this._sessionService.isLoggedIn());
    };
    return LoginComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], LoginComponent.prototype, "nofityParent", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'app/login/login.component.html'
    }),
    __metadata("design:paramtypes", [shared_session_service_1.SessionService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map