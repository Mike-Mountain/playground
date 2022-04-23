import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeMasterContainerComponent } from './components/code-master-container/code-master-container.component';
import { RouterModule } from '@angular/router';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameOverComponent } from './components/game-over/game-over.component';
import { LoadingModule } from '@playground/shared/shared-lib';
import { WinCombinationComponent } from './components/win-combination/win-combination.component';
import { PinsComponent } from './components/pins/pins.component';
import { ColorsComponent } from './components/colors/colors.component';
import { TurnCompleteComponent } from './components/turn-complete/turn-complete.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CodeMasterContainerComponent },
    ]),
    LoadingModule,
  ],
  declarations: [
    CodeMasterContainerComponent,
    GameBoardComponent,
    GameOverComponent,
    WinCombinationComponent,
    PinsComponent,
    ColorsComponent,
    TurnCompleteComponent,
  ],
})
export class GamesCodeMasterModule {}
