import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesLandingComponent} from './components/games-landing/games-landing.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{path: '', component: GamesLandingComponent}])],
  declarations: [GamesLandingComponent],
  exports: [GamesLandingComponent]
})
export class GamesGamesSharedModule {
}
