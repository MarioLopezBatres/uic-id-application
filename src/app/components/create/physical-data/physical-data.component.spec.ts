import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalDataComponent } from './physical-data.component';

describe('PhysicalDataComponent', () => {
  let component: PhysicalDataComponent;
  let fixture: ComponentFixture<PhysicalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
