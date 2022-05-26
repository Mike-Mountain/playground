import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryBuilderContainerComponent } from './components/query-builder-container/query-builder-container.component';
import { RouterModule } from '@angular/router';
import { OperatorsComponent } from './components/operators/operators.component';
import { ModelBuilderComponent } from './components/model-builder/model-builder.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QueryBuilderComponent } from './components/query-builder/query-builder.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';

@NgModule({
  imports: [
    CommonModule,
    MonacoEditorModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: QueryBuilderContainerComponent },
    ]),
    DragDropModule,
  ],
  declarations: [
    QueryBuilderContainerComponent,
    OperatorsComponent,
    ModelBuilderComponent,
    QueryBuilderComponent,
    CodeEditorComponent,
  ],
})
export class ToolsRxjsQueryBuilderModule {}
