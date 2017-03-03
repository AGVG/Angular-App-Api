import { Routes } from '@angular/router';

import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { EnterDetailsGuardService } from './phone-details/enter-details-guard.service';

export const routes: Routes = [
    { path: '', component: PhoneListComponent },
    { path: 'add', component: AddPhoneComponent },
    {
        path: 'phone/:id',
        component: PhoneDetailsComponent,
        canActivate: [ EnterDetailsGuardService ]
      },
    { path: '**', redirectTo: '' }
];
