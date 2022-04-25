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
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: CodeMasterContainerComponent },
    ]),
    LoadingModule,
    DragDropModule,
  ],
  declarations: [
    CodeMasterContainerComponent,
    GameBoardComponent,
    GameOverComponent,
    WinCombinationComponent,
    PinsComponent,
    ColorsComponent,
    TurnCompleteComponent,
    GameSettingsComponent,
    HelpComponent,
  ],
})
export class GamesCodeMasterModule {}
