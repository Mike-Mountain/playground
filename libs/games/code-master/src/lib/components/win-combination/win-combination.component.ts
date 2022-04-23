import {Component, Input, OnInit} from '@angular/core';
import {CodeMasterGame} from "@playground/code-master/entry/models/code-master.model";
import {WinState} from "@playground/code-master/entry/models/states.enum";

@Component({
  selector: 'cdm-win-combination',
  templateUrl: './win-combination.component.html',
  styleUrls: ['./win-combination.component.scss']
})
export class WinCombinationComponent implements OnInit {

  @Input() game: CodeMasterGame | undefined;
  public winState = WinState;

  constructor() { }

  ngOnInit(): void {
  }

}
