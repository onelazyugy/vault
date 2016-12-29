import { Component, OnInit} from '@angular/core';
import { SessionService } from './shared/shared-session.service';

@Component({
    selector: 'vault',
    templateUrl: 'app/app.component.html',
    providers: [SessionService]
})

export class AppComponent implements OnInit{
    isLogin:boolean = true;
    constructor(private _sessionService: SessionService){
        this._sessionService.setLoginStatus(false);
        console.log('inside constructor of AppComponent...');
        this.isLogin = this._sessionService.isLoggedIn();
    }
    
    ngOnInit(): void {
       //if no session or not login, don't show Admin URL 
       let isUserLogin = this._sessionService.isLoggedIn();
       console.log("oninit AppComponent... isUserLogin: " + isUserLogin);
    }
}
