import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';//for ngModel

import { SearchModule } from '../search/search.module';
import { SearchComponent } from '../search/search.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
    declarations: [
        SearchComponent,
        LoginComponent
    ],
    imports:[
        FormsModule,
        RouterModule.forChild([
            {path: 'home', component: HomeComponent}
        ])
    ],
    exports: [
        SearchComponent,
        LoginComponent
    ]
})

export class HomeModule{}