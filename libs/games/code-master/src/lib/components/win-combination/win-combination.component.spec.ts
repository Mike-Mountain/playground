import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinCombinationComponent } from './win-combination.component';

describe('WinCombinationComponent', () => {
  let component: WinCombinationComponent;
  let fixture: ComponentFixture<WinCombinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinCombinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
