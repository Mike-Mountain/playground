import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CodeMasterService} from "../../services/code-master.service";
import {CodeMasterSettings} from "../../models/code-master.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {colorOptions} from "../../models/color-options.const";

@Component({
  selector: 'cdm-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss'],
})
export class GameSettingsComponent implements OnInit {

  @Input() settings: CodeMasterSettings | undefined | null;
  @Output() close = new EventEmitter<CodeMasterSettings>();

  public settingsForm: FormGroup | undefined;
  public allColorOptions = colorOptions;

  constructor(private codeMasterService: CodeMasterService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.settings) {
      this.settingsForm = this.formBuilder.group({
        numberOfColors: [this.settings.numberOfColors, Validators.required],
        numberOfTurns: [this.settings.numberOfTurns, Validators.required],
      })
      this.allColorOptions = this.allColorOptions.filter(option => !this.settings?.colorOptions.includes(option));
    }
  }


  drop(event: CdkDragDrop<string[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  closeModal() {
    if (this.settings) {
      this.close.emit(this.settings);
    }
  }

  saveSettings() {
    this.settings = {
      numberOfTurns: this.settingsForm?.value.numberOfTurns,
      numberOfColors: this.settingsForm?.value.numberOfColors,
      colorOptions: this.settings?.colorOptions as string[]
    };
    this.codeMasterService.createCodeMasterGame(this.settings);
    this.closeModal();
  }
}
