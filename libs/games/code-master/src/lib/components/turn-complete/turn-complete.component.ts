import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CodeMasterTurn} from "../../models/code-master.model";
import {TurnState} from "@playground/games/games-shared";

@Component({
  selector: 'cdm-turn-complete',
  templateUrl: './turn-complete.component.html',
  styleUrls: ['./turn-complete.component.scss'],
})
export class TurnCompleteComponent implements OnInit {
  @Input() turn: CodeMasterTurn | undefined;
  @Input() turnIdx: number | undefined;

  @Output() complete = new EventEmitter<{ turn: CodeMasterTurn, turnIdx: number }>();

  public turnState = TurnState;

  constructor() {
  }

  ngOnInit(): void {
  }

  completeTurn(turn: CodeMasterTurn, turnIdx: number) {
    this.complete.emit({turn, turnIdx});
  }
}
