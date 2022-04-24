import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('@playground/games-shared/entry/games-games-shared.module').then(m => m.GamesGamesSharedModule)
      },
      {
        path: 'code-master',
        loadChildren: () => import('@playground/code-master/entry/games-code-master.module').then(m => m.GamesCodeMasterModule)
      }
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {
}
