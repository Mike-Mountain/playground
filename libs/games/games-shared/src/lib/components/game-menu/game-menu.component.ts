import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameMenuData} from "../../models/game-menu.model";

@Component({
  selector: 'gs-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.scss'],
})
export class GameMenuComponent implements OnInit {
  @Input() gameMenuData: GameMenuData | undefined;
  @Output() itemClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  menuitemClicked(item: string) {
    this.itemClicked.emit(item);
  }
}
