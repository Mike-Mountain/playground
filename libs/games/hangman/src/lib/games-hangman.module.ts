import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanContainerComponent } from './components/hangman-container/hangman-container.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [RouterModule.forChild([{path: '', component: HangmanContainerComponent}]),CommonModule],
  declarations: [HangmanContainerComponent],
})
export class GamesHangmanModule {}
