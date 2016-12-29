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
var shared_session_service_1 = require("./shared/shared-session.service");
var AppComponent = (function () {
    function AppComponent(_sessionService) {
        this._sessionService = _sessionService;
        this.isLogin = true;
        this._sessionService.setLoginStatus(false);
        console.log('inside constructor of AppComponent...');
        this.isLogin = this._sessionService.isLoggedIn();
    }
    AppComponent.prototype.ngOnInit = function () {
        //if no session or not login, don't show Admin URL 
        var isUserLogin = this._sessionService.isLoggedIn();
        console.log("oninit AppComponent... isUserLogin: " + isUserLogin);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'vault',
        templateUrl: 'app/app.component.html',
        providers: [shared_session_service_1.SessionService]
    }),
    __metadata("design:paramtypes", [shared_session_service_1.SessionService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map