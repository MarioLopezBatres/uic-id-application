import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataCorrectComponent } from './personal-data-correct.component';

describe('PersonalDataCorrectComponent', () => {
  let component: PersonalDataCorrectComponent;
  let fixture: ComponentFixture<PersonalDataCorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDataCorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
