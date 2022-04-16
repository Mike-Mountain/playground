import {Component, OnInit} from '@angular/core';
import {animate, group, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'ctr-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
  animations: [
    trigger('toggleSidebar', [
      transition(':enter', [
        query('.sidebar', [
          style({left: '-50%'}),
          animate('300ms ease'),
          style({left: 0})
        ]),
      ]),
      transition(':leave', [
        group([
          query('.sidebar', [
            animate('300ms ease'),
            style({left: '-50%'})
          ]),
          animate('300ms ease', style({opacity: 0}))
        ]),
      ])
    ])
  ]
})
export class LayoutContainerComponent implements OnInit {

  showSidebar = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
