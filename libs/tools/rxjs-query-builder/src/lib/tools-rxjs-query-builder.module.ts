import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QueryBuilderContainerComponent} from './components/query-builder-container/query-builder-container.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: QueryBuilderContainerComponent}])
  ],
  declarations: [
    QueryBuilderContainerComponent
  ],
})
export class ToolsRxjsQueryBuilderModule {
}
