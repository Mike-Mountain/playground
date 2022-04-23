import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CMColor, CMPin, CodeMasterGame, CodeMasterTurn} from "../../models/code-master.model";
import {TurnState, WinState} from "../../models/states.enum";
import {CodeMasterService} from "../../services/code-master.service";
import {interval, takeWhile} from "rxjs";

@Component({
  selector: 'cdm-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  @Input() game: CodeMasterGame | undefined | null;

  @Output() gameOver = new EventEmitter<WinState>();

  public turnState = TurnState;
  public winState = WinState

  constructor(private codeMasterService: CodeMasterService) {
  }

  ngOnInit(): void {}

  public setSelectable(color: CMColor, turn: CodeMasterTurn): void {
    if (turn.turnState === TurnState.InProgress && this.canSelectColor()) {
      color.selectedColor !== 'blank' ? color.selectedColor = 'blank' : color.selectable = true;
    }
  }

  public selectColor(option: string, color: CMColor): void {
    color.selectedColor = option;
    color.selectable = false;
  }

  public completeTurn(turn: CodeMasterTurn, turnIdx: number) {
    if (this.game && this.canSelectColor()) {
      turn.loading = true;
      const sortedPins: CMPin[] = this.codeMasterService.setAndSortPins(turn, this.game.winCombination);
      let count = 0;
      if (sortedPins.filter(sortedPin => sortedPin !== 'blank').length === 0) {
        // No pins, skip to next turn with minor delay
        setTimeout(() => {
          this.nextTurn(turn, turnIdx);
        }, 700)
      } else {
        interval(700)
          .pipe(takeWhile(() => count <= sortedPins.length))
          .subscribe(() => {
            if (this.game) {
              if (count <= sortedPins.length - 1) {
                if (sortedPins[count] === 'blank') {
                  // No more pins, skip to next turn
                  this.nextTurn(turn, turnIdx);
                } else {
                  turn.pins[count] = sortedPins[count];
                }
              } else {
                // All pins assigned, skip to next turn
                this.nextTurn(turn, turnIdx);
              }
            }
            count++;
          })
      }
    }
  }

  nextTurn(turn: CodeMasterTurn, turnIdx: number) {
    if (this.game) {
      this.game.winState = this.codeMasterService.checkForWin(turn.pins, turnIdx);
      if (this.game.winState === WinState.Won) {
        turn.isWinningTurn = true;
        this.gameOver.emit(this.game.winState)
      } else {
        if (turnIdx > 0 && this.game.winState === WinState.InProgress) {
          this.game.turns[turnIdx - 1].turnState = TurnState.InProgress;
        } else {
          console.log('Game lost!, Emitting: ', this.game.winState);
          this.gameOver.emit(this.game.winState)
        }
      }
      turn.turnState = TurnState.Complete;
      turn.loading = false;
    }
  }

  private canSelectColor(): boolean {
    const found = this.game?.turns.find(turn => turn.colors.find(color => color.selectable))
    return !found;
  }
}
