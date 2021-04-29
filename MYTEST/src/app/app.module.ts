import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndividualDetailsComponent } from './individual-details/individual-details.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AddIndvComponent } from './add-indv/add-indv.component';
import { UpdIndvComponent } from './upd-indv/upd-indv.component';

@NgModule({
  declarations: [
    AppComponent,
    IndividualDetailsComponent,
    AddIndvComponent,
    UpdIndvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
