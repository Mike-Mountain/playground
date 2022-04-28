import {Component, Input, OnInit} from '@angular/core';
import {CMPin} from "@playground/code-master/entry/models/code-master.model";
import {TurnState} from "@playground/games/games-shared";

@Component({
  selector: 'cdm-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.scss'],
})
export class PinsComponent implements OnInit {

  @Input() pins: CMPin[] = [];
  @Input() state: TurnState | undefined;

  public turnState = TurnState;

  constructor() {}

  ngOnInit(): void {}
}
