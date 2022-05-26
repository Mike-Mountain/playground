import { Component, OnInit } from '@angular/core';
import {DataBlock} from "@playground/rxjs-query-builder/entry/models/data-block.model";
import {Observable} from "rxjs";

@Component({
  selector: 'query-query-builder-container',
  templateUrl: './query-builder-container.component.html',
  styleUrls: ['./query-builder-container.component.scss']
})
export class QueryBuilderContainerComponent implements OnInit {

  public savedDataBlocks: DataBlock[] = [];
  public savedCodeBlocks: DataBlock[] = [];
  public selectedDataBlock: DataBlock | undefined;
  public selectedCodeBlock: DataBlock | undefined;
  public output: Observable<any> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  saveDataBlock(dataBlock: {data: DataBlock, addToQuery: boolean}) {
    const existingIdx = this.savedDataBlocks.findIndex(block => block.title === dataBlock.data.title);
    if (existingIdx > -1) {
      this.savedDataBlocks[existingIdx] = dataBlock.data;
    } else {
      this.savedDataBlocks.push(dataBlock.data);
    }

  }

  saveCodeBlock(dataBlock: {data: DataBlock, addToQuery: boolean}) {
    const existingIdx = this.savedCodeBlocks.findIndex(block => block.title === dataBlock.data.title);
    if (existingIdx > -1) {
      this.savedCodeBlocks[existingIdx] = dataBlock.data;
    } else {
      this.savedCodeBlocks.push(dataBlock.data);
    }
  }

  showOutput(output: Observable<any>) {
    output.subscribe(data => console.log(data));
    this.output = output;
  }
}
