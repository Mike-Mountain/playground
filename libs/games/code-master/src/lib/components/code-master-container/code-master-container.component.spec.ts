import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeMasterContainerComponent } from './code-master-container.component';

describe('CodeMasterContainerComponent', () => {
  let component: CodeMasterContainerComponent;
  let fixture: ComponentFixture<CodeMasterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeMasterContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMasterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
