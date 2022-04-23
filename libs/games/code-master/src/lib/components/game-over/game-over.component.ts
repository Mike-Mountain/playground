import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WinState} from "@playground/code-master/entry/models/states.enum";

@Component({
  selector: 'cdm-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  @Input() set winState(value: WinState) {this.setData(value)};
  @Input() winCombination?: string[];
  @Output() playAgain = new EventEmitter<boolean>();

  public data: any;

  constructor() {
  }

  ngOnInit(): void {}

  refreshGame() {
    this.playAgain.emit();
  }

  setData(winState: WinState) {
    if (winState === WinState.Won) {
      this.data = {
        title: 'Congratulations!',
        description: 'You won the game!'
      }
    } else {
      this.data = {
        title: 'Oh No :(',
        description: 'You lost the game!',
        colorsTitle: 'The winning combination was:',
        winCombination: this.winCombination
      }
    }
  }
}
