import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {CodeMasterGame, CodeMasterSettings} from "../../models/code-master.model";
import {CodeMasterService} from "../../services/code-master.service";
import {TurnState, WinState} from "@playground/games/games-shared";

@Component({
  selector: 'cdm-code-master-container',
  templateUrl: './code-master-container.component.html',
  styleUrls: ['./code-master-container.component.scss']
})
export class CodeMasterContainerComponent implements OnInit {

  public codeMasterGame$: Observable<CodeMasterGame> | undefined | null;
  public gameOver = false;
  public winState: WinState = WinState.InProgress;

  constructor(private codeMasterService: CodeMasterService) {
  }

  ngOnInit(): void {
    this.codeMasterGame$ = this.codeMasterService.select()
      .pipe(tap(game => {
        console.log(game.winCombination);
        game.turns[game.turns.length - 1].turnState = TurnState.InProgress;
      }));
  }

  showGameOver(winState: WinState) {
    this.gameOver = true;
    this.winState = winState;
  }

  refreshGame(settings?: CodeMasterSettings) {
    this.gameOver = false;
    this.codeMasterService.createGameWithSettings(settings);
  }
}
