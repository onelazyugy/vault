import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'app/admin/admin.component.html',
    providers: []
})

export class AdminComponent implements OnInit{
    adminMenuTitle: string = 'Admin Menu';
    adminContentTitle: string = '';
    defaultContentTitle: string = 'Add';
    add: string = 'Add';
    edit: string = 'Edit';

    constructor(){
        console.log('inside of AdminComponent constructor..');
    }

    ngOnInit(): void {
        console.log('onInit of AdminCompnent');
        this.adminContentTitle = this.defaultContentTitle;
    }

    public click(option:string): void {
        this.adminContentTitle = option;
    }
}