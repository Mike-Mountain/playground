import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutContainerComponent} from './components/layout-container/layout-container.component';
import {LayoutModule} from "@playground/shared/shared-lib";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, LayoutModule, RouterModule],
  declarations: [
    LayoutContainerComponent
  ],
  exports: [
    LayoutContainerComponent
  ]
})
export class ContainerLibModule {
}
