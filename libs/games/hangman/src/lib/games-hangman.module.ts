import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HangmanContainerComponent} from './components/hangman-container/hangman-container.component';
import {RouterModule} from '@angular/router';
import {GameBoardComponent} from './components/game-board/game-board.component';
import {SharedSharedLibModule} from "@playground/shared/shared-lib";

@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: HangmanContainerComponent}]),
    CommonModule,
    SharedSharedLibModule,
  ],
  declarations: [HangmanContainerComponent, GameBoardComponent],
})
export class GamesHangmanModule {
}
