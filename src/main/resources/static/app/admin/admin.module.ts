import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminAddContent } from './admin-add-content.component';
import { AdminEditContent } from './admin-edit-content.component';
import { AdminComponent } from './admin.component';
import { AdminRouteGuard } from './admin-guard.service';

@NgModule({
    declarations: [ 
       AdminAddContent,
       AdminEditContent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'admin', canActivate: [AdminRouteGuard], component: AdminComponent}
        ])
    ],
    exports: [
        AdminAddContent,
        AdminEditContent
    ],
    providers: [
        AdminRouteGuard
    ]     
})

export class AdminModule {}