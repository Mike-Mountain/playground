import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {
  CMPin,
  CodeMasterGame,
  CodeMasterSettings,
  CodeMasterTurn,
  createCodeMasterGame, createCMSettings
} from "../models/code-master.model";
import {PlayerMode, WinState} from "@playground/games/games-shared";

@Injectable({
  providedIn: 'root'
})
export class CodeMasterService {

  private codeMasterGameSrc = new BehaviorSubject<CodeMasterGame>(createCodeMasterGame());
  private codeMasterSettingsSrc = new BehaviorSubject<CodeMasterSettings>(createCMSettings());

  constructor() {
  }

  public selectGame(playerMode: PlayerMode, selectedCombo?: string[]): Observable<any> {
    switch (playerMode) {
      case PlayerMode.multiL:
        if (selectedCombo) {
          this.createGameWithCombo(selectedCombo);
        }
        return this.codeMasterGameSrc.asObservable();
      case PlayerMode.multiO:
        // Not Implemented
      case PlayerMode.single:
      default:
        return this.codeMasterGameSrc.asObservable();
    }
  }

  public selectSettings(): Observable<any> {
    return this.codeMasterSettingsSrc.asObservable();
  }

  public updateSettings(settings: CodeMasterSettings) {
    this.codeMasterSettingsSrc.next(createCMSettings(settings))
  }

  public setAndSortPins(turn: CodeMasterTurn, winCombination: string[]): CMPin[] {
    const player = turn.colors.map(color => color.selectedColor);
    const winCombo = winCombination.map(item => item);
    let pins: CMPin[] = [];
    // Find an exact match
    for (let i = player.length - 1; i >= 0; i--) {
      if (player[i] === winCombo[i]) {
        pins.push('black');
        player.splice(i, 1);
        winCombo.splice(i, 1);
      }
    }

    // Find partial match. Separate loops to prevent counting black pins
    for (let i = player.length - 1; i >= 0; i--) {
      if (winCombo.includes(player[i])) {
        const idx = winCombo.findIndex((color: string) => color === player[i]);
        pins.push('white');
        player.splice(i, 1);
        winCombo.splice(idx, 1);
      } else {
        pins.push('blank');
      }
    }

    // Sort pins
    return pins.sort((a, b) => {
      if (a === 'blank') {
        return 1;
      } else {
        if (a === 'white' && b === 'black') {
          return 1;
        }
        return -1;
      }
    });
  }

  public checkForWin(pins: CMPin[], turnIdx: number) {
    const found = pins.find(pin => pin !== 'black');
    let state: WinState;
    if (!found) {
      state = WinState.Won;
    } else if (turnIdx === 0) {
      state = WinState.Lost
    } else {
      state = WinState.InProgress;
    }
    return state;
  }

  public createGameWithCombo(combination: string[]) {
    const settings = this.codeMasterSettingsSrc.getValue();
    this.codeMasterGameSrc.next(createCodeMasterGame(settings, combination));
  }

  public createGameWithSettings(settings?: CodeMasterSettings) {
    this.codeMasterGameSrc.next(createCodeMasterGame(settings));
  }
}
