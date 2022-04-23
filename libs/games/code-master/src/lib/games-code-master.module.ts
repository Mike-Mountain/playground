import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeMasterContainerComponent} from './components/code-master-container/code-master-container.component';
import {RouterModule} from "@angular/router";
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameOverComponent } from './components/game-over/game-over.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {path: '', component: CodeMasterContainerComponent}
  ])],
  declarations: [
    CodeMasterContainerComponent,
    GameBoardComponent,
    GameOverComponent
  ],
})
export class GamesCodeMasterModule {
}
