import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneService } from './phone.service';
import { FileSelectDirective } from "ng2-file-upload";
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { EnterDetailsGuardService } from './phone-details/enter-details-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    FileSelectDirective,
    AddPhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhoneService, EnterDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
