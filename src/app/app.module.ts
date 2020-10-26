import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { BicitalleresComponent } from './pages/bicitalleres/bicitalleres.component';
import { BicitallerComponent } from './pages/bicitaller/bicitaller.component';

@NgModule({
  declarations: [
    AppComponent,
    BicitalleresComponent,
    BicitallerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
