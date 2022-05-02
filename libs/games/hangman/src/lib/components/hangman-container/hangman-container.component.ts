import { Component, OnInit } from '@angular/core';
import {HangmanService} from "@playground/hangman/entry/services/hangman.service";
import {HangmanGame} from "@playground/hangman/entry/models/hangman.model";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'hng-hangman-container',
  templateUrl: './hangman-container.component.html',
  styleUrls: ['./hangman-container.component.scss'],
})
export class HangmanContainerComponent implements OnInit {
  public hangmanGame$: Observable<HangmanGame | undefined> | undefined;

  constructor(private hangmanService: HangmanService) {}

  ngOnInit(): void {
    this.hangmanGame$ = this.hangmanService.select();
  }

  playAgain() {
    // TODO: Fix the hangman script not stopping when the game restarts
    // this.hangmanService.createHangmanGameWithSettings();
    window.location.reload();
  }
}
