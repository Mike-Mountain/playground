import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'rxjs-query-builder',
        loadChildren: () => import('@playground/rxjs-query-builder/entry/tools-rxjs-query-builder.module').then(m => m.ToolsRxjsQueryBuilderModule)
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {
}
