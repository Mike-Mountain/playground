import {Component, Input, OnInit} from '@angular/core';
import {HangmanGame, HangmanLetter, Letter} from "../../models/hangman.model";
import {WinState} from "@playground/games/games-shared";
import {createEmptyArray} from "@playground/code-master/entry/models/code-master.model";

@Component({
  selector: 'hng-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  @Input() game: HangmanGame | undefined | null
  public selectedWordArray: HangmanLetter[] = [];
  public hangManSteps: number[] = createEmptyArray(11);
  public winState = WinState;

  constructor() {}

  ngOnInit(): void {
    console.log(this.game);
    if (this.game) {
      this.selectedWordArray = [...this.game.selectedWord].map(letter => {
        return {
          value: letter,
          canShow: false,
          isCorrect: false
        }
      });
    }
  }

  selectLetter(letter: Letter) {
    letter.isSelected = true;
    if (this.game) {
      letter.isCorrect = [...this.game.selectedWord].includes(letter.value);
      if (letter.isCorrect) {
        this.game.correctLetters.push(letter.value);
        this.selectedWordArray.forEach(selectedLetter => {
          if (this.game?.correctLetters.includes(selectedLetter.value)) {
            selectedLetter.canShow = true;
            selectedLetter.isCorrect = true;
          }
        })
      } else {
        this.game.incorrectLetters.push(letter.value);
      }

      if (this.game.incorrectLetters.length === 11) {
        this.game.winState = WinState.Lost;
        this.selectedWordArray.forEach(letter => letter.canShow = true);
      }
    }
  }
}
