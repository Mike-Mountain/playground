import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CodeMasterService} from "../../services/code-master.service";
import {CodeMasterSettings} from "../../models/code-master.model";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'cdm-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss'],
})
export class GameSettingsComponent implements OnInit {

  @Input() settings: CodeMasterSettings | undefined;
  @Output() close = new EventEmitter<boolean>();

  public settingsForm: FormGroup | undefined;
  public allColorOptions = [
    'yellow',
    'green',
    'forest',
    'cyan',
    'blue',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'fire',
    'peach',
    'teal',
    'olive',
    'mauve',
    'blank',
  ]

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
    this.close.emit();
  }

  saveSettings() {
    this.settings = {
      numberOfTurns: this.settingsForm?.value.numberOfTurns,
      numberOfColors: this.settingsForm?.value.numberOfColors,
      colorOptions: this.settings?.colorOptions as string[]
    };
    console.log(this.settings);
    this.codeMasterService.createGameWithSettings(this.settings);
    this.closeModal();
  }
}
