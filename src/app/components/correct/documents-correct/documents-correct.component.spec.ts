import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsCorrectComponent } from './documents-correct.component';

describe('DocumentsCorrectComponent', () => {
  let component: DocumentsCorrectComponent;
  let fixture: ComponentFixture<DocumentsCorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsCorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
