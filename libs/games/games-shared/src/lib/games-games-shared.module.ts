import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesLandingComponent } from './components/games-landing/games-landing.component';
import { GameMenuComponent } from './components/game-menu/game-menu.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule,],
  declarations: [GamesLandingComponent, GameMenuComponent],
  exports: [GamesLandingComponent, GameMenuComponent],
})
export class GamesGamesSharedModule {}
