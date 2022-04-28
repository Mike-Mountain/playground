import {
  AfterViewInit,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {CMColor, CodeMasterGame, CodeMasterTurn} from "@playground/code-master/entry/models/code-master.model";
import {TurnState} from "@playground/games/games-shared";

@Component({
  selector: 'cdm-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  @Input() game: CodeMasterGame | undefined;
  @Input() turn: CodeMasterTurn | undefined;
  @Input() turnIdx: number | undefined;

  @Output() selectable = new EventEmitter<{ color: CMColor, turn: CodeMasterTurn }>();
  @Output() color = new EventEmitter<{ option: string, color: CMColor }>();

  public turnState = TurnState;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  setSelectable(color: CMColor, turn: CodeMasterTurn, colorIdx: number, dropdown: HTMLElement) {
    if (dropdown && this.game && this.turnIdx !== undefined) {
      const xAxisClass = this.isHalfOrGrater(colorIdx, turn.colors.length) ? 'is-right' : 'is-left';
      const yAxisClass = this.isHalfOrGrater(this.turnIdx, this.game.turns.length) ? 'is-up' : 'is-down';
      this.renderer.addClass(dropdown, xAxisClass);
      this.renderer.addClass(dropdown, yAxisClass);
    }
    this.selectable.emit({color, turn});
  }

  selectColor(option: string, color: CMColor) {
    this.color.emit({option, color});
  }

  isHalfOrGrater(idx: number, length: number): boolean {
    return ((idx * 2) >= length - 1);
  }
}
