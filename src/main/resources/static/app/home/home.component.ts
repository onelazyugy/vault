import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'app/home/home.component.html'
})

export class HomeComponent implements OnInit{
    isLogin:boolean = false;

    ngOnInit(): void {
       //if no session or not login, show the login UI
       console.log("oninit HomeComponent xxxx...");
    }
}