import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalDataCorrectComponent } from './physical-data-correct.component';

describe('PhysicalDataCorrectComponent', () => {
  let component: PhysicalDataCorrectComponent;
  let fixture: ComponentFixture<PhysicalDataCorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalDataCorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalDataCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
