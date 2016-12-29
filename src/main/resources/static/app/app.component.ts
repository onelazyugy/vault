import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'vault',
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit{
    isLogin:boolean = true;

    ngOnInit(): void {
       //if no session or not login, don't show Admin URL 
       console.log("oninit AppComponent...");
    }
}
