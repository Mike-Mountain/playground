import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WinState} from "@playground/games/games-shared";
import {HangmanLetter} from "@playground/hangman/entry/models/hangman.model";

@Component({
  selector: 'hng-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss'],
})
export class GameOverComponent implements OnInit {
  @Input() set winState(value: WinState) {this.setData(value)};
  @Input() selectedWord: HangmanLetter[] = [];
  @Input() correctLetters: string[] = [];
  @Output() playAgain = new EventEmitter<boolean>();

  public data: any;
  public selectedWordArray: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.selectedWordArray = this.selectedWord.map((letter: HangmanLetter) => letter.value);
  }

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
        wordTitle: 'The winning word was:',
        selectedWord: this.selectedWordArray
      }
    }
  }
}
