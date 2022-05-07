import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {CodeMasterGame, CodeMasterSettings} from "../../models/code-master.model";
import {CodeMasterService} from "../../services/code-master.service";
import {GameMenuData, PlayerMode, TurnState, WinState} from "@playground/games/games-shared";

@Component({
  selector: 'cdm-code-master-container',
  templateUrl: './code-master-container.component.html',
  styleUrls: ['./code-master-container.component.scss']
})
export class CodeMasterContainerComponent implements OnInit {

  public codeMasterGame$: Observable<CodeMasterGame> | undefined | null;
  public codeMasterSettings$: Observable<CodeMasterSettings> | undefined | null;
  public gameMenuData: GameMenuData | undefined;
  public gameOver = false;
  public showSettings = false;
  public showCombinationSelect = false;
  public playerMode: PlayerMode = PlayerMode.single;
  public winState: WinState = WinState.InProgress;

  constructor(private codeMasterService: CodeMasterService) {
  }

  ngOnInit(): void {
    this.codeMasterSettings$ = this.codeMasterService.selectSettings();
    this.gameMenuData = {
      game: 'Code Master',
      singlePlayer: true,
      multiplayerLocal: true,
      multiPlayerOnline: false,
      settings: true
    }
  }

  showGameOver(winState: WinState) {
    this.gameOver = true;
    this.winState = winState;
  }

  refreshGame(settings?: CodeMasterSettings) {
    this.gameOver = false;
    if (this.playerMode === PlayerMode.single) {
      this.codeMasterService.createCodeMasterGame(settings);
    } else {
      this.showCombinationSelect = true;
    }
  }

  handleItemClick(item: string) {
    switch (item) {
      case 'settings':
        this.showSettings = true;
        break;
      case 'single':
        this.playerMode = PlayerMode.single;
        this.codeMasterGame$ = this.codeMasterService.selectGame(this.playerMode)
          .pipe(tap(game => this.startCodeMasterGame(game)));
        break;
      case 'multi-o':
      case 'multi-l':
        this.playerMode = PlayerMode.multiL;
        this.showCombinationSelect = true;
    }
  }

  createCodeMasterGame(selectedCombination: string[]) {
    this.codeMasterGame$ = this.codeMasterService.selectGame(this.playerMode, selectedCombination)
      .pipe(tap(game => this.startCodeMasterGame(game)));
    this.showCombinationSelect = false;
  }

  startCodeMasterGame(game: CodeMasterGame) {
    console.log(game.winCombination);
    game.turns[game.turns.length - 1].turnState = TurnState.InProgress;
  }

  updateSettings(settings: CodeMasterSettings) {
    this.showSettings = false;
    this.codeMasterService.updateSettings(settings);
  }
}
