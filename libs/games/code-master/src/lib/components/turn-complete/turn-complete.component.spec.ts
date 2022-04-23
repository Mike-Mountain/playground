import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnCompleteComponent } from './turn-complete.component';

describe('TurnCompleteComponent', () => {
  let component: TurnCompleteComponent;
  let fixture: ComponentFixture<TurnCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurnCompleteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
