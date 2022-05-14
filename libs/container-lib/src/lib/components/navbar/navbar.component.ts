import {Component, EventEmitter, OnInit, Output} from '@angular/core';

interface DropUps {
  games: boolean;
  tools: boolean;
}

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toggleSideBar = new EventEmitter<boolean>();

  public dropUps: DropUps = {games: false, tools: false};

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.toggleSideBar.emit();
  }

  toggleDropUp(target: string, close?: boolean) {
    // Close any open dropUps before opening the target
    // Object.keys(this.dropUps).forEach(key => this.dropUps[key as keyof DropUps] = false);
    // Toggle DropUp
    this.dropUps[target as keyof DropUps] = !this.dropUps[target as keyof DropUps];
  }
}
