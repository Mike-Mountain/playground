import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {NavbarComponent, SidebarComponent, LayoutContainerComponent} from "./components";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LayoutContainerComponent,
    SidebarComponent,
    NavbarComponent
  ],
  exports: [
    LayoutContainerComponent
  ]
})
export class ContainerLibModule {
}
