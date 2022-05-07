import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {HangmanGame, HangmanLetter, Letter} from "../../models/hangman.model";
import {createEmptyArray, WinState} from "@playground/games/games-shared";

@Component({
  selector: 'hng-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  @Input() game: HangmanGame | undefined | null;
  @Input() selectedWordArray: HangmanLetter[] = [];
  @Output() gameOver = new EventEmitter<WinState>();

  public hangManSteps: {step: number, canShow: boolean}[];
  public winState = WinState;

  constructor() {
    this.hangManSteps = createEmptyArray(12).map(step => {
      return {
        step,
        canShow: false
      }
    });
  }

  ngOnInit(): void {
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
        if (this.game.correctLetters.length === this.game.selectedWord.length - 1) {
          this.game.winState = WinState.Won;
          this.showGameOver();
        }
      } else {
        this.game.incorrectLetters.push(letter.value);
        this.hangManSteps[this.game.incorrectLetters.length - 1].canShow = true;
      }

      if (this.game.incorrectLetters.length === 12) {
        this.game.winState = WinState.Lost;
        this.showGameOver();
        this.selectedWordArray.forEach(letter => letter.canShow = true);
      }
    }
  }

  showGameOver() {
    this.gameOver.emit(this.game?.winState);
  }
}
