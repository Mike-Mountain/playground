import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Component({
  selector: 'query-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss'],
})
export class QueryBuilderComponent implements OnInit {
  @Output() output = new EventEmitter<Observable<any>>();
  outputData = new BehaviorSubject<any>('');

  dataBlocks: any[] = [];
  operators: any[] = [];

  codeBlocks: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  dropDataBlock(dataBlock: CdkDragDrop<any, any>) {
    this.dataBlocks.push(dataBlock.item.data);
    this.createOutput();
  }

  dropOperator(operator: CdkDragDrop<any, any>) {
    this.operators.push(operator.item.data);
    this.createOutput();
  }

  dropCodeBlock(codeBlock: CdkDragDrop<any, any>) {
    this.codeBlocks.push(codeBlock.item.data);
    this.createOutput();
  }

  createOutput() {
    this.outputData.next(this.dataBlocks[0]);
    this.output.emit(this.outputData.asObservable());
  }
}
