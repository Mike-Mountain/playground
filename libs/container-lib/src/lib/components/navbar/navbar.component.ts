import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toggleSideBar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.toggleSideBar.emit();
  }

}
