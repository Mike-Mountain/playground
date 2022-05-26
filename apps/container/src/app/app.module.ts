import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ContainerLibModule } from '@playground/container-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MonacoEditorModule} from "@materia-ui/ngx-monaco-editor";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MonacoEditorModule,
    RouterModule.forRoot(
      [
        {
          path: 'games',
          loadChildren: () =>
            import('games/Module').then((m) => m.RemoteEntryModule),
        },
        { path: '', pathMatch: 'full', redirectTo: '/games' },
        {
          path: 'tools',
          loadChildren: () =>
            import('tools/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    ContainerLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
