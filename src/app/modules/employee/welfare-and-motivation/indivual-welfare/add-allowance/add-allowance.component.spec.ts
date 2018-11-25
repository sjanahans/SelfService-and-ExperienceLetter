import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAllowanceComponent } from './add-allowance.component';

describe('AddAllowanceComponent', () => {
  let component: AddAllowanceComponent;
  let fixture: ComponentFixture<AddAllowanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAllowanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAllowanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
