import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import { AddEntryModel } from './addentrymodel';

@Component({
    selector: 'admin-add',
    templateUrl: 'app/admin/admin-add-content.component.html'
})

export class AdminAddContent {
    categories: string[] = ["bank", "shop"];
    entryModel = new AddEntryModel('default', '', '', '', '', '');
    hasCategoryError: boolean = false;

    addEntry(addEntryForm: NgForm){
        console.log('addEntryForm model==> ' + JSON.stringify(addEntryForm.value));
    }

    validateCategory(value: string){
        if(value === 'default'){
            this.hasCategoryError = true;
            console.log("hasCategoryError: " + this.hasCategoryError);
        } else {
            this.hasCategoryError = false;
            console.log("hasCategoryError: " + this.hasCategoryError);
        }     
    }

    onTagInputChange(value: string, addEntryForm: NgForm){
        this.entryModel.tag = value;
    }

    onUserNameInputChange(value: string, addEntryForm: NgForm){
        this.entryModel.username = value;
    }

    onPasswordInputChange(value: string, addEntryForm: NgForm){
        this.entryModel.password = value;
    }

    onPasswordConfirmInputChange(value: string, addEntryForm: NgForm){
        this.entryModel.confirmPassword = value;
    }

    onComentChange(value: string, addEntryForm: NgForm){
        this.entryModel.comment = value;
    }
}