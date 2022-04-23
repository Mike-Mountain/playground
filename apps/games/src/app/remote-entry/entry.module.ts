import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
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
