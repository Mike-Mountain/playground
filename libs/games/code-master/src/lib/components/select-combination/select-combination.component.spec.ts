import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCombinationComponent } from './select-combination.component';

describe('SelectCombinationComponent', () => {
  let component: SelectCombinationComponent;
  let fixture: ComponentFixture<SelectCombinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectCombinationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
