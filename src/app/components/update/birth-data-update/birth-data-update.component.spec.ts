import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthDataUpdateComponent } from './birth-data-update.component';

describe('BirthDataUpdateComponent', () => {
  let component: BirthDataUpdateComponent;
  let fixture: ComponentFixture<BirthDataUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthDataUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthDataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
