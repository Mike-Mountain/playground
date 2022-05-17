import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'query-model-builder',
  templateUrl: './model-builder.component.html',
  styleUrls: ['./model-builder.component.scss'],
})
export class ModelBuilderComponent implements OnInit {

  public model: Map<string, unknown> = new Map<string, unknown>();

  constructor() {}

  ngOnInit(): void {
  }
}
