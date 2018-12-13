import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthDataCorrectComponent } from './birth-data-correct.component';

describe('BirthDataCorrectComponent', () => {
  let component: BirthDataCorrectComponent;
  let fixture: ComponentFixture<BirthDataCorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthDataCorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthDataCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
