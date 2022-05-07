import { Component, OnInit } from '@angular/core';
import {HangmanService} from "@playground/hangman/entry/services/hangman.service";
import {HangmanGame, HangmanLetter} from "@playground/hangman/entry/models/hangman.model";
import {Observable, tap} from "rxjs";
import {WinState} from "@playground/games/games-shared";

@Component({
  selector: 'hng-hangman-container',
  templateUrl: './hangman-container.component.html',
  styleUrls: ['./hangman-container.component.scss'],
})
export class HangmanContainerComponent implements OnInit {
  public hangmanGame$: Observable<HangmanGame | undefined> | undefined;
  public selectedWordArray: HangmanLetter[] = [];
  public gameOver = false;

  constructor(private hangmanService: HangmanService) {}

  ngOnInit(): void {
    this.hangmanGame$ = this.hangmanService.select().pipe(tap(game => {
      if (game) {
        this.selectedWordArray = [...game?.selectedWord].map(letter => {
          return {
            value: letter,
            canShow: false,
            isCorrect: false
          }
        });
      }
    }));
  }

  showGameOver(winState: WinState) {
    this.gameOver = true;
  }

  playAgain() {
    // TODO: Fix the hangman script not stopping when the game restarts
    // this.hangmanService.createHangmanGameWithSettings();
    window.location.reload();
  }
}
