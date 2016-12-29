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
//http://stackoverflow.com/questions/36364365/angular2-central-session-service
var core_1 = require("@angular/core");
var SessionService = (function () {
    function SessionService() {
        console.log('inside constructor of SessionService');
        if (1 == 1) {
            this._status = true;
        }
        console.log("New SessionService");
    }
    SessionService.prototype.isLoggedIn = function () {
        return this._status;
    };
    SessionService.prototype.logOut = function () {
        this._status = !this._status;
    };
    return SessionService;
}());
SessionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=shared-session.service.js.map