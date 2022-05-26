import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'query-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  @Output() selectedOperator = new EventEmitter<string>();

  public operators: string[] = [
    'map',
    'tap',
    'filter'
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  selectOperator(operator: string) {
    this.selectedOperator.emit(operator);
  }
}
