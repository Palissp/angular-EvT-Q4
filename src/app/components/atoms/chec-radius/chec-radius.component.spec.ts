import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecRadiusComponent } from './chec-radius.component';

describe('ChecRadiusComponent', () => {
  let component: ChecRadiusComponent;
  let fixture: ComponentFixture<ChecRadiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecRadiusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
