import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AddEntryModel } from './addentrymodel';
import { AdminService } from '../services/admin-services';

@Component({
    selector: 'admin-add',
    templateUrl: 'app/admin/admin-add-content.component.html',
    providers: [AdminService]
})

export class AdminAddContent {
    categories: string[] = ['bank', 'shop'];
    entryModel = new AddEntryModel('default', '', '', '', '', '');
    hasCategoryError: boolean = false;
    responseMsg: string = '';
    successordanger: string = '';
    success: boolean = false;

    constructor(private AdminService: AdminService) { }

    addEntry(addEntryForm: NgForm) {
        let password = addEntryForm.value.password;
        let confirmPassword = addEntryForm.value.passwordConfirm;

        console.log('password: ' + password + " confirm: " + confirmPassword);

        if (password !== confirmPassword) {
            this.success = true;
            this.successordanger = 'danger';
            this.responseMsg = 'passwords do not match. Try again!'
            return false;
        }
        console.log('addEntryForm model==> ' + JSON.stringify(addEntryForm.value));
        this.AdminService.addEntry(this.entryModel).subscribe(
            data => {
                console.log('/addEntry result ==>: ' + data);
                if (data) {
                    this.success = true;
                    this.successordanger = 'success';
                    this.responseMsg = 'success';
                    addEntryForm.reset();
                } else {
                    this.successordanger = 'danger';
                    this.responseMsg = 'unable to add entry';
                }
            },
            error => {
                console.error('Error addEntry: ' + error);
                this.responseMsg = 'error saving entry.';
                this.successordanger = 'danger';
                return false;
            },
            () => {
                console.log('Completed addEntry request');
            }
        );
    }

    validateCategory(value: string) {
        if (value === 'default') {
            this.hasCategoryError = true;
        } else {
            this.hasCategoryError = false;
        }
    }

    onTagInputChange(value: string, addEntryForm: NgForm) {
        this.entryModel.tag = value;
    }

    onUserNameInputChange(value: string, addEntryForm: NgForm) {
        this.entryModel.username = value;
    }

    onPasswordInputChange(value: string, addEntryForm: NgForm) {
        this.entryModel.password = value;
    }

    onPasswordConfirmInputChange(value: string, addEntryForm: NgForm) {
        this.entryModel.confirmPassword = value;
    }

    onComentChange(value: string, addEntryForm: NgForm) {
        this.entryModel.comment = value;
    }
}