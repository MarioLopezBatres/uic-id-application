import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresssComponent } from './adresss.component';

describe('AdresssComponent', () => {
  let component: AdresssComponent;
  let fixture: ComponentFixture<AdresssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
