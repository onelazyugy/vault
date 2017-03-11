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
var core_1 = require('@angular/core');
var addentrymodel_1 = require('./addentrymodel');
var AdminAddContent = (function () {
    function AdminAddContent() {
        this.categories = ["bank", "shop"];
        this.entryModel = new addentrymodel_1.AddEntryModel('default', '', '', '', '', '');
        this.hasCategoryError = false;
    }
    AdminAddContent.prototype.addEntry = function (addEntryForm) {
        console.log('addEntryForm model==> ' + JSON.stringify(addEntryForm.value));
    };
    AdminAddContent.prototype.validateCategory = function (value) {
        if (value === 'default') {
            this.hasCategoryError = true;
            console.log("hasCategoryError: " + this.hasCategoryError);
        }
        else {
            this.hasCategoryError = false;
            console.log("hasCategoryError: " + this.hasCategoryError);
        }
    };
    AdminAddContent.prototype.onTagInputChange = function (value, addEntryForm) {
        this.entryModel.tag = value;
    };
    AdminAddContent.prototype.onUserNameInputChange = function (value, addEntryForm) {
        this.entryModel.username = value;
    };
    AdminAddContent.prototype.onPasswordInputChange = function (value, addEntryForm) {
        this.entryModel.password = value;
    };
    AdminAddContent.prototype.onPasswordConfirmInputChange = function (value, addEntryForm) {
        this.entryModel.confirmPassword = value;
    };
    AdminAddContent.prototype.onComentChange = function (value, addEntryForm) {
        this.entryModel.comment = value;
    };
    AdminAddContent = __decorate([
        core_1.Component({
            selector: 'admin-add',
            templateUrl: 'app/admin/admin-add-content.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AdminAddContent);
    return AdminAddContent;
}());
exports.AdminAddContent = AdminAddContent;
//# sourceMappingURL=admin-add-content.component.js.map