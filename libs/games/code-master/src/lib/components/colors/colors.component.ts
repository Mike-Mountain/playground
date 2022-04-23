import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CMColor, CodeMasterGame, CodeMasterTurn} from "@playground/code-master/entry/models/code-master.model";
import {TurnState} from "@playground/code-master/entry/models/states.enum";

@Component({
  selector: 'cdm-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  @Input() game: CodeMasterGame | undefined;
  @Input() turn: CodeMasterTurn | undefined;

  @Output() selectable = new EventEmitter<{ color: CMColor, turn: CodeMasterTurn }>();
  @Output() color = new EventEmitter<{ option: string, color: CMColor }>();

  public turnState = TurnState;

  constructor() {
  }

  ngOnInit(): void {
  }

  setSelectable(color: CMColor, turn: CodeMasterTurn) {
    this.selectable.emit({color, turn});
  }

  selectColor(option: string, color: CMColor) {
    this.color.emit({option, color});
  }
}
