import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAdviceComponent } from './error-advice.component';

describe('ErrorAdviceComponent', () => {
  let component: ErrorAdviceComponent;
  let fixture: ComponentFixture<ErrorAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorAdviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
