import { Component, OnInit, Input, OnDestroy} from '@angular/core';

import { LoginService } from './login/login.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'vault',
    templateUrl: 'app/app.component.html',
    providers: [LoginService] //a service would go in that array
})

export class AppComponent implements OnInit, OnDestroy{
    isLogin:boolean = false;

    subscription: Subscription;
    messageFromChild = '';

    constructor(private loginService: LoginService){
        console.log('inside constructor of AppComponent...');
        this.subscription = loginService.userLoginAnnounced$.subscribe(
            messageFromChild =>{
                this.messageFromChild = messageFromChild;      
                console.log("MESSAGE FROM CHILD: " + this.messageFromChild);  
            });
    }
    
    ngOnInit(): void {
       //if no session or not login, don't show Admin URL 
       console.log("oninit AppComponent..." );
    }

    ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
