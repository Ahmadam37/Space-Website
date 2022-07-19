import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestenationDetailsComponent } from './destenation-details.component';

describe('DestenationDetailsComponent', () => {
  let component: DestenationDetailsComponent;
  let fixture: ComponentFixture<DestenationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestenationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestenationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
