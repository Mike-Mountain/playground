import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DataBlock} from "@playground/rxjs-query-builder/entry/models/data-block.model";
import {MonacoEditorConstructionOptions} from "@materia-ui/ngx-monaco-editor/lib/interfaces";
import {PlaygroundMonacoTheme} from "@playground/shared/shared-lib";
import {MonacoEditorLoaderService} from "@materia-ui/ngx-monaco-editor";
import {filter, take} from "rxjs";
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {editor} from "monaco-editor";
import IStandaloneThemeData = editor.IStandaloneThemeData;

@Component({
  selector: 'query-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit, OnChanges {
  @Input() codeBlock: DataBlock | undefined;
  @Input() language: 'javascript' | 'json' | undefined;

  @Output() saveBlock = new EventEmitter<{ data: DataBlock, addToQuery: boolean }>();

  public editorOptions: MonacoEditorConstructionOptions = {};
  public title = '';
  private titleIdx = 1;
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
    this.title = this.language === 'json' ? 'Data' : 'Function';
    if (!this.codeBlock) {
      this.codeBlock = {
        title: `${this.title}${this.titleIdx}`,
        data: this.language === 'json' ? '{\n "name": "Mike", \n "test": "test" \n}' : `function function${this.titleIdx}() {\n  \n}`
      }
    }
  }

  ngOnInit(): void {
    this.editorOptions = {
      theme: 'playgroundCustomTheme',
      language: this.language,
      padding: {top: 10, bottom: 10},
    }
  }

  saveCodeBlock(addToQuery?: boolean) {
    if (this.codeBlock) {
      this.saveBlock.emit({data: this.codeBlock, addToQuery: (addToQuery || false)});
      this.titleIdx++;
      this.codeBlock = {
        title: `${this.title}${this.titleIdx}`,
        data: this.language === 'json' ? '{\n "name": "Mike", \n "test": "test" \n}' : `function function${this.titleIdx}() {\n  \n}`
      }
    }
  }

  drop(codeBlockDropped: CdkDragDrop<any, any>) {
    this.codeBlock = codeBlockDropped.item.data;
  }
}
