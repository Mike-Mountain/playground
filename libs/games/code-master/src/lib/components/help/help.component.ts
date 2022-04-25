import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CodeMasterSettings, createEmptyArray} from "../../models/code-master.model";

@Component({
  selector: 'cdm-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  @Input() settings: CodeMasterSettings | undefined;
  @Output() close = new EventEmitter<boolean>();

  public pins: string[] = [];
  public colors: (string | undefined)[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.setHelpPins();
    this.setHelpColors();
  }

  setHelpPins() {
    if (this.settings) {
      this.pins = createEmptyArray(this.settings.numberOfColors).map((pin, idx) => {
        switch (idx) {
          case 0:
            return 'black';
          case 1:
          case 2:
            return 'white';
          default:
            return ''
        }
      })
    }
  }

  setHelpColors() {
    if (this.settings) {
      this.colors = createEmptyArray(this.settings.numberOfColors).map((color, idx) => {
        let blockColor: string;
        if (this.settings) {
          if (idx === this.settings.numberOfColors - 1) {
            blockColor = 'blank'
          } else {
            blockColor = this.settings.colorOptions[idx];
            // The word 'orange' does not fit on the button in the help dialog
            if (blockColor === 'orange') {
              blockColor = 'purple'
            }
          }
          return blockColor;
        } else {
          return 'blank'
        }
      });
    }
  }

  closeModal() {
    this.close.emit();
  }
}
