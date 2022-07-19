import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistenationComponent } from './distenation.component';

describe('DistenationComponent', () => {
  let component: DistenationComponent;
  let fixture: ComponentFixture<DistenationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistenationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistenationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
