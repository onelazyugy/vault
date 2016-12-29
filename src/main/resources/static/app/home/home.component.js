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
var HomeComponent = (function () {
    function HomeComponent(_sessionService) {
        this._sessionService = _sessionService;
        this.isLogin = false;
        console.log('inside constructor of HomeComponent..');
        console.log('is user login from HomeComponent: ' + this._sessionService.isLoggedIn());
    }
    HomeComponent.prototype.ngOnInit = function () {
        //if no session or not login, show the login UI
        console.log("oninit HomeComponent...");
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/home/home.component.html'
    }),
    __metadata("design:paramtypes", [shared_session_service_1.SessionService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map