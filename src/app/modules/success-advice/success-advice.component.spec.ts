import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAdviceComponent } from './success-advice.component';

describe('SuccessAdviceComponent', () => {
  let component: SuccessAdviceComponent;
  let fixture: ComponentFixture<SuccessAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAdviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
