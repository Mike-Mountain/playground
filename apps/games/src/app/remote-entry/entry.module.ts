import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {GamesLandingComponent} from "@playground/games/games-shared";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'code-master',
        loadChildren: () => import('@playground/code-master/entry/games-code-master.module').then(m => m.GamesCodeMasterModule)
      },
      {
        path: 'hangman',
        loadChildren: () => import('@playground/hangman/entry/games-hangman.module').then(m => m.GamesHangmanModule)
      },
      {path: '', component: GamesLandingComponent}
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {
}
