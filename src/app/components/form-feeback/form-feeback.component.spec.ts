import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFeebackComponent } from './form-feeback.component';

describe('FormFeebackComponent', () => {
  let component: FormFeebackComponent;
  let fixture: ComponentFixture<FormFeebackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFeebackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFeebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
