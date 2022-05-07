import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {WinState} from "@playground/games/games-shared";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'hng-hanging-man',
  templateUrl: './hanging-man.component.html',
  styleUrls: ['./hanging-man.component.scss'],
})
export class HangingManComponent implements OnInit, AfterViewInit {
  @Input() gameState: WinState | undefined;
  @Input() hangManSteps: {step: number, canShow: boolean}[] = [];
  public winState = WinState;

  constructor() {
  }

  ngOnInit(): void {
    // For debugging
    // this.hangManSteps.forEach(step => step.canShow = true)
  }

  ngAfterViewInit() {
  }
}
