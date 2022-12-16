import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SELECTMOCK } from '@core/mocks/select.mock';

import { CheckListComponent } from './check-list.component';

describe('CheckListComponent', () => {
  let component: CheckListComponent;
  let fixture: ComponentFixture<CheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ CheckListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add option to control', () => {
    component.options = SELECTMOCK;
    component.selected = [];
    component.checkValue(SELECTMOCK[0]);
    expect(component.form.controls[component.control].value).toEqual([SELECTMOCK[0].value])
  });

  it('delete option of control', () => {
    component.options = SELECTMOCK;
    component.selected = [SELECTMOCK[0].value];
    component.checkValue(SELECTMOCK[0]);
    expect(component.form.controls[component.control].value).toEqual([])
  });
});
