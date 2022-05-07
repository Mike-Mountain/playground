import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CodeMasterSettings} from "../../models/code-master.model";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'cdm-select-combination',
  templateUrl: './select-combination.component.html',
  styleUrls: ['./select-combination.component.scss'],
})
export class SelectCombinationComponent implements OnInit {
  @Input() settings: CodeMasterSettings | undefined | null;
  @Output() selectedCombination = new EventEmitter<string[]>();
  @Output() cancel = new EventEmitter();
  public combination: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  selectColor(color: string) {
    if (this.settings && this.combination.length <= this.settings?.numberOfColors - 1) {
      this.combination.push(color);
    }
  }

  removeColor(index: number) {
    this.combination.splice(index, 1)
  }

  close(saveSettings?: boolean) {
    saveSettings ? this.selectedCombination.emit(this.combination) : this.cancel.emit();
    this.combination = [];
  }

  drop(event: CdkDragDrop<string[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.id === 'combination') {
        // moving into combinations array
        if (this.settings && this.combination.length <= this.settings?.numberOfColors - 1) {
          const color = event.item.element.nativeElement.innerText.toLowerCase();
          this.combination.push(color);
        }
      } else {
        // moving out of combinations array
        this.combination.splice(event.currentIndex, 1);
      }
    }
  }
}
