import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalDataUpdateComponent } from './physical-data-update.component';

describe('PhysicalDataUpdateComponent', () => {
  let component: PhysicalDataUpdateComponent;
  let fixture: ComponentFixture<PhysicalDataUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalDataUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalDataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
