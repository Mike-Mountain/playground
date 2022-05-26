import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {
  MonacoEditorConstructionOptions,
} from "@materia-ui/ngx-monaco-editor/lib/interfaces";
import {MonacoEditorLoaderService} from "@materia-ui/ngx-monaco-editor";
import {filter, take} from "rxjs";
import {editor} from "monaco-editor";
import IStandaloneThemeData = editor.IStandaloneThemeData;
import {PlaygroundMonacoTheme} from "@playground/shared/shared-lib";
import {DataBlock} from "../../models/data-block.model";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'query-model-builder',
  templateUrl: './model-builder.component.html',
  styleUrls: ['./model-builder.component.scss'],
})
export class ModelBuilderComponent implements OnInit, OnChanges {

  @Output() saveCodeBlock = new EventEmitter<{ data: DataBlock, addToQuery: boolean }>();
  @Input() codeBlock: DataBlock | undefined;

  public editorOptions: MonacoEditorConstructionOptions = {};
  private dataTitleIdx = 1;
  private themeData: IStandaloneThemeData = PlaygroundMonacoTheme;

  constructor(private monacoLoaderService: MonacoEditorLoaderService) {
    monacoLoaderService.isMonacoLoaded$.pipe(
      filter(isLoaded => isLoaded),
      take(1)
    ).subscribe(() => {
      monaco.editor.defineTheme('playgroundCustomTheme', this.themeData);
      monaco.editor.setTheme('playgroundCustomTheme');
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.codeBlock) {
      this.codeBlock = {
        title: `Data${this.dataTitleIdx}`,
        data: '{\n "name": "Mike", \n "test": "test" \n}'
      }
    }
  }

  ngOnInit(): void {
    this.editorOptions = {
      theme: 'playgroundCustomTheme',
      language: 'json',
      padding: {top: 10, bottom: 10},
    }
  }

  saveDataBlock(addToQuery?: boolean) {
    if (this.codeBlock) {
      this.saveCodeBlock.emit({data: this.codeBlock, addToQuery: (addToQuery || false)});
      this.dataTitleIdx++;
      this.codeBlock = {
        title: `Data${this.dataTitleIdx}`,
        data: '{\n  \n}'
      }
    }
  }

  drop(codeBlockDropped: CdkDragDrop<any, any>) {
    this.codeBlock = codeBlockDropped.item.data;
  }
}
