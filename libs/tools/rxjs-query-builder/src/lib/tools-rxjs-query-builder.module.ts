import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryBuilderContainerComponent } from './components/query-builder-container/query-builder-container.component';
import { RouterModule } from '@angular/router';
import { OperatorsComponent } from './components/operators/operators.component';
import { ModelBuilderComponent } from './components/model-builder/model-builder.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: QueryBuilderContainerComponent },
    ]),
  ],
  declarations: [
    QueryBuilderContainerComponent,
    OperatorsComponent,
    ModelBuilderComponent,
  ],
})
export class ToolsRxjsQueryBuilderModule {}
