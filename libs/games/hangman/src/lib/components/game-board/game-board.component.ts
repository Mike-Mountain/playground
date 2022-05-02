import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {HangmanGame, HangmanLetter, Letter} from "../../models/hangman.model";
import {WinState} from "@playground/games/games-shared";
import {createEmptyArray} from "@playground/code-master/entry/models/code-master.model";

@Component({
  selector: 'hng-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit, OnChanges {
  @Input() game: HangmanGame | undefined | null
  @Output() refreshGame = new EventEmitter();

  public selectedWordArray: HangmanLetter[] = [];
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['game'].currentValue) {
      this.selectedWordArray = [...changes['game'].currentValue.selectedWord].map(letter => {
        return {
          value: letter,
          canShow: false,
          isCorrect: false
        }
      });
      // Reset hangman image
      this.hangManSteps.forEach(step => step.canShow = false);
    }
  }

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
        this.hangManSteps[this.game.incorrectLetters.length - 1].canShow = true;
      }

      if (this.game.incorrectLetters.length === 12) {
        this.game.winState = WinState.Lost;
        this.selectedWordArray.forEach(letter => letter.canShow = true);
      }
    }
  }

  playAgain() {
    this.refreshGame.emit();
  }

  endGame() {
    if (this.game) {
      this.game.winState = WinState.Lost;
      this.selectedWordArray.forEach(letter => letter.canShow = true);
    }
  }
}
