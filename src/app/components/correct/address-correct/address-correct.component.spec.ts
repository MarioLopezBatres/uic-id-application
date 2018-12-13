import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCorrectComponent } from './address-correct.component';

describe('AddressCorrectComponent', () => {
  let component: AddressCorrectComponent;
  let fixture: ComponentFixture<AddressCorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressCorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
