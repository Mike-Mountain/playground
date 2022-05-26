import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryBuilderContainerComponent } from './query-builder-container.component';

describe('QueryBuilderContainerComponent', () => {
  let component: QueryBuilderContainerComponent;
  let fixture: ComponentFixture<QueryBuilderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryBuilderContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryBuilderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
