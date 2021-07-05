import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCursorComponent } from './time-cursor.component';

describe('TimeCursorComponent', () => {
  let component: TimeCursorComponent;
  let fixture: ComponentFixture<TimeCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeCursorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
