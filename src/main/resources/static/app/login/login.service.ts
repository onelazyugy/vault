import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class LoginService {
    //Observable string sources
    private isUserLogin = new Subject<string>();

    //Observable string streams
    userLoginAnnounced$ = this.isUserLogin.asObservable();

    //Service message commands
    announceUserIsLogin(message: string){
        console.log('announceUserIsLogin() method and message is: ' + message);
        this.isUserLogin.next(message);
    }
}