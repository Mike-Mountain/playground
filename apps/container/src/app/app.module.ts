import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {ContainerLibModule} from "@playground/container-lib";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], {initialNavigation: 'enabledBlocking'}),
    ContainerLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
